import Link from 'next/link';
import Image from 'next/image';
import React, { useRef, useEffect } from 'react';
import styles from './Navbar.module.css';

function closeNavbar(toggleRef) {
  // eslint-disable-next-line no-param-reassign
  toggleRef.current.checked = false;
}

function useOutsideAlerter(wrapperRef, toggleRef) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        if (event.target.id !== toggleRef.current.id) {
          closeNavbar(toggleRef);
        }
      }
    }

    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [wrapperRef, toggleRef]);
}

function Navbar() {
  const wrapperMenu = useRef(null);
  const toggleMenu = useRef(null);
  useOutsideAlerter(wrapperMenu, toggleMenu);

  return (
    <div className={styles.blocNav}>
      <nav className={styles.nav}>
        <div className={styles.menuToggle}>
          <input type="checkbox" id="navChecked" ref={toggleMenu} />
          <span />
          <span />
          <span />
          <ul className={styles.menu} ref={wrapperMenu}>
            <li>
              <Link onClick={() => closeNavbar(toggleMenu)} href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link onClick={() => closeNavbar(toggleMenu)} href="/lore">
                <a>Lore</a>
              </Link>
            </li>
            <li>
              <Link onClick={() => closeNavbar(toggleMenu)} href="/bot">
                <a>Which Race Are You ?</a>
              </Link>
            </li>
            <li>
              <Link onClick={() => closeNavbar(toggleMenu)} href="/about">
                <a>About</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
