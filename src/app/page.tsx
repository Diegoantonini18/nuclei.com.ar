import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Services from "@/components/Services";
import Clientes from "@/components/Clientes";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Intro />
      <Services />
      <Clientes />
      <Contacto />
      <Footer />
    </>
  );
}
