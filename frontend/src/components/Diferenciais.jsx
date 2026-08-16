function Diferenciais() {
  const diferenciais = [
    {
      titulo: "Produção artesanal",
      descricao:
        "Nossas tortas são preparadas com cuidado para manter aquele sabor especial de comida caseira.",
      icone: "🥧",
    },
    {
      titulo: "Ingredientes selecionados",
      descricao:
        "Escolhemos ingredientes de qualidade para garantir sabor e uma experiência ainda melhor.",
      icone: "🥬",
    },
    {
      titulo: "Recheio generoso",
      descricao:
        "Tortas bem recheadas para que você aproveite muito sabor em cada pedaço.",
      icone: "🍽️",
    },
    {
      titulo: "Feitas sob encomenda",
      descricao:
        "Escolha o sabor, tamanho e quantidade ideais para o seu momento.",
      icone: "📦",
    },
  ];

  return (
    <section className="diferenciais">

      <div className="diferenciais-container">

        <div className="diferenciais-titulo">

          <span>POR QUE ESCOLHER A GENTE?</span>

          <h2>
            Mais que uma torta,
            <strong> uma experiência caseira.</strong>
          </h2>

          <p>
            Cada detalhe é pensado para entregar uma torta
            saborosa, bem preparada e feita especialmente para você.
          </p>

        </div>

        <div className="diferenciais-grid">

          {diferenciais.map((diferencial) => (
            <article
              className="diferencial-card"
              key={diferencial.titulo}
            >
              <div className="diferencial-icone">
                {diferencial.icone}
              </div>

              <h3>{diferencial.titulo}</h3>

              <p>{diferencial.descricao}</p>
            </article>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Diferenciais;