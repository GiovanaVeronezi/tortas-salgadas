function CTAEncomenda() {
  const telefone = "5511999999999";

  const mensagem = encodeURIComponent(
    "Olá! Gostaria de fazer uma encomenda de torta salgada."
  );

  const whatsappUrl = `https://wa.me/${telefone}?text=${mensagem}`;

  return (
    <section className="cta-encomenda" id="encomenda">
      <div className="cta-container">

        <div>
          <span>VAI RECEBER A FAMÍLIA OU OS AMIGOS?</span>

          <h2>
            Tem uma ocasião especial?
          </h2>

          <p>
            Faça sua encomenda e tenha uma torta salgada
            preparada especialmente para o seu momento.
          </p>
        </div>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="cta-botao"
        >
          Fazer encomenda pelo WhatsApp
        </a>

      </div>
    </section>
  );
}

export default CTAEncomenda;

console.log('teste');
