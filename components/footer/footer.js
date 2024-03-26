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
        <ul>
          <li>Телефон</li>
          <li>Viber</li>
          <li>Telegram</li>
        </ul>
      </div>
    </section>
  );
};

export default Footer;
