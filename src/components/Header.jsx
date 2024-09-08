import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to='/'>
          <img src='https://zymo.app/static/media/zymoNewLogo.4e597c5ad4734f840906.png' alt='logo' className='h-8' />
        </Link>
        <nav>
          <ul className="nav-list text-lg">
            <li><Link to="/fleet">Fleet</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/blogs">Blogs</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/career">Career</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
