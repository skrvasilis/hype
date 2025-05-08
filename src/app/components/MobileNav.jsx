'use client';
import { useState } from 'react';
import Link from 'next/link';
import styles from './MobileNav.module.scss';

export default function MobileNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className={styles.mobileNavWrapper}>
      {/* Top bar with Hype and Menu Button */}
      <div className={styles.topBar}>
        <div className={styles.logo}>Hype</div>
        <button onClick={toggleMenu} className={styles.menuButton}>
          {menuOpen ? '×' : '☰'}
        </button>
      </div>

      {/* Full screen overlay */}
      <div className={`${styles.overlay} ${menuOpen ? styles.show : ''}`}>
        <ul className={styles.navLinks}>
          <li><Link href="/" onClick={toggleMenu}>Home</Link></li>
          <li><Link href="/about" onClick={toggleMenu}>About</Link></li>
          <li><Link href="/services" onClick={toggleMenu}>Services</Link></li>
          <li><Link href="/portfolio" onClick={toggleMenu}>Portfolio</Link></li>
          <li><Link href="/contact" onClick={toggleMenu}>Contact</Link></li>
        </ul>
      </div>
    </div>
  );
}
