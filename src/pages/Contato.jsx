import Header from "../components/Header";
import Footer from "../components/Footer";

const telefone = "5511999999999";

function Contato() {
  function enviarPedido(event) {
    event.preventDefault();

    const dados = new FormData(event.currentTarget);
    const mensagem = [
      `Olá! Meu nome é ${dados.get("nome")}.`,
      `Meu telefone é ${dados.get("telefone")}.`,
      `Gostaria de falar sobre: ${dados.get("mensagem")}`,
    ].join(" ");

    window.open(
      `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`,
      "_blank",
      "noopener,noreferrer",
    );
  }

  return (
    <>
      <Header />

      <main className="pagina-contato">
        <section className="pagina-cabecalho">
          <span>FALE COM A GENTE</span>

          <h1>
            Vamos preparar algo <strong>especial?</strong>
          </h1>

          <p>
            Tire suas dúvidas ou conte para nós como podemos deixar seu momento
            mais gostoso.
          </p>
        </section>

        <section className="contato-conteudo" id="encomenda">
          <div className="contato-informacoes">
            <span className="sobre-subtitulo">ONDE NOS ENCONTRAR</span>

            <h2>Estamos prontos para atender você.</h2>

            <p>
              Envie uma mensagem pelo WhatsApp para consultar sabores, tamanhos,
              disponibilidade e combinar a melhor forma de entrega.
            </p>

            <div className="contato-dados">
              <div>
                <strong>WhatsApp</strong>
                <a
                  href="https://wa.me/5511999999999"
                  target="_blank"
                  rel="noreferrer"
                >
                  (11) 99999-9999
                </a>
              </div>

              <div>
                <strong>Atendimento</strong>
                <span>Segunda a sábado, das 08h às 18h</span>
              </div>

              <div>
                <strong>Entrega e retirada</strong>
                <span>Combine os detalhes diretamente conosco</span>
              </div>
            </div>
          </div>

          <form className="contato-formulario" onSubmit={enviarPedido}>
            <h2>Envie uma mensagem</h2>

            <label htmlFor="nome">Nome</label>
            <input id="nome" name="nome" type="text" required />

            <label htmlFor="telefone">Telefone</label>
            <input id="telefone" name="telefone" type="tel" required />

            <label htmlFor="mensagem">Como podemos ajudar?</label>
            <textarea id="mensagem" name="mensagem" rows="5" required />

            <button type="submit">Continuar pelo WhatsApp</button>
          </form>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Contato;
