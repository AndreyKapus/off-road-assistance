import Link from "next/link";
import styles from "../../app/styles/header.module.css";
import Logo from "./logo";

const MenuList = () => {
  return (
    <>
      <ul className={styles.linksList}>
        <li>
          <Link href="/contacts" className={styles.listLink}>
            Контакти
          </Link>
        </li>
        <li>
          <Link href="/tariffs" className={styles.listLink}>
            Тарифи
          </Link>
        </li>
      </ul>
    </>
  );
};

export default MenuList;
