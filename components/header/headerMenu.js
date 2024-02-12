"use client";

import Link from "next/link";
import styles from "../../app/styles/header.module.css";
import MenuList from "./menuList";
import Logo from "./logo";
import OpenMobileMenuBtn from "./openMobileMenuBtn";
import MobileMenu from "./mobileMenu";
import { useEffect, useState } from "react";
import { useMenu } from "@/store";
// import { useEffect, useState } from "react";

const Layout = () => {
  const [screenWidth, setScreenWidth] = useState(null);

  const mobMenuState = useMenu((state) => state.mobMenuIsOpen);

  useEffect(() => {
    const width = window.screen.width;
    setScreenWidth(width);
  }, []);

  return (
    <div className={styles.headerWrapper}>
      <Link href="/" className={styles.logoLink}>
        <Logo />
      </Link>
      {screenWidth < 768 ? <OpenMobileMenuBtn /> : <MenuList />}
      {/* {mobMenuState ? <MobileMenu /> : <div>None</div>} */}
    </div>
  );
};

export default Layout;
