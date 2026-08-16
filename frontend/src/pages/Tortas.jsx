import Header from "../components/Header";
import Footer from "../components/Footer";
import CardTorta from "../components/CardTorta";

const tortas = [
  {
    id: 1,
    nome: "Frango com Catupiry",
    categoria: "Frango",
    descricao:
      "Massa artesanal recheada com frango desfiado e catupiry cremoso.",
    preco: 65,
    imagem:
      "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    nome: "Palmito Cremoso",
    categoria: "Vegetariana",
    descricao:
      "Recheio cremoso de palmito com temperos especiais.",
    preco: 60,
    imagem:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    nome: "Calabresa com Queijo",
    categoria: "Carnes",
    descricao:
      "Calabresa temperada com queijo derretido.",
    preco: 68,
    imagem:
      "https://images.unsplash.com/photo-1573140401552-3fab0b24427f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    nome: "Frango com Milho",
    categoria: "Frango",
    descricao:
      "Frango desfiado, milho e temperos especiais.",
    preco: 62,
    imagem:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    nome: "Carne com Queijo",
    categoria: "Carnes",
    descricao:
      "Carne moída temperada com queijo cremoso.",
    preco: 70,
    imagem:
      "https://images.unsplash.com/photo-1573140401552-3fab0b24427f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    nome: "Quatro Queijos",
    categoria: "Queijos",
    descricao:
      "Uma combinação cremosa de quatro queijos selecionados.",
    preco: 72,
    imagem:
      "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=800&q=80",
  },
];

function Tortas() {
  return (
    <>
      <Header />

      <main className="pagina-tortas">

        <section className="tortas-header">

          <span>NOSSO CARDÁPIO</span>

          <h1>
            Nossas <strong>tortas salgadas</strong>
          </h1>

          <p>
            Escolha entre nossos sabores e encontre a torta
            perfeita para o seu momento.
          </p>

        </section>

        <section className="catalogo-tortas">

          <div className="catalogo-grid">

            {tortas.map((torta) => (
              <CardTorta
                key={torta.id}
                torta={torta}
              />
            ))}

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}

export default Tortas;