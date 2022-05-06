import "../styles/globals.css";
import "../styles/css/clases.css";
import "../styles/css/contacto.css";
import "../styles/css/cursos.css";
import "../styles/css/home.css";
import "../styles/css/newsletter.css";
import "../styles/css/App.css";
import "../styles/css/i.css";
import "../styles/css/curso.css";
import "../styles/css/404.css";
import "../styles/css/user.css";
import "../styles/barra.css";
import "../styles/css/articulos.css";

import { UserProvider } from "@auth0/nextjs-auth0";
import Bar from "../components/bar";
import { useState, useEffect } from "react";
import Image from "next/dist/client/image";
import logoColor from "../public/img/color_logo.svg";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 3000);
  }, []);

  return (
    <div>
      {loading ? (
        <>
          <Head>
            <title>Loading | JuanGranel</title>
          </Head>
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
        </>
      ) : (
        <div>
          <UserProvider>
            <Bar />
          </UserProvider>
          <div className="show">
            <UserProvider>
              <Component {...pageProps} />
            </UserProvider>
          </div>
        </div>
      )}
    </div>
  );
}

export default MyApp;
