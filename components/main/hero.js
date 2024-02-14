import styles from "../../app/styles/hero.module.css";

const Hero = () => {
  return (
    <div className={styles.heroTitleWrapper}>
      <h1 className={styles.heroTitle}>Roadside Assistance</h1>
      <button className={styles.heroCallBtn}>
        <a href="tel:+380961111111" class="tel__link">
          Викликати
        </a>
      </button>
    </div>
  );
};

export default Hero;
