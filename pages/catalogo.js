import Head from "next/head";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import logoColor from "../public/img/color_logo.svg";

export default function Cursos() {
  const [links, setLinks] = useState([]);
  const [allProductos, setAllProductos] = useState([]);
  const [serachvalue, setSearchValue] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const getLinks = async () => {
    setIsLoading(true);
    db.collection("links").onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setLinks(docs);
      setAllProductos(docs);
      setIsLoading(false);
    });
  };

  function handleSearchChange(event) {
    setSearchValue(event.target.value);
    search(event.target.value);
  }

  function search(searchValue) {
    searchValue.toLowerCase();
    setLinks(allProductos);
    if (searchValue !== "") {
      const limite = links.length;
      let tempArray = [];
      for (let i = 0; i < limite; i++) {
        const etiquetas = links[i].description.toLowerCase();
        const patron = new RegExp(serachvalue);
        const res = patron.test(etiquetas);

        if (res) {
          tempArray.push(links[i]);
        }
      }
      setLinks(tempArray);
    } else {
      setLinks(allProductos);
    }
  }

  useEffect(() => {
    getLinks();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Cursos | Irna Pontón</title>
        <meta name="description" content="JuanGranel, Consumo Consciente" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="titulo" name="cursos" id="cursos">
        Catálogo
      </h1>
      {isLoading ? (
        <div
          style={{
            position: "absolute",
            top: "100vh",
            width: "100%",
            height: "100vh",
          }}
        >
          <div className="loader">
            <div className="loaderAni"></div>
            <div
              className="pt-2"
              style={{
                height: "5vw",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translateX(-50%) translateY(-50%)",
                width: "5vw",
                zIndex: "12",
              }}
            >
              <Image src={logoColor} layout="fill" alt="" objectFit="cover" />
            </div>
          </div>
        </div>
      ) : (
        <div className="cards">
          {links &&
            links.map((link) => (
              <div itemID={link} className="card mb-1" key={link.id}>
                <div className="cards-cursos_hover">
                  <div className="cards-cursos">
                    <h3 className="titulo-cards">{link.description}</h3>
                    <div className="img-cursos_container">
                      <img src={link.name} alt="" className="img-cursos" />
                    </div>
                    <div className="texto-card_container">
                      <Link href={"/productos/" + link.url} passHref>
                        <Button className="btn-cursos">
                          Ver producto
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}
