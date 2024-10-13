import React from 'react';
import './NavOption.css';

const NavOption = ({ icon, label, onClick }) => {
  return (
    <div className="nav-option" onClick={onClick} style={{ cursor: 'pointer' }}>
      <img src={icon} alt={`${label} icon`} className="nav-icon" />
      <span className='nav-label'>{label}</span>
    </div>
  );
};

export default NavOption;