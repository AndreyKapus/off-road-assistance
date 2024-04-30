import Image from "next/image";
import CarInMudImg from "../../images/car_stuck.jpg";
import styles from "../../app/styles/about.module.css";

const AboutImg = () => {
  return (
    <div className={styles.imageWrapper}>
      <Image
        className={styles.aboutImage}
        src={CarInMudImg}
        style={{
          width: "100%",
          height: "auto",
        }}
        alt="car stuck in mud"
      />
    </div>
  );
};

export default AboutImg;
