import Link from "next/link";
import styles from "../../app/styles/header.module.css";
import { PiWrenchBold } from "react-icons/pi";
import MenuList from "./menuList";

const Layout = () => {
  return (
    <header className={styles.headerWrapper}>
      <Link href="/">
        <PiWrenchBold size={38} />
      </Link>
      <MenuList />
    </header>
  );
};

export default Layout;
