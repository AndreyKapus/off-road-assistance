import styles from "../../app/styles/rates.module.css";

const Rates = () => {
  return (
    <section className={styles.ratesSection}>
      <div className={styles.ratesContainer}>
        <h3>Тарифи</h3>
        <ul className={styles.ratesList}>
          <li className={styles.ratesListItem}>
            Витяжка авто із бруду/снігу:
            <span className={styles.ratesListRate}>від 300 грн</span>
          </li>
          <li className={styles.ratesListItem}>
            Аварійне відкриття автомобільних дверей:
            <span className={styles.ratesListRate}>від 300 грн</span>
          </li>
          <li className={styles.ratesListItem}>
            Аварійне відкриття квартири:
            <span className={styles.ratesListRate}>від 300 грн</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Rates;
