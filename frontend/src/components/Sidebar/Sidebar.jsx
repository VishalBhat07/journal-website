import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import Person from '@mui/icons-material/Person'
import WorkIcon from '@mui/icons-material/Work';
import PublishIcon from '@mui/icons-material/Publish';
import DescriptionIcon from '@mui/icons-material/Description';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import Close from '@mui/icons-material/Close'
import ArrowDropDown from '@mui/icons-material/ArrowDropDown'
import styles from './Sidebar.module.css';
import { MobileContext } from '../../AppContext';

function SingleLink({ name, Icon, linkTo }) {
  const { isSidebarOpen, toggleSidebar } = useContext(MobileContext);
  const navigate = useNavigate();

  return (
    <div className={styles['sidebar-link']} onClick={() => {
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

function Accordian({ items, name, Icon }) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { toggleSidebar, isSidebarOpen } = useContext(MobileContext);


  function handleAccordianClick() {
    setOpen(!open);
  }

  return (
    <div className={`${styles['accordian-container']} ${open ? styles['open'] : ''}`}>
      <div className={styles['accordian-header']} onClick={handleAccordianClick}>
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
  const { isMobile, toggleSidebar, isSidebarOpen } = useContext(MobileContext);

  const sidebarStyle =
    isSidebarOpen
      ? styles['sidebar-container'] + ' ' + styles.open
      : styles['sidebar-container']

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
      {isMobile && isSidebarOpen && <div className={styles['sidebar-cover']} onClick={toggleSidebar}></div>}
      <div className={sidebarStyle}>
        <div className={styles['sidebar-logo']}>
          <img src="./logo.svg" alt="asm-logo" />
        </div>
        <div className={styles['sidebar-links']}>
          <SingleLink name={"Home"} Icon={HomeIcon} linkTo={'/'} />
          <SingleLink name={"Board of members"} Icon={PeopleIcon} linkTo={'/board-of-member'} />
          <Accordian name={"Benefits"} Icon={WorkIcon} items={benefitItems} />
          <Accordian name={"Author Section"} Icon={Person} items={authorItems} />
          <SingleLink name={"Publish Article"} Icon={PublishIcon} linkTo={'/publish'} />
          <SingleLink name={"Previous Issues"} Icon={DescriptionIcon} linkTo={'/previous-issues'} />
          <Accordian name={'Advertising'} Icon={AttachMoneyIcon} items={adItems} />
        </div>
        <NavLinks/>


      </div>
    </>

  );
}

export default Sidebar;