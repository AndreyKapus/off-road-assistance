const { default: MenuList } = require("./menuList");
import styles from "../../app/styles/header.module.css";
import OpenMobileMenuBtn from "./openMobileMenuBtn";

const MobileMenu = () => {
  return (
    <div className={styles.mobileMenuBackdrop}>
      <OpenMobileMenuBtn />
      <MenuList />
    </div>
  );
};

export default MobileMenu;
