import CardTorta from "./CardTorta";

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
      "Recheio cremoso de palmito com temperos especiais e massa artesanal.",
    preco: 60,
    imagem:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 3,
    nome: "Calabresa com Queijo",
    categoria: "Carnes",
    descricao:
      "Calabresa temperada, queijo derretido e um toque especial da casa.",
    preco: 68,
    imagem:
      "https://images.unsplash.com/photo-1573140401552-3fab0b24427f?auto=format&fit=crop&w=800&q=80",
  },
];

function TortasDestaque() {
  return (
    <section className="tortas-destaque">

      <div className="tortas-container">

        <div className="tortas-titulo">

          <span>NOSSOS SABORES</span>

          <h2>
            Tortas feitas para
            <strong> deixar qualquer momento especial</strong>
          </h2>

          <p>
            Escolha seu sabor favorito e aproveite nossas tortas
            salgadas preparadas artesanalmente.
          </p>

        </div>

        <div className="tortas-grid">

          {tortas.map((torta) => (
            <CardTorta
              key={torta.id}
              torta={torta}
            />
          ))}

        </div>

        <div className="tortas-botao">

          <a href="/tortas">
            Ver todas as tortas
          </a>

        </div>

      </div>

    </section>
  );
}

export default TortasDestaque;