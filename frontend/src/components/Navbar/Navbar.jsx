import React, { useContext } from 'react';
import { MobileContext } from '../../AppContext';
import Menu from '@mui/icons-material/Menu';
import styles from './Navbar.module.css';


const Navbar = () => {
  const {isMobile, toggleSidebar} = useContext(MobileContext);


  return (
    <nav id={styles['navbar']}>
      {isMobile && <button className={styles['menu-button']} onClick={toggleSidebar}><Menu/></button>}
      {!isMobile && <div id={styles["navbar-title"]}>Materials and Processing : A journal from ASM India National Council Trust (INC)</div>}
            
        
      

    </nav>

  );
};

export default Navbar;
