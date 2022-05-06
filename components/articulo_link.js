import React, { useEffect, useState } from "react";
import LinksForm from "./linkArticle";
import Link from "next/link";
import { Button } from "@nextui-org/react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { db } from "../firebase";



const Links = () => {
  const [links, setLinks] = useState([]);
  const [currentId, setCurrentId] = useState("");

  const getLinks = async () => {
    db.collection("post").onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setLinks(docs);
    });
  };

  const onDeleteLink = async (id) => {
    if (window.confirm("Eliminar este Articulo?")) {
      await db.collection("post").doc(id).delete();
      toast("Articulos eliminado", {
        type: "error",
        autoClose: 2000,
      });
    }
  };

  useEffect(() => {
    getLinks();
  }, []);

  const addOrEditLink = async (linkObject) => {
    try {
      if (currentId === "") {
        await db.collection("post").doc().set(linkObject);
        toast("Nuevo Articulos añadido", {
          type: "success",
        });
      } else {
        await db.collection("post").doc(currentId).update(linkObject);
        toast("Articulos actualizado", {
          type: "info",
        });
        setCurrentId("");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="col-md-4 p-2">
        <LinksForm {...{ addOrEditLink, currentId, links }} />
      </div>
      <div className="cards manager-cards" style={{ top: "55vh" }}>
        {links &&
          links.map((link) => (
            <div itemID={link} className="card mb-1" key={link.id}>
              <div className="cards-cursos_hover">
                <div className="cards-cursos">
                  <h3 className="titulo-cards">{link.description}</h3>
                  <div className="img-cursos_container">
                    <img src={link.name} alt="" className="img-cursos" />
                  </div>
                  <div style={{ position: "absolute", right: "10px" }}>
                    <i
                      className="material-icons text-danger"
                      onClick={() => onDeleteLink(link.id)}
                      style={{ fontSize: "1.4vh", color: "red" }}
                    >
                      Eliminar
                    </i>
                    <i className="text-primary" style={{ fontSize: "2vh" }}>
                      /
                    </i>
                    <i
                      className="material-icons text-secondary"
                      onClick={() => setCurrentId(link.id)}
                      style={{ fontSize: "1.4vh" }}
                    >
                      Actualizar
                    </i>
                  </div>
                  <div className="texto-card_container">
                    <Link href={"/articulos/" + link.url} passHref>
                      <Button color="#7c5e99" className="btn-cursos">
                        Ver articulo
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Links;
