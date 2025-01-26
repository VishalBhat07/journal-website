import React, { useContext } from 'react';
import { MobileContext } from '../../AppContext';
import { Link } from 'react-router-dom';
import Menu from '@mui/icons-material/Menu';
import styles from './Navbar.module.css';
import { Login } from '@mui/icons-material';

const Navbar = () => {
  const {toggleSidebar} = useContext(MobileContext);


  return (
    <nav id={styles['navbar']}>
      <button className={styles['menu-btn']} onClick={toggleSidebar}><Menu/></button>
      <h3>ASM India National Council Trust (INC)</h3>
      <Link to='/login' className={styles['login-link']}>Sign In <Login/></Link>
    </nav>

  );
};

export default Navbar;
