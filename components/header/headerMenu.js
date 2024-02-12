"use client";

import Link from "next/link";
import styles from "../../app/styles/header.module.css";
import MenuList from "./menuList";
import Logo from "./logo";
import OpenMobileMenuBtn from "./openMobileMenuBtn";
import MobileMenu from "./mobileMenu";
import { useEffect, useState } from "react";
// import { useEffect, useState } from "react";

const Layout = () => {
  const [screenWidth, setScreenWidth] = useState(null);
  const [mobMenu, setMobileMenu] = useState(false);

  // const mobMenuOpen = useMenu((state) => state.setMenu);

  const togleMobileMenu = () => {
    setMobileMenu(true);
  };

  console.log(mobMenu);

  useEffect(() => {
    const width = window.screen.width;
    setScreenWidth(width);
  }, []);

  return (
    <div className={styles.headerWrapper}>
      <Link href="/" className={styles.logoLink}>
        <Logo />
      </Link>
      {screenWidth < 768 ? (
        <OpenMobileMenuBtn toggleMenu={togleMobileMenu} />
      ) : (
        <MenuList />
      )}
      {mobMenu === true && <MobileMenu />}
    </div>
  );
};

export default Layout;
