import React, { useState, useEffect } from "react";
import { db } from "../firebase";

const LinksForm = (props) => {
  const initialStateValues = {
    url: "",
    name: "",
    description: "",
  };

  const [values, setValues] = useState(initialStateValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const [data, setData] = useState("");
  let año = new Date().getFullYear();
  let meses = new Date().getMonth();
  const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agostp",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  const mes = months[meses];
  let dia = new Date().getDate();

  let fecha = mes + " " + dia + ", " + año;

  const handleSubmit = (e) => {
    e.preventDefault();

    const getData = async () => {
      axios
        .get(
          "https://prodcutosjuangranel-default-rtdb.firebaseio.com/articulos/" +
            values.url +
            ".json"
        )
        .then((response) => {
          const myData = response.data;
          setData(myData);
        });
    };

    if (values.url != "" && values.name != "" && values.description != "") {
      props.addOrEditLink(values);
      setValues({ ...initialStateValues });


      e.preventDefault();

      fetch(
        "https://prodcutosjuangranel-default-rtdb.firebaseio.com/articulos/" +
          values.url +
          ".json",
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            desc: data.desc,
            dieta: "",
            imagen: "",
            propiedades: fecha,
            titulo: "",
            contenido: "",
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
    const doc = await db.collection("post").doc(id).get();
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
        "https://prodcutosjuangranel-default-rtdb.firebaseio.com/articulos/" +
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
            placeholder="link del articulo: /uno-dos"
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
