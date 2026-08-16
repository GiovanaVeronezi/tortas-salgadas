function SobreEmpresa() {
  return (
    <section className="sobre-empresa">

      <div className="sobre-container">

        <div className="sobre-imagem">
          <img
            src="https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=900&q=80"
            alt="Torta salgada artesanal"
          />
        </div>

        <div className="sobre-conteudo">

          <span className="sobre-subtitulo">
            SOBRE NÓS
          </span>

          <h2>
            Comida feita com carinho,
            <strong> sabor de verdade.</strong>
          </h2>

          <p>
            Somos apaixonados por preparar tortas salgadas que
            lembram aquele sabor especial de comida caseira.
          </p>

          <p>
            Cada torta é preparada com ingredientes selecionados,
            recheios generosos e muito cuidado em cada etapa.
          </p>

          <a href="/sobre" className="sobre-botao">
            Conheça nossa história
          </a>

        </div>

      </div>

    </section>
  );
}

export default SobreEmpresa;