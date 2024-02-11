"use client";

import { IoMdMenu } from "react-icons/io";
import styles from "../../app/styles/header.module.css";

const OpenMobileMenuBtn = () => {
  return (
    <>
      <button type="button" className={styles.mobileMenuBtn}>
        <IoMdMenu size={24} />
        open
      </button>
    </>
  );
};

export default OpenMobileMenuBtn;
