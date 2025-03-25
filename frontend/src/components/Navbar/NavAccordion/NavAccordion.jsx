import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './NavAccordion.module.css';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const NavAccordion = ({ title, links, isOpen, onClick }) => {

  return (
    <div className={styles['accordion-container']} onClick={onClick}>
      <div 
        className={`${styles['accordion-header']} ${isOpen ? styles['open'] : ''}`} 
        onClick={onClick}
      >
        <span>{title}</span>
        <span><ArrowDropDownIcon/></span>
      </div>
      
      <div className={isOpen ? styles['accordion-content'] : styles['hidden']}>
        <ul className={styles['accordion-list']}>
          {links && links.map((link, index) => (
            <li 
              key={index} 
              className={`${styles['accordion-item']} ${index === links.length - 1 ? styles['last-item'] : ''}`}
            >
              <Link to={link.url} className={styles['accordion-link']}>
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavAccordion;