import NavLink from "../NavLinks/NavLink";
import styles from "./navbar.module.css";
import hamburgerMenu from "./../../assets/hamburger-menu.svg";
import logo from "./../../assets/logo.svg";
import closeBtn from "../../assets/closeButton.svg";
import { useState } from "react";

function Navbar() {
  const [isOpenHamburger, setIsOpenHamburger] = useState(false);
  function toggleHamburgerMenu() {
    setIsOpenHamburger((prev) => !prev);
  }

  function handleLink() {
    setIsOpenHamburger(false);
  }
  return (
    <div className={styles.nav}>
      <a href="#home" className={styles.logo}>
        <img
          role="button"
          aria-label="mohit's logo"
          src={logo}
          alt="mohit's logo"
        />
      </a>
      <ul className={styles.navlinks} role="menu">
        <NavLink onHandleLink={handleLink} navigateTo="#home">
          Home
        </NavLink>
        <NavLink onHandleLink={handleLink} navigateTo="#skill">
          Skills
        </NavLink>
        <NavLink onHandleLink={handleLink} navigateTo="#experience">
          Experience
        </NavLink>
        <NavLink onHandleLink={handleLink} navigateTo="#projects">
          Projects
        </NavLink>
        <NavLink onHandleLink={handleLink} navigateTo="#contact">
          Contact Me
        </NavLink>
      </ul>
      <button onClick={toggleHamburgerMenu} className={styles.hamburgerIcon}>
        <img src={hamburgerMenu} alt="more" />
      </button>
      {isOpenHamburger && (
        <div className={styles.openHamburgerWrapper}>
          <ul className={styles.openHamburger} role="menu">
            <li onClick={toggleHamburgerMenu} className={styles.closeImg}>
              <img src={closeBtn} alt="close the menu" />
            </li>
            <NavLink onHandleLink={handleLink} navigateTo="#home">
              Home
            </NavLink>
            <NavLink onHandleLink={handleLink} navigateTo="#experience">
              Experience
            </NavLink>
            <NavLink onHandleLink={handleLink} navigateTo="#projects">
              Projects
            </NavLink>
            <NavLink onHandleLink={handleLink} navigateTo="#contact">
              Contact Me
            </NavLink>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
