import styles from "./hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay} />
      <div className="container">
        <div className={styles.content}>
          <h1 className={`heading ${styles.title}`}>
            Líderes en consultoría política y comunicación	
          </h1>
          <div className={styles.rule} />
          <p className={styles.subtitle}>
            Impulsamos estrategias efectivas y liderazgos sólidos que generan
            impacto y coherencia en la acción política.
          </p>
        </div>
      </div>
    </section>
  );
}



