import Hero from "@/components/main/hero";
import styles from "../styles/hero.module.css";
import About from "@/components/main/about";
import ServicesMain from "@/components/main/servises";
import Footer from "@/components/footer/footer";

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
