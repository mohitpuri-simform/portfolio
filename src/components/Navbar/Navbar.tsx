import NavLink from "../NavLinks/NavLink";
import styles from "./navbar.module.css";
import hamburgerMenu from "./../../assets/hamburger-menu.svg";
import logo from "./../../assets/logo.svg";
import closeBtn from "../../assets/closeButton.svg";
import { useState } from "react";

function Navbar() {
  const [isOpenHamburger, setIsOpenHamburger] = useState(false);
  function toggleHamburgerMenu() {
    console.log("hio");

    setIsOpenHamburger((prev) => !prev);
  }
  return (
    <div className={styles.nav}>
      <div className={styles.logo}>
        <img src={logo} alt="mohit's logo" />
      </div>
      <ul className={styles.navlinks}>
        <NavLink>Home</NavLink>
        <NavLink>About</NavLink>
        <NavLink>Work</NavLink>
      </ul>
      <button onClick={toggleHamburgerMenu} className={styles.hamburgerIcon}>
        <img src={hamburgerMenu} alt="more" />
      </button>
      {isOpenHamburger && (
        <div className={styles.openHamburgerWrapper}>
          <ul className={styles.openHamburger}>
            <li onClick={toggleHamburgerMenu} className={styles.closeImg}>
              <img src={closeBtn} alt="close the menu" />
            </li>
            <NavLink>Home</NavLink>
            <NavLink>About</NavLink>
            <NavLink>Work</NavLink>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
