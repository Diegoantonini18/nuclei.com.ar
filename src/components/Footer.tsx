import Image from "next/image";
import Link from "next/link";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          {/* Columna 1: Logo y Copyright */}
          <div className={styles.column}>
            <div className={styles.logoSection}>
              <Image
                src="/logo.svg"
                alt="NUCLEI"
                width={240}
                height={120}
                className={styles.logo}
              />
            </div>
            <p className={styles.copyright}>@2025 Nuclei</p>
            <p className={styles.rights}>Todos los derechos reservados</p>
          </div>

          {/* Columna 2: Seguinos */}
          <div className={styles.column}>
            <h3 className={styles.heading}>Seguinos</h3>
            <a
              href="https://www.linkedin.com/nuclei"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <Image src="/likedin.png" alt="LinkedIn" width={32} height={32} className={styles.socialIcon} />
            </a>
          </div>

          {/* Columna 3: Secciones */}
          <div className={styles.column}>
            <h3 className={styles.heading}>Secciones</h3>
            <nav className={styles.nav}>
              <Link href="#nosotros" className={styles.navLink}>Nosotros</Link>
              <Link href="#servicios" className={styles.navLink}>Servicios</Link>
              <Link href="#contacto" className={styles.navLink}>Contacto</Link>
            </nav>
          </div>

          {/* Columna 4: Contacto */}
          <div className={styles.column}>
            <h3 className={styles.heading}>Contacto</h3>
            <a href="mailto:contacto@nuclei.com.ar" className={styles.contactLink}>
              <Image src="/mail.png" alt="Email" width={20} height={20} className={styles.contactIcon} />
              <span>contacto@nuclei.com.ar</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

