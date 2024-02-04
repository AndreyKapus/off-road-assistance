import Image from "next/image";
import logoImage from "../../images/logo.png";

const Logo = () => {
  return (
    <>
      <Image src={logoImage} width={50} height={50} alt="logo" />
    </>
  );
};

export default Logo;
