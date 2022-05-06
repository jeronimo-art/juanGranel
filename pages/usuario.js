import Link from "next/link";
import Head from "next/head";
import initAuth0 from "./api/utils/auth";

export default function User() {

  return (
    <div>
      <Head>
        <title>Usuario | JuanGranel</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Link href="api/auth/logout" passHref>
        <a style={{ fontSize: "20vh", color: "red" }} className="log-out">
          Cerrar sesión
        </a>
      </Link>
    </div>
  );
}

export const getServerSideProps = initAuth0.withPageAuthRequired();