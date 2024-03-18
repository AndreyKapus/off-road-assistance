import Image from "next/image";
import CarStuck from "../../images/stuck.jpg";
import OffRoadImg from "../../images/off-road.jpg";
import CarDoorUnlock from "../../images/car_doors_unlock.jpg";
import DoorUnlock from "../../images/door_unlock.jpg";
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
              <p className={styles.servicesProblem}>
                ❄️ Зійшли з дороги у сніговому полоні? 🌨️ Застряли в болоті? Не
                панікуйте!
              </p>
              <p>
                Ми - ваш надійний партнер у складних ситуаціях! Наша команда
                професіоналів готова надати вам швидку та ефективну допомогу у
                витягуванні вашого автомобіля з будь-яких ускладнених умов –
                болота, снігу, чи глибокого бруду.
              </p>
            </div>
          </li>
          <li className={styles.servicesListItem}>
            <Image
              className={styles.servisesImage}
              src={CarDoorUnlock}
              layout="responsive"
              alt="car stuck in the mud"
            />
            <div className={styles.servisesContentWrapper}>
              <h3 className={styles.servisesListTitle}>
                Аварійне відкриття замків
              </h3>
              <p className={styles.servicesProblem}>
                Втратили ключі? Або ключі залишились в авто?
              </p>
              <p>
                Наша кваліфікована команда оперативно та професійно відкриє
                двері вашого авто, щоб ви могли продовжити свій шлях без зайвих
                турбот.
              </p>
            </div>
          </li>
          <li className={styles.servicesListItem}>
            <Image
              src={DoorUnlock}
              layout="responsive"
              className={styles.servisesImage}
              alt="car stuck in the mud"
            />
            <div className={styles.servisesContentWrapper}>
              <h3 className={styles.servisesListTitle}>
                Відкриття домашніх замків
              </h3>
              <p className={styles.servicesProblem}>
                Заблоковані у власній квартирі або будинку? Забули ключі
                всередині?
              </p>
              <p>
                Наші досвідчені фахівці оперативно та безпечно відкриють двері
                вашої квартири чи будинку, щоб ви могли повернутися до комфорту
                та безпеки вашого приміщення. Не панікуйте, звертайтеся до нас,
                і ми негайно прибудемо, щоб вам допомогти!
              </p>
              <p></p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ServicesMain;
