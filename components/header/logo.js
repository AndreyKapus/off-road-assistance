import Image from "next/image";
import logoImage from "../../images/logo.png";
import styles from "../../app/styles/header.module.css";

const Logo = () => {
  return (
    <>
      <Image src={logoImage} alt="logo" className={styles.logo} />
    </>
  );
};

export default Logo;
