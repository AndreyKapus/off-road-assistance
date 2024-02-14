import styles from "../../app/styles/hero.module.css";

const Hero = () => {
  return (
    <div className={styles.heroTitleWrapper}>
      <h1 className={styles.heroTitle}>Roadside Assistance</h1>
      <button className={styles.heroCallBtn}>Викликати</button>
    </div>
  );
};

export default Hero;
