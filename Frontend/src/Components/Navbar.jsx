import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';  // Correct Link import
import 'boxicons';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setIsScrolled(currentScrollY > 50);
    if (currentScrollY > lastScrollY) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div className={`fixed z-50 w-full px-8 sm:px-20 py-4 font-['Neue Montreal'] flex justify-between items-center 
      ${isVisible ? 'translate-y-0' : '-translate-y-full'} transition-transform duration-300 
      ${isScrolled ? 'bg-opacity-10 backdrop-blur-lg' : 'bg-transparent'}`}>
      
      <div className='flex items-center gap-2'>
        <box-icon name='bowl-hot' type='solid' color='#fbfdfa' size="40px"></box-icon>
        <div className='logo text-xl font-semibold flex flex-col items-start'>
          <p>Kreate AI</p>
        </div>
      </div>

      <div className="links flex gap-8">  {/* Adjusted gap here */}
        {["Home", "Products", "About Us", "Contact", "Login"].map((item, index) => (
          <Link 
            key={index} 
            to={item === "Home" ? "/" : `/${item.toLowerCase().replace(/\s+/g, '')}`} 
            className="text-lg font  text-zinc-800 hover:text-blue-600"
          >
            {item}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
