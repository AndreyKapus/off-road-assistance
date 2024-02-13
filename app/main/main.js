import Hero from "@/components/main/hero";
import styles from "../styles/hero.module.css";

const MainPage = () => {
  return (
    <section className={styles.heroWrapper}>
      <Hero />
    </section>
  );
};

export default MainPage;
