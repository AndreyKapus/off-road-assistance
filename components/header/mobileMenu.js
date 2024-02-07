const { default: MenuList } = require("./menuList");
import styles from "../../app/styles/header.module.css";

const MobileMenu = () => {
  return (
    <div className={styles.mobileMenuBackdrop}>
      <MenuList />
    </div>
  );
};

export default MobileMenu;
