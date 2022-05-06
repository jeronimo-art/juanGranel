import Image from "next/image";
import logo from "../public/img/logo.svg";
import { useUser } from "@auth0/nextjs-auth0";
import Link from "next/link";
import SideBar from "./siderbar";

export default function Bar() {
  const { user, error, isLoading } = useUser();

  function showSettings(event) {
    event.preventDefault();
  }

  if (isLoading) return <div className="loading"></div>;

  if (error) return <div>{error.message}</div>;

  if (user) {
    return (
      <div>
        <header className="bar" id="bar">
          <div
            className="pt"
            style={{
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
              left: "2vw",
              width: "15vw",
            }}
          >
            <Image src={logo} layout="fill" alt="" objectFit="contain" />
          </div>
          <Link passHref href="/">
            <div
              className="link-logo"
              style={{
                background: "transparent",
                position: "absolute",
                zIndex: "10",
                left: "3vh",
                top: "1vh",
                cursor: "pointer",
                width: "15vw",
              }}
            ></div>
          </Link>
          <SideBar pageWrapId={"page-wrap"} />
          <div className="naver">
            <Link passHref href="/">
              <p className="p-bar">Inicio</p>
            </Link>
            <Link passHref href="/catalogo">
              <p className="p-bar">Catálogo</p>
            </Link>
            <Link passHref href="/articulos">
              <p className="p-bar">Articulos</p>
            </Link>
            <Link passHref href="/contacto">
              <p className="p-bar">Contacto</p>
            </Link>
            <Link passHref href="/pedir">
              <p className="p-bar">Pedidos</p>
            </Link>
            {user.email === "gerorobalino@gmail.com" ? (
              <div>
                <Link passHref href="/manager">
                  <p className="p-bar">PM</p>
                </Link>
                <Link passHref href="/managerArticulos">
                  <p className="p-bar">AM</p>
                </Link>
              </div>
            ) : (
              <></>
            )}
          </div>
        </header>
      </div>
    );
  }
  return (
    <>
      <header className="bar" id="bar">
        <div
          className="pt"
          style={{
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            left: "2vw",
            width: "15vw",
          }}
        >
          <Image src={logo} layout="fill" alt="" objectFit="contain" />
        </div>
        <Link passHref href="/">
          <div
            className="link-logo"
            style={{
              background: "transparent",
              position: "absolute",
              zIndex: "10",
              left: "3vh",
              top: "1vh",
              cursor: "pointer",
              width: "15vw",
            }}
          ></div>
        </Link>
        <SideBar pageWrapId={"page-wrap"} />
        <div className="naver">
          <Link passHref href="/">
            <p className="p-bar">Inicio</p>
          </Link>
          <Link passHref href="/catalogo">
            <p className="p-bar">Catálogo</p>
          </Link>
          <Link passHref href="/articulos">
            <p className="p-bar">Articulos</p>
          </Link>
          <Link passHref href="/contacto">
            <p className="p-bar">Contacto</p>
          </Link>
          <Link passHref href="/pedir">
            <p className="p-bar">Pedidos</p>
          </Link>
        </div>
      </header>
    </>
  );
}
