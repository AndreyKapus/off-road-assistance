import styles from "../../app/styles/about.module.css";
import AboutImg from "./aboutImg";

const About = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.adoutContainer}>
        <AboutImg />
        <div className={styles.textWrapper}>
          <h2 className={styles.aboutTitle}>Допомога поруч</h2>
          <p className={styles.aboutText}>
            Ми розуміємо, що подорожі можуть мати непередбачувані обставини, і
            саме тому ми завжди на зв<span>&#39;</span>язку, готові надати
            ефективну допомогу.
          </p>
          <p className={styles.aboutText}>
            Наші спеціалісти обладнані передовими засобами та технологіями для
            безпечного та ефективного витягування транспортних засобів з
            болотистих умов.
          </p>
          <p className={styles.aboutText}>
            Наші послуги доступні для всіх типів автомобілів. Ми підходимо до
            кожної ситуації індивідуально, забезпечуючи швидкий результат.
          </p>
          <button type="button" className={styles.aboutCallBtn}>
            Викликати
          </button>
          <p className={styles.aboutText}>
            Наші послуги доступні для всіх типів автомобілів. Ми підходимо до
            кожної ситуації індивідуально, забезпечуючи швидкий результат.
          </p>
          <button type="button" className={styles.aboutCallBtn}>
            Викликати
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
