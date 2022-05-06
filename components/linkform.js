import { Button } from "@nextui-org/react";
import React, { useState, useEffect } from "react";
import { db } from "../firebase";

const LinksForm = (props) => {
  const initialStateValues = {
    url: "",
    name: "",
    description: "",
    categoria1: "",
  };

  const [newCurso, setNewCurso] = useState("");
  const [values, setValues] = useState(initialStateValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      values.url != "" &&
      values.name != "" &&
      values.description != "" &&
      values.categoria1 != ""
    ) {
      props.addOrEditLink(values);
      setValues({ ...initialStateValues });

      let pepe = values.url;

      e.preventDefault();
      fetch(
        "https://prodcutosjuangranel-default-rtdb.firebaseio.com/productos/" +
          values.url +
          ".json",
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ pepe }),
        }
      ).then(() => {
        console.log();
      });

      fetch(
        "https://prodcutosjuangranel-default-rtdb.firebaseio.com/productos/" +
          values.url +
          ".json",
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            url1: "",
            url2: "",
            url3: "",
            imagen: "",
            titulo: "",
            uno: "",
            dos: "",
            tres: "",
          }),
        }
      ).then(() => {
        console.log();
      });
    } else {
      alert("Rellena todos los campos para poder añadir el nuevo curso.");
    }
  };

  const getLinkById = async (id) => {
    const doc = await db.collection("links").doc(id).get();
    setValues({ ...doc.data() });
  };

  useEffect(() => {
    if (props.currentId === "") {
      setValues({ ...initialStateValues });
    } else {
      getLinkById(props.currentId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.currentId]);

  const getData = async () => {
    axios
      .post(
        "https://prodcutosjuangranel-default-rtdb.firebaseio.com/productos/" +
          values.description +
          ".json"
      )
      .then((response) => {
        const myData = response.data;
      });
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        style={{ height: "57vh" }}
        className="input-manager card-body border-primary"
      >
        <div className="form-group input-group">
          <input
            autoComplete="off"
            type="text"
            className="form-control input-news"
            placeholder="link del producto: /cursoUno"
            value={values.url}
            name="url"
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group input-group">
          <input
            autoComplete="off"
            type="text"
            value={values.name}
            name="name"
            placeholder="ej. https://fruta.png"
            className="form-control input-news"
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <input
            autoComplete="off"
            type="text"
            className="form-control input-news"
            placeholder="Titulo: masaje"
            name="description"
            value={values.description}
            onChange={handleInputChange}
          ></input>
        </div>

        <button color={"#9fd364"} className="btnForm">
          {props.currentId === "" ? "Publicar" : "Actualizar"}
        </button>
      </form>
    </>
  );
};

export default LinksForm;
