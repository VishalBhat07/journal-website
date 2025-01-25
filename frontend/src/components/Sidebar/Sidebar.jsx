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

  function AccordianItems({ items }) {
    return (
      <div className={styles['accordian-items-container']}>
        <ul>
          {items.map((item, index) => (
            <li key={index} onClick={() => {
              if (isSidebarOpen) {
                toggleSidebar();
              }
              navigate(item.linkTo)
            }}>
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div className={`${styles['accordian-container']}`}>
      <div className={styles['accordian-header']} onClick={handleAccordianClick}>
        {Icon && <Icon className={styles['accordian-icon']} />}
        <div className={styles['accordian-name']}>{name}</div>
      </div>
      {open && <AccordianItems items={items} />}
    </div>
  );
}

function Sidebar() {
  const { isMobile, toggleSidebar, isSidebarOpen } = useContext(MobileContext);

  const sidebarStyle =
    isSidebarOpen
      ? styles['sidebar-container'] + ' ' + styles.open
      : styles['sidebar-container']

  const benefitItems = [
    { name: 'Guidelines and Responsibilities', linkTo: '/author-guidelines' },
    { name: 'Publication Process', linkTo: '/peer-review-process' }
  ];

  const authorItems = [
    { name: 'Guidelines and Responsibilities', linkTo: '/author-guidelines' },
    { name: 'Publication Process', linkTo: '/peer-review-process' }
  ];

  const adItems = [
    { name: 'Bank Details', linkTo: '/bank-details' },
    { name: 'Advertisement Tariff', linkTo: '/advertisement-tariff' }
  ];

  return (
    <div className={sidebarStyle}>
      {isMobile && <button className={styles['close-btn']} onClick={toggleSidebar}><Close /></button>}
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

    </div>
  );
}

export default Sidebar;