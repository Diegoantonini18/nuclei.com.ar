import Image from "next/image";
import styles from "./clientes.module.css";

export default function Clientes() {
  return (
    <section className={styles.wrapper}>
      <div className="container">
        <h2 className={`heading ${styles.title}`}>
          <span className={styles.nuestros}>Nuestros</span> Clientes
        </h2>
        <div className={styles.rule} />
        <div className={styles.logos}>
          <a
            href="https://derechadiario.com.ar/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.logoLink}
          >
            <Image
              src="/ldd.svg"
              alt="Derecha Diario"
              width={200}
              height={120}
              className={styles.logo}
            />
          </a>
          <a
            href="https://quarkrevista.com.ar/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.logoLink}
          >
            <Image
              src="/quark.svg"
              alt="Quark Revista"
              width={200}
              height={120}
              className={styles.logo}
            />
          </a>
          <a
            href="https://noticiasinterior.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.logoLink}
          >
            <Image
              src="/interior.png"
              alt="Noticias Interior"
              width={200}
              height={120}
              className={styles.logo}
            />
          </a>
          <a
            href="https://enroscados.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.logoLink}
          >
            <Image
              src="/enroscados.svg"
              alt="Enroscados"
              width={200}
              height={120}
              className={styles.logo}
            />
          </a>
          <a
            href="https://urgentesargentina.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.logoLink}
          >
            <Image
              src="/urgentes.svg"
              alt="Urgentes Argentina"
              width={200}
              height={120}
              className={styles.logo}
            />
          </a>
        </div>
      </div>
    </section>
  );
}


