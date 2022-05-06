import Head from "next/head";
import Link from "next/link";

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 notFound | Irina Pontón</title>
        <meta name="Not found" content="Page or fetch not found" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="all-nf">
          <div className="overly-nf"></div>
      <div className="left-nf">
        <h1 className="nf-inicio-title">¿Te perdiste?</h1>
        <p className="nf-text">
          Te ayudamos a encontrarte, empecemos por volver al inicio de la
          pagina.
        </p>
        <Link href="/" passHref>
          <button className="nf-btn">Volver al inicio</button>
        </Link>
      </div>
      <div className="right-nf">
          <h1 className="bf-title">404</h1>
      </div>
      </div>
    </>
  );
}
