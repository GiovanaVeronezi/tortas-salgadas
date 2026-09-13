function ComoEncomendar() {
  const etapas = [
    {
      numero: "01",
      titulo: "Escolha sua torta",
      descricao:
        "Conheça nossos sabores e escolha a torta que mais combina com o seu momento.",
    },
    {
      numero: "02",
      titulo: "Escolha o tamanho",
      descricao:
        "Selecione o tamanho e a quantidade que você precisa para sua ocasião.",
    },
    {
      numero: "03",
      titulo: "Faça sua encomenda",
      descricao:
        "Envie os detalhes do seu pedido e combine a data de retirada ou entrega.",
    },
  ];

  return (
    <section className="como-encomendar">
      <div className="como-container">

        <div className="como-titulo">
          <span>COMO FUNCIONA</span>

          <h2>
            Encomendar sua torta
            <strong> é simples.</strong>
          </h2>

          <p>
            Escolha seu sabor, defina os detalhes e deixe o restante
            com a gente.
          </p>
        </div>

        <div className="etapas-grid">
          {etapas.map((etapa) => (
            <article className="etapa-card" key={etapa.numero}>

              <span className="etapa-numero">
                {etapa.numero}
              </span>

              <h3>{etapa.titulo}</h3>

              <p>{etapa.descricao}</p>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default ComoEncomendar;