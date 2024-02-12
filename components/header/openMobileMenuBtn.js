"use client";
import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import styles from "../../app/styles/header.module.css";
import { useMenu } from "@/store";

const OpenMobileMenuBtn = ({ toggleMenu }) => {
  return (
    <>
      <button
        type="button"
        className={styles.mobileMenuBtn}
        onClick={toggleMenu}
      >
        <IoMdMenu size={24} />
      </button>
    </>
  );
};

export default OpenMobileMenuBtn;
