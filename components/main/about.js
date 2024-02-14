import styles from "../../app/styles/about.module.css";

const About = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.textWrapper}>
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
      </div>
    </section>
  );
};

export default About;
