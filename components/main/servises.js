import styles from "../../app/styles/servicesMain.module.css";

const ServicesMain = () => {
  return (
    <section className={styles.servicesSection}>
      <div className={styles.servicesContainer}>
        <h3 className={styles.servicesTitle}>Наші сервіси</h3>
      </div>
      <ul>
        <li>
          <img src="#" alt="car stuck in the mud" />
          <div>
            <h3></h3>
            <p></p>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default ServicesMain;
