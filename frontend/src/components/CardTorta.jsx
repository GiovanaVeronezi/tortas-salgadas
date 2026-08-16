function CardTorta({ torta }) {
  return (
    <article className="card-torta">

      <img
        src={torta.imagem}
        alt={torta.nome}
        className="card-torta-imagem"
      />

      <div className="card-torta-conteudo">

        <span className="card-torta-categoria">
          {torta.categoria}
        </span>

        <h3>{torta.nome}</h3>

        <p>{torta.descricao}</p>

        <div className="card-torta-rodape">

          <strong>
            A partir de R$ {torta.preco.toFixed(2).replace(".", ",")}
          </strong>

          <a href={`/tortas/${torta.id}`}>
            Ver detalhes
          </a>

        </div>

      </div>

    </article>
  );
}

export default CardTorta;