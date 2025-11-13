import Image from "next/image";
import styles from "./services.module.css";

type Card = {
  title: string;
  description: string;
  icon: string;
  tone: "redTrans" | "whiteTrans" | "dark" | "primary" | "amber" | "mintTrans";
};

const CARDS: Card[] = [
  {
    title: "Análisis político y estrategia",
    description:
      "Diseño integral de estrategias electorales, institucionales o de comunicación de gobierno, alineadas con los objetivos y valores del liderazgo.",
    icon: "/caballo.png",
    tone: "redTrans",
  },
  {
    title: "Gestión de comunicación",
    description:
      "Desarrollo de identidad, narrativa y mensajes clave para construir una imagen coherente, sólida y reconocible.",
    icon: "/persona.png",
    tone: "whiteTrans",
  },
  {
    title: "Estrategia digital y redes sociales",
    description:
      "Diseño y gestión de presencia digital con enfoque estratégico, contenido político de valor y optimización de la interacción con la ciudadanía.",
    icon: "/celular.png",
    tone: "dark",
  },
  {
    title: "Análisis político y estrategia",
    description:
      "Diseño integral de estrategias electorales, institucionales o de comunicación de gobierno, alineadas con los objetivos y valores del liderazgo.",
    icon: "/caballo.png",
    tone: "primary",
  },
  {
    title: "Gestión de comunicación",
    description:
      "Desarrollo de identidad, narrativa y mensajes clave para construir una imagen coherente, sólida y reconocible.",
    icon: "/persona.png",
    tone: "amber",
  },
  {
    title: "Estrategia digital y redes sociales",
    description:
      "Diseño y gestión de presencia digital con enfoque estratégico, contenido político de valor y optimización de la interacción con la ciudadanía.",
    icon: "/celular.png",
    tone: "mintTrans",
  },
];

export default function Services() {
  return (
    <section id="servicios" className={styles.wrapper}>
      <div className="container">
        <h2 className={`heading ${styles.title}`}><span className={styles.nuestros}>Nuestros</span> <span className={styles.alt}>Servicios</span></h2>
        <div className={styles.rule} />
        <div className={styles.grid}>
          {CARDS.map((card, i) => (
            <article key={i} className={`${styles.card} ${styles[card.tone]}`}>
              <div className={styles.inner}>
                <div className={styles.cardHeader}>
                  <h3 className={`heading ${styles.cardTitle}`}>{card.title}</h3>
                  <Image src={card.icon} alt="" width={24} height={36} className={styles.icon} />
                </div>
                <p className={styles.cardText}>{card.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


