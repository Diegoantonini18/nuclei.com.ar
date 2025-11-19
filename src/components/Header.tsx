"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./header.module.css";

export default function Header() {
  const [show, setShow] = useState(true);
  const [atTop, setAtTop] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const lastYRef = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || 0;
      setAtTop(y < 4);
      setShow(true); // always show header
      lastYRef.current = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const headerClass = [
    styles.header,
    show ? "" : styles.hidden,
    // Si el menú está abierto o no está en el top, usar fondo sólido
    (isMenuOpen || !atTop) ? styles.solid : styles.transparent,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <header className={headerClass}>
      <div className="container">
        <div className={styles.row}>
          <div className={styles.brand}>
            <Image src="/logo.svg" alt="NUCLEI" width={280} height={280} className={styles.logo} />
          </div>
          <button
            className={`${styles.hamburger} ${isMenuOpen ? styles.hamburgerOpen : ""}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
          </button>
          <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ""}`} aria-label="Principal">
            <Link href="#nosotros" className={styles.link} onClick={closeMenu}>Nosotros</Link>
            <Link href="#servicios" className={styles.link} onClick={closeMenu}>Servicios</Link>
            <Link href="#contacto" className={styles.link} onClick={closeMenu}>Contacto</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}


