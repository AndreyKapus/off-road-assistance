import styles from "../styles/services.module.css";

const Services = () => {
  return (
    <section className={styles.servicesSection}>
      <h2 className="servisesTitle">Наші сервіси</h2>
      <div className="servicesWrapper">
        <h2>Title</h2>
        <p>Text</p>
        <p>Image</p>
      </div>
    </section>
  );
};

export default Services;
