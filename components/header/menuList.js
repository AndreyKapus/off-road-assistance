import Link from "next/link";
import styles from "../../app/styles/header.module.css";
import Logo from "./logo";

const MenuList = () => {
  return (
    <>
      <ul className={styles.linksList}>
        <li className={styles.menuItem}>
          <Link href="/contacts" className={styles.listLink}>
            Контакти
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/rates" className={styles.listLink}>
            Тарифи
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/services" className={styles.listLink}>
            Сервіси
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/gallery" className={styles.listLink}>
            Галерея
          </Link>
        </li>
      </ul>
    </>
  );
};

export default MenuList;
