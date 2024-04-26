import styles from "../../app/styles/footer.module.css";
import Link from "next/link";
import Logo from "../header/logo";

const Footer = () => {
  return (
    <section className={styles.footerSection}>
      <div className={styles.footerContainer}>
        <Link href="/" className={styles.logoLink}>
          <Logo />
        </Link>
        <ul className={styles.contactsList}>
          <li className={styles.contactsItem}>
            <p className={styles.contactsTitle}>Телефон:</p>
            <a href="tel:0000000000" className={styles.contactInfo}>
              +380 93 333 33 33
            </a>
          </li>
          <li className={styles.contactsItem}>
            <p className={styles.contactsTitle}>Viber:</p>
            <a href="tel:0000000000" className={styles.contactInfo}>
              +380 93 333 33 33
            </a>
          </li>
          <li className={styles.contactsItem}>
            <p className={styles.contactsTitle}>Telegram:</p>
            <a href="tel:0000000000" className={styles.contactInfo}>
              +380 00 00 00 00
            </a>
          </li>
          <li className={styles.contactsItem}>
            <p className={styles.contactsTitle}>Email:</p>
            <a href="mailto:assistans@mail.com" className={styles.contactInfo}>
              assistans@mail.com
            </a>
          </li>
          <li className={styles.contactsItem}>
            <p className={styles.contactsTitle}>instagram:</p>
            <a href="mailto:assistans@mail.com" className={styles.contactInfo}>
              assistans@mail.com
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Footer;
