import Head from "next/head";
import Link from "next/link";

export default function Custom500() {
  return (
    <>
      <Head>
        <title>500 notFound | Irina Pontón</title>
        <meta name="Not found" content="Page or fetch not found" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="all-nf">
        <div className="overly-nf"></div>
        <div className="left-nf">
          <h1 className="nf-inicio-title">
            Error de servidor
          </h1>
          <p className="nf-text">
            Si tienes algún problema reportalo a través del contacto, sino
            vuelve al inicio tranquilamente.
          </p>
          <Link href="/" passHref>
            <button className="nf-btn">Volver al inicio</button>
          </Link>
        </div>
        <div className="right-nf">
          <h1 className="bf-title">500</h1>
        </div>
      </div>
    </>
  );
}
