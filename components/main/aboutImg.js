import Image from "next/image";
import CarInMudImg from "../../images/stuck-in-mud.jpg";

const AboutImg = () => {
  return (
    <>
      <Image
        src={CarInMudImg}
        width={500}
        height={500}
        alt="car stuck in mud"
      />
    </>
  );
};

export default AboutImg;
