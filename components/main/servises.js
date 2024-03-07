import Image from "next/image";
import CarStuck from "../../images/stuck-in-mud.jpg";
import styles from "../../app/styles/servicesMain.module.css";

const ServicesMain = () => {
  return (
    <section className={styles.servicesSection}>
      <div className={styles.servicesContainer}>
        <h3 className={styles.servicesTitle}>Наші сервіси</h3>
      </div>
      <ul>
        <li className={styles.servicesListItem}>
          <Image
            src={CarStuck}
            width={300}
            height={200}
            alt="car stuck in the mud"
          />

          <div>
            <h3>Витяжка авто</h3>
            <p>Витягнемо з будь-якої залупи!</p>
          </div>
        </li>
        <li className={styles.servicesListItem}>
          <img src="#" alt="car stuck in the mud" />
          <div>
            <h3>Аварійне відкриття замків</h3>
            <p></p>
          </div>
        </li>
        <li className={styles.servicesListItem}>
          <img src="#" alt="car stuck in the mud" />
          <div>
            <h3>Відкриття домашніх замків</h3>
            <p></p>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default ServicesMain;
