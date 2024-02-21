import Hero from "@/components/main/hero";
import styles from "../styles/hero.module.css";
import About from "@/components/main/about";
import ServicesMain from "@/components/main/servises";

const MainPage = () => {
  return (
    <>
      <Hero />
      <About />
      <ServicesMain />
    </>
  );
};

export default MainPage;
