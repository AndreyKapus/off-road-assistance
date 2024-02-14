import styles from "../../app/styles/hero.module.css";

const Hero = () => {
  return (
    <section className={styles.heroWrapper}>
      <div className={styles.heroTitleWrapper}>
        <h1 className={styles.heroTitle}>Roadside Assistance</h1>
        <button className={styles.heroCallBtn}>
          <a href="tel:+380961111111">Викликати</a>
        </button>
      </div>
    </section>
  );
};

export default Hero;
