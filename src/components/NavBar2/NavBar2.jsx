import './NavBar2.css'
import Logo from '../../assets/navbar/logo.svg'
import mobile from '../../assets/navbar/mobile.svg'
import { useState, useEffect, useRef } from 'react'

export default function NavBar2({ list }) {
  const [openNav, setOpenNav] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  
  const navRef = useRef(null);

  function toggleNav() {
    setOpenNav(!openNav);
  }


  function liFun(id) {
    setActiveLink(id);
    setOpenNav(false);  
  }


  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenNav(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar2" ref={navRef}>
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>

      <ul className={`nav-links ${openNav ? 'active' : ''}`}>
        {list.map((item) => {
          const id = item.toLowerCase().replace(/\s+/g, '');
          return (
            <li
              key={id}
              id={id}
              className={activeLink === id ? 'active-link' : ''}
              onClick={() => liFun(id)}
            >
              <a href="#">{item}</a>
            </li>
          );
        })}
      </ul>

      <button onClick={toggleNav} className="nav-mobile">
        <img src={mobile} alt="Mobile Menu" />
      </button>
    </nav>
  );
}
