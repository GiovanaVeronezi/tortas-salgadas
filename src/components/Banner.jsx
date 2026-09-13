function Banner() {
  return (
    <section className="banner">

      <div className="banner-content">

        <span className="banner-subtitle">
          TORTAS SALGADAS ARTESANAIS
        </span>

        <h1>
          Sabor caseiro para
          <span> momentos especiais</span>
        </h1>

        <p>
          Tortas salgadas preparadas com ingredientes selecionados,
          muito recheio e aquele sabor de comida feita com carinho.
        </p>

        <div className="banner-buttons">

          <a href="/tortas" className="button-primary">
            Conheça nossas tortas
          </a>

          <a href="#encomenda" className="button-secondary">
            Fazer encomenda
          </a>

        </div>

      </div>

    </section>
  );
}

export default Banner;