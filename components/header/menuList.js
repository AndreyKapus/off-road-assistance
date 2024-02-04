import Link from "next/link";
import styles from "../../app/styles/header.module.css";
import { IoMenu } from "react-icons/io5";

const MenuList = () => {
  return (
    <>
      <button type="button">
        <IoMenu />
      </button>
      <ul className={styles.linksList}>
        <li>
          <Link href="/contacts">Контакти</Link>
        </li>
        <li>
          <Link href="/tariffs">Тарифи</Link>
        </li>
      </ul>
    </>
  );
};

export default MenuList;
