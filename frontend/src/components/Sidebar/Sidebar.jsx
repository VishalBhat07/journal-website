import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import Person from '@mui/icons-material/Person'
import WorkIcon from '@mui/icons-material/Work';
import PublishIcon from '@mui/icons-material/Publish';
import DescriptionIcon from '@mui/icons-material/Description';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ArrowDropDown from '@mui/icons-material/ArrowDropDown'
import styles from './Sidebar.module.css';
import { MobileContext } from '../../AppContext';

function SingleLink({ name, Icon, linkTo, isActive }) {
  const { isSidebarOpen, toggleSidebar } = useContext(MobileContext);
  const navigate = useNavigate();

  return (
    <div className={`${styles['sidebar-link']} ${isActive ? styles['active'] : ''}`} onClick={() => {
      if (isSidebarOpen) {
        toggleSidebar();
      }
      navigate(linkTo)
    }}>
      <Icon className={styles['sidebar-icon']} />
      <div className={styles['sidebar-name']}>{name}</div>
    </div>

  );
}

function Accordian({ items, name, Icon, isActive }) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { toggleSidebar, isSidebarOpen } = useContext(MobileContext);


  function handleAccordianClick() {
    setOpen(!open);
  }

  return (
    <div className={`${styles['accordian-container']} ${open ? styles['open'] : ''}`}>
      <div className={`${styles['accordian-header']} ${isActive ? styles['active'] : ''}`} onClick={handleAccordianClick}>
        {Icon && <Icon className={styles['accordian-icon']} />}
        <div className={styles['accordian-name']}>
          {name}
          <ArrowDropDown />
        </div>
      </div>
      <div className={styles['accordian-items-container']}>
        <ul>
          {items.map((item, index) => (
            <li key={index} onClick={() => {
              if (isSidebarOpen) {
                toggleSidebar();
              }
              setOpen(false);
              navigate(item.linkTo)
            }}>
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function NavLinks() {
  const navigate = useNavigate();
  const { toggleSidebar, isSidebarOpen } = useContext(MobileContext);

  return (
    <div className={styles['links']}>
      <button className={styles['login-link']} onClick={() => {
        if (isSidebarOpen) {
          toggleSidebar();
        }
        navigate('/login')
      }}>Login</button>
      <button className={styles['signup-link']} onClick={() => {
        if (isSidebarOpen) {
          toggleSidebar();
        }
        navigate('/signup')
      }}>Sign up</button>

    </div>
  )
}
function Sidebar() {
  const { toggleSidebar, isSidebarOpen } = useContext(MobileContext);
  const location = useLocation();
  const activeRoute = location.pathname.split('/')[1];
  console.log(activeRoute);

  const benefitItems = [
    { name: 'Academic Benefits', linkTo: '/benefits/academic-benefits' },
    { name: 'Industry Benefits', linkTo: '/benefits/industry-benefits' }
  ];

  const authorItems = [
    { name: 'Guidelines and Responsibilities', linkTo: '/author/author-guidelines' },
    { name: 'Publication Process', linkTo: '/author/peer-review-process' }
  ];

  const adItems = [
    { name: 'Bank Details', linkTo: '/ad/bank-details' },
    { name: 'Advertisement Tariff', linkTo: '/ad/advertisement-tariff' }
  ];

  return (
    <>
      {isSidebarOpen && <div className={styles['sidebar-cover']} onClick={toggleSidebar}></div>}
      <div className={`${styles['sidebar-container']} ${isSidebarOpen ? styles['open'] : ''}`}>
        <div className={styles['sidebar-logo']}>
          <img src="/logo.png" alt="asm-logo" />
        </div>
        <div className={styles['sidebar-links']}>
          <SingleLink name={"Home"} Icon={HomeIcon} linkTo={'/'} isActive={activeRoute == ''}/>
          <SingleLink name={"Board of members"} Icon={PeopleIcon} linkTo={'/board-of-member'} isActive={activeRoute == 'board-of-member'}/>
          <Accordian name={"Benefits"} Icon={WorkIcon} items={benefitItems} isActive={activeRoute == 'benefits'}/>
          <Accordian name={"Author Section"} Icon={Person} items={authorItems} isActive={activeRoute == 'author'}/>
          <SingleLink name={"Publish Article"} Icon={PublishIcon} linkTo={'/publish-paper'} isActive={activeRoute == 'publish-paper'}/>
          <SingleLink name={"Previous Issues"} Icon={DescriptionIcon} linkTo={'/previous-issues'} isActive={activeRoute == 'previous-issues'}/>
          <Accordian name={'Advertising'} Icon={AttachMoneyIcon} items={adItems} isActive={activeRoute == 'ad'}/>
        </div>
        <NavLinks/>
      </div>
    </>

  );
}

export default Sidebar;