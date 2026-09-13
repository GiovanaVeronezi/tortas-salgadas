import { useParams } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";

const tortas = [
  {
    id: 1,
    nome: "Frango com Catupiry",
    categoria: "Frango",
    descricao:
      "Massa artesanal recheada com frango desfiado e catupiry cremoso.",
    preco: 65,
    imagem:
      "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 2,
    nome: "Palmito Cremoso",
    categoria: "Vegetariana",
    descricao:
      "Recheio cremoso de palmito com temperos especiais.",
    preco: 60,
    imagem:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 3,
    nome: "Calabresa com Queijo",
    categoria: "Carnes",
    descricao:
      "Calabresa temperada com queijo derretido.",
    preco: 68,
    imagem:
      "https://images.unsplash.com/photo-1573140401552-3fab0b24427f?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 4,
    nome: "Frango com Milho",
    categoria: "Frango",
    descricao:
      "Frango desfiado, milho e temperos especiais.",
    preco: 62,
    imagem:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 5,
    nome: "Carne com Queijo",
    categoria: "Carnes",
    descricao:
      "Carne moída temperada com queijo cremoso.",
    preco: 70,
    imagem:
      "https://images.unsplash.com/photo-1573140401552-3fab0b24427f?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 6,
    nome: "Quatro Queijos",
    categoria: "Queijos",
    descricao:
      "Uma combinação cremosa de quatro queijos selecionados.",
    preco: 72,
    imagem:
      "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=1000&q=80",
  },
];

function TortaDetalhes() {
  const { id } = useParams();

  const torta = tortas.find(
    (item) => item.id === Number(id)
  );

  if (!torta) {
    return (
      <>
        <Header />

        <main className="torta-nao-encontrada">
          <h1>Torta não encontrada</h1>

          <p>
            A torta que você está procurando não está disponível.
          </p>
        </main>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />

      <main className="pagina-detalhes">

        <div className="detalhes-container">

          <div className="detalhes-imagem">
            <img
              src={torta.imagem}
              alt={torta.nome}
            />
          </div>

          <div className="detalhes-conteudo">

            <span className="detalhes-categoria">
              {torta.categoria}
            </span>

            <h1>{torta.nome}</h1>

            <p className="detalhes-descricao">
              {torta.descricao}
            </p>

            <div className="detalhes-preco">
              R$ {torta.preco.toFixed(2).replace(".", ",")}
            </div>

            <div className="detalhes-opcao">

              <label htmlFor="tamanho">
                Tamanho da torta
              </label>

              <select id="tamanho">
                <option>Pequena - 8 fatias</option>
                <option>Média - 12 fatias</option>
                <option>Grande - 20 fatias</option>
              </select>

            </div>

            <div className="detalhes-opcao">

              <label htmlFor="quantidade">
                Quantidade
              </label>

              <input
                id="quantidade"
                type="number"
                min="1"
                defaultValue="1"
              />

            </div>

            <button className="detalhes-botao">
              Fazer encomenda
            </button>

          </div>

        </div>

      </main>

      <Footer />
    </>
  );
}

export default TortaDetalhes;