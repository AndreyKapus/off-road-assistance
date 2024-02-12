"use client";
import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import styles from "../../app/styles/header.module.css";
import { useMenu } from "@/store";

const OpenMobileMenuBtn = () => {
  const [mobMenu, setMobileMenu] = useState(false);

  const mobMenuOpen = useMenu((state) => state.setMenu);

  const togleMobileMenu = () => {
    mobMenu === false ? setMobileMenu(true) : setMobileMenu(false);
    mobMenuOpen(mobMenu);
  };

  return (
    <>
      <button
        type="button"
        className={styles.mobileMenuBtn}
        onClick={togleMobileMenu}
      >
        <IoMdMenu size={24} />
      </button>
    </>
  );
};

export default OpenMobileMenuBtn;
