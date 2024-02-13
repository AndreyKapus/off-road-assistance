const { default: MenuList } = require("./menuList");
import styles from "../../app/styles/header.module.css";
import CloseMobileMenuBtn from "./closeMobileMenuBtn";

const MobileMenu = ({ closeMenu }) => {
  return (
    <div className={styles.mobileMenuBackdrop}>
      <CloseMobileMenuBtn closeMenu={closeMenu} />
      <MenuList />
    </div>
  );
};

export default MobileMenu;
