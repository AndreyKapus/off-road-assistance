import styles from "../../app/styles/contacts.module.css";

const Contacts = () => {
  return (
    <section className={styles.contactsSection}>
      <div className={styles.contactsContainer}>
        <h2>Контакты</h2>
        <ul>
          <li>
            Телефон: <a href="tel:0000000000">0000000000</a>
          </li>
          <li>
            Viber: <a href="tel:0000000000">0000000000</a>
          </li>
          <li>
            Telegram: <a href="tel:0000000000">0000000000</a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contacts;
