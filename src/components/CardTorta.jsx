import { Link } from "react-router-dom";

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
            A partir de R${" "}
            {torta.preco.toFixed(2).replace(".", ",")}
          </strong>

          <Link to={`/tortas/${torta.id}`}>
            Ver detalhes
          </Link>

        </div>

      </div>

    </article>
  );
}

export default CardTorta;