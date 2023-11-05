import React from 'react';
import "./Navbar.css";

interface MenuItem {
  path: string;
  name: string;
}

const NavBar: React.FC = () => {
  const menuItems: MenuItem[] = [
    {
      path: '/about',
      name: 'About Us'
    },
    {
      path: '/social-impact',
      name: 'Social Impact'
    },
    {
      path: '/invest',
      name: 'Invest'
    }
  ];

  return (
    <nav className="navbar">
      <div className="logo-container">
        <h1>elewa group</h1>
      </div>
      <div className="nav-pages">
        {menuItems.map((item, index) => (
          <div className="nav-item" key={index}>
            <a href={item.path}>{item.name}</a>
          </div>
        ))}
      </div>
    </nav>
  )
}

export default NavBar;
