import Link from "next/link";
import styles from "../../app/styles/header.module.css";
import MenuList from "./menuList";
import Logo from "./logo";
import OpenMobileMenuBtn from "./openMobileMenuBtn";

const Layout = () => {
  return (
    <header className={styles.headerWrapper}>
      <Link href="/" className={styles.logoLink}>
        <Logo />
      </Link>
      <OpenMobileMenuBtn />
      <MenuList />
    </header>
  );
};

export default Layout;
