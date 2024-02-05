import Link from "next/link";
import styles from "../../app/styles/header.module.css";
import MenuList from "./menuList";
import Logo from "./logo";

const Layout = () => {
  return (
    <header className={styles.headerWrapper}>
      <Link href="/" className={styles.logoLink}>
        <Logo />
      </Link>
      <MenuList />
    </header>
  );
};

export default Layout;
