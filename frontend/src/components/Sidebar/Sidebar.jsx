import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import WorkIcon from '@mui/icons-material/Work';
import PublishIcon from '@mui/icons-material/Publish';
import DescriptionIcon from '@mui/icons-material/Description';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import styles from './Sidebar.module.css';

const sidebarConfig = [
  {
    name: 'Home',
    icon: HomeIcon,
    linkTo: '/',
    type: 'single'
  },
  {
    name: 'Board of Members',
    icon: PeopleIcon,
    linkTo: '/board-of-member',
    type: 'single'
  },
  {
    name: 'Benefits',
    icon: WorkIcon,
    type: 'dropdown',
    items: [
      { name: 'Academic Benefits', linkTo: '/academic-benefits' },
      { name: 'Industry Benefits', linkTo: '/industry-benefits' }
    ]
  },
  {
    name: 'Authors Section',
    icon: PublishIcon,
    type: 'dropdown',
    items: [
      { name: 'Guidelines and Responsibilities', linkTo: '/author-guidelines' },
      { name: 'Publication Process', linkTo: '/peer-review-process' }
    ]
  },
  {
    name: 'Upload Article',
    icon: PublishIcon,
    type: 'single',
    onClick: () => { } // Add your upload click handler
  },
  {
    name: 'Previous Issues',
    icon: DescriptionIcon,
    linkTo: '/previous-issues',
    type: 'single'
  },
  {
    name: 'Advertisement',
    icon: AttachMoneyIcon,
    type: 'dropdown',
    items: [
      { name: 'Bank Details', linkTo: '/bank-details' },
      { name: 'Advertisement Tariff', linkTo: '/advertisement-tariff' }
    ]
  }
];

function Accordian({ items, name, icon: Icon }) {
  const [open, setOpen] = useState(false);

  function handleAccordianClick() {
    setOpen(!open);
  }

  function AccordianItems({ items }) {
    return (
      <div className={styles['accordian-items-container']}>
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              <Link to={item.linkTo} className={styles['sidebar-link']}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div
      className={`${styles['accordian-container']}`}
    >
      <div className={styles['accordian-header']} onClick={handleAccordianClick}>
        {Icon && <Icon className={styles['accordian-icon']} />}
        <div className={styles['accordian-name']}>{name}</div>
      </div>
      {open && <AccordianItems items={items} />}

    </div>


  );
}

function Sidebar({ admin = false }) {
  const navigate = useNavigate();
  return (
    <div className={styles['sidebar-container']}>
      {sidebarConfig.map((item, index) => {
        // Skip admin-only sections if not admin
        if ((item.name === 'Current Issues' || item.name === 'Approved Issues') && !admin) {
          return null;
        }

        switch (item.type) {
          case 'single':
            return (
              <div className={styles['sidebar-link']} key={index} onClick={()=>{navigate(item.linkTo)}}>
                  <item.icon className={styles['sidebar-icon']} />
                  <div className={styles['sidebar-name']}>{item.name}</div>
              </div>

            );

          case 'dropdown':
            return (
              <Accordian
                key={index}
                name={item.name}
                items={item.items}
                icon={item.icon}
              />
            );

          default:
            return null;
        }
      })}
    </div>
  );
}

export default Sidebar;