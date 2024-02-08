import Link from "next/link";
import styles from "../../app/styles/header.module.css";
import MenuList from "./menuList";
import Logo from "./logo";
import OpenMobileMenuBtn from "./openMobileMenuBtn";
import MobileMenu from "./mobileMenu";
// import { useEffect, useState } from "react";

const Layout = () => {
  return (
    <header className={styles.headerWrapper}>
      <Link href="/" className={styles.logoLink}>
        <Logo />
      </Link>
      <OpenMobileMenuBtn />
      <MobileMenu />
      <MenuList />
    </header>
  );
};

export default Layout;
