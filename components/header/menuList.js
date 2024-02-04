import Link from "next/link";
import styles from "../../app/styles/header.module.css";

const MenuList = () => {
  return (
    <>
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
