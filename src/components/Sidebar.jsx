
import React from 'react';
import styles from './Sidebar.module.css'; 
import { Link } from 'react-router-dom'; // Para la navegación
import { GoHomeFill, GoSearch } from "react-icons/go";    // De GitHub Octicons
import { MdLibraryMusic } from "react-icons/md";         // De Material Design // Iconos

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        <h2>Kodigo Music</h2>
      </div>
      <nav className={styles.navigation}>
        <ul>
          <li>
            <Link to="/" className={styles.navLink}>
              <GoHomeFill size={24} />
              <span>Inicio</span>
            </Link>
          </li>
          <li>
            <a href="#" className={styles.navLink}>
              <GoSearch size={24} />
              <span>Buscar</span>
            </a>
          </li>
          <li>
             <a href="#" className={styles.navLink}>
              {/* --- Usamos el nuevo icono importado --- */}
              <MdLibraryMusic size={24} />
              <span>Tu Biblioteca</span>
            </a>
          </li>
        </ul>
      </nav>

      <div className={styles.loginLinkContainer}>
         <Link to="/login" className={styles.loginLink}>
            Iniciar Sesión
         </Link>
      </div>

    </div>
  );
};

export default Sidebar;