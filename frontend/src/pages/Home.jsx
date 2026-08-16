import Header from "../components/Header";
import Banner from "../components/Banner";
import TortasDestaque from "../components/TortasDestaque";
import SobreEmpresa from "../components/SobreEmpresa";
import Diferenciais from "../components/Diferenciais";
import ComoEncomendar from "../components/ComoEncomendar";
import CTAEncomenda from "../components/CTAEncomenda";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Header />

      <main>
        <Banner />

        <TortasDestaque />

        <SobreEmpresa />

        <Diferenciais />

        <ComoEncomendar />

        <CTAEncomenda />
      </main>

      <Footer />
    </>
  );
}

export default Home;
