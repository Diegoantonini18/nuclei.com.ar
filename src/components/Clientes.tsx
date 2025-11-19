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
          <Image
            src="/ldd.svg"
            alt="Cliente 1"
            width={200}
            height={120}
            className={styles.logo}
          />
          <Image
            src="/quark.svg"
            alt="Cliente 2"
            width={200}
            height={120}
            className={styles.logo}
          />
          <Image
            src="/interior.png"
            alt="Cliente 3"
            width={200}
            height={120}
            className={styles.logo}
          />
          <Image
            src="/enroscados.svg"
            alt="Cliente 4"
            width={200}
            height={120}
            className={styles.logo}
          />
          <Image
            src="/urgentes.svg"
            alt="Cliente 4"
            width={200}
            height={120}
            className={styles.logo}
          />
        </div>
      </div>
    </section>
  );
}


