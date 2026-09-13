import Header from "../components/Header";
import Footer from "../components/Footer";
import Diferenciais from "../components/Diferenciais";
import CTAEncomenda from "../components/CTAEncomenda";

function Sobre() {
  return (
    <>
      <Header />

      <main className="pagina-sobre">
        <section className="pagina-cabecalho">
          <span>QUEM SOMOS</span>

          <h1>
            Uma história feita de <strong>sabor e carinho.</strong>
          </h1>

          <p>Conheça a paixão por trás de cada torta salgada artesanal.</p>
        </section>

        <section className="historia-sobre">
          <div className="historia-imagem">
            <img
              src="https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=1000&q=80"
              alt="Torta salgada artesanal recém-preparada"
            />
          </div>

          <div className="historia-conteudo">
            <span className="sobre-subtitulo">NOSSA HISTÓRIA</span>

            <h2>O sabor da comida caseira em cada encontro.</h2>

            <p>
              A Tortas & Sabores nasceu do desejo de transformar receitas
              especiais em momentos compartilhados. Preparamos cada torta em
              pequenos lotes, com ingredientes selecionados e recheios
              generosos.
            </p>

            <p>
              Da escolha dos ingredientes ao acabamento, tudo recebe o mesmo
              cuidado que teria na cozinha de casa. É assim que entregamos
              comida de verdade para a sua mesa.
            </p>
          </div>
        </section>

        <Diferenciais />
        <CTAEncomenda />
      </main>

      <Footer />
    </>
  );
}

export default Sobre;
