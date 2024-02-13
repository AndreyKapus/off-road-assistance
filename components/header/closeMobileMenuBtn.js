import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import styles from "../../app/styles/header.module.css";
import { useMenu } from "@/store";
import { IoIosArrowForward } from "react-icons/io";

const CloseMobileMenuBtn = ({ closeMenu }) => {
  return (
    <>
      <button
        type="button"
        className={styles.closeMobileMenuBtn}
        onClick={closeMenu}
      >
        <IoIosArrowForward size={24} />
      </button>
    </>
  );
};

export default CloseMobileMenuBtn;
