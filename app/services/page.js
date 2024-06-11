import styles from "../styles/services.module.css";

const Services = () => {
  return (
    <section className={styles.servicesSection}>
      <div className={styles.servicesContainer}>
        <h2 className="servisesTitle">Наші сервіси</h2>
        <div className="servicesWrapper">
          <h2>Title</h2>
          <p>Text</p>
          <p>Image</p>
        </div>
        <div className="servicesWrapper">
          <h2>Title</h2>
          <p>Text</p>
          <p>Image</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
