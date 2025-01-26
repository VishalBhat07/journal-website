import React, { useContext } from 'react';
import { MobileContext } from '../../AppContext';
import { Link } from 'react-router-dom';
import Menu from '@mui/icons-material/Menu';
import styles from './Navbar.module.css';

const Navbar = () => {
  const { isMobile, toggleSidebar } = useContext(MobileContext);


  return (
    <nav id={styles['navbar']}>
      <div className={styles['sidebar-logo']}>
        <button className={styles['menu-btn']} onClick={toggleSidebar}><Menu /></button>
        <img src="./logo.svg" alt="asm-logo" />
      </div>
      <div className={styles['sidebar-logo']}></div>
      <h3>ASM India National Council Trust (INC)</h3>
      <div className={styles['links']}>
        <Link to='/login' className={styles['login-link']}>Login</Link>
        <Link to='/signup' className={styles['signup-link']}>Sign up</Link>

      </div>

    </nav>

  );
};

export default Navbar;
