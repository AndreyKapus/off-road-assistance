import Image from "next/image";
import CarStuck from "../../images/stuck.jpg";
import OffRoadImg from "../../images/off-road.jpg";
import styles from "../../app/styles/servicesMain.module.css";

const ServicesMain = () => {
  return (
    <section className={styles.servicesSection}>
      <div className={styles.servicesContainer}>
        <h3 className={styles.servicesTitle}>Наші сервіси</h3>

        <ul className={styles.servicesList}>
          <li className={styles.servicesListItem}>
            <Image
              className={styles.servisesImage}
              src={OffRoadImg}
              layout="responsive"
              alt="car stuck in the mud"
            />
            <div className={styles.servisesContentWrapper}>
              <h3 className={styles.servisesListTitle}>Витяжка авто</h3>
              <p>
                Витягнемо з будь-якої залупи! Compressing objects: 100% (5/5),
                done. Writing objects: 100% (5/5), 621 bytes | 621.00 KiB/s,
                done. Total 5 (delta 4), reused 0 (delta 0), pack-reused 0
              </p>
            </div>
          </li>
          <li className={styles.servicesListItem}>
            <Image
              className={styles.servisesImage}
              src={CarStuck}
              layout="responsive"
              alt="car stuck in the mud"
            />
            <div className={styles.servisesContentWrapper}>
              <h3 className={styles.servisesListTitle}>
                Аварійне відкриття замків
              </h3>
              <p>Відкриємо будь-який замок!</p>
            </div>
          </li>
          <li className={styles.servicesListItem}>
            <Image
              src={OffRoadImg}
              layout="responsive"
              className={styles.servisesImage}
              alt="car stuck in the mud"
            />
            <div className={styles.servisesContentWrapper}>
              <h3 className={styles.servisesListTitle}>
                Відкриття домашніх замків
              </h3>
              <p>Відкриємо будь-який замок!</p>
              <p></p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ServicesMain;
