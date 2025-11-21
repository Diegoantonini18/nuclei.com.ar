import Image from "next/image";
import styles from "./intro.module.css";

export default function Intro() {
  return (
    <section id="nosotros" className={styles.wrapper}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.media}>
            <div className={styles.imageWrapper}>
              <Image
                src="/congreso.jpg"
                alt="Nuclei - Introducción"
                width={640}
                height={480}
                sizes="(min-width: 1024px) 520px, 100vw"
                priority={false}
                className={styles.image}
              />
              <div className={styles.overlay} />
            </div>
          </div>
          <div className={styles.content}>
            <h2 className={`heading ${styles.title}`}>
              <span className={styles.faint}>Quiénes</span> Somos
            </h2>
            <div className={styles.rule} />
            <p className={styles.paragraph}>
              <strong>Nuclei</strong> es una consultora especializada en comunicación y estrategia
              política. Ayudamos a líderes, equipos y organizaciones a definir y
              comunicar su <strong>visión</strong> con coherencia, propósito e impacto. Creemos que
              toda <strong>estrategia</strong> efectiva nace desde el núcleo, la identidad, los
              valores y los objetivos, y trabajamos desde adentro hacia afuera para
              construir mensajes auténticos y sólidos.
            </p>
            <p className={styles.paragraph}>
              Combinamos experiencia <strong>política</strong>, análisis estratégico, creatividad y
              uso de datos para diseñar soluciones a medida en campañas,
              <strong> gobiernos</strong> y proyectos institucionales. En Nuclei, fortalecemos
              liderazgos y potenciamos estrategias, porque comunicar bien
              también es gobernar mejor.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


