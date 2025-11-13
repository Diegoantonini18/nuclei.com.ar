import Image from "next/image";
import styles from "./contacto.module.css";

export default function Contacto() {
  return (
    <section id="contacto" className={styles.wrapper}>
      <div className={styles.overlay} />
      <div className="container">
        <div className={styles.content}>
          <h2 className={`heading ${styles.title}`}>CONTACTO</h2>
          <div className={styles.rule} />
          <div className={styles.info}>
            <div className={styles.item}>
              <Image src="/mail.png" alt="Email" width={24} height={24} className={styles.icon} />
              <a href="mailto:contacto@nuclei.com.ar" className={styles.link}>
                contacto@nuclei.com.ar
              </a>
            </div>
            <div className={styles.item}>
              <Image src="/likedin.png" alt="LinkedIn" width={24} height={24} className={styles.icon} />
              <a
                href="https://www.linkedin.com/nuclei"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                https://www.linkedin.com/nuclei
              </a>
            </div>
            <div className={styles.item}>
              <Image src="/pin.png" alt="Ubicación" width={24} height={24} className={styles.icon} />
              <span className={styles.text}>Ciudad Autónoma de Buenos Aires</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

