import React from "react";
import { slide as Menu } from "react-burger-menu";
import Link from "next/link";
import close from "../public/close.svg";
import Image from "next/image";

export default function Siderbar(props) {
  return (
    // Pass on our props
    <Menu right {...props} customCrossIcon={<Image alt="Cerrar menu" src={close} />} noOverlay >
      <Link passHref href="/">
        <p onClick={(e) => {
            
        }} className="p-ba">
          Inicio
        </p>
      </Link>
      <Link passHref href="/catalogo">
        <p className="p-ba">
          Catálogo
        </p>
      </Link>
      <Link passHref href="/articulos">
        <p className="p-ba">
          Articulos
        </p>
      </Link>
      <Link passHref href="/contacto">
        <p className="p-ba">
          Contacto
        </p>
      </Link>
      <Link passHref href="/pedir">
        <p className="p-ba">
          Pedidos
        </p>
      </Link>
    </Menu>
  );
};
