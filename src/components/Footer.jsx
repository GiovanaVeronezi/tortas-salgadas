function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-marca">

          <h2>Tortas & Sabores</h2>

          <p>
            Tortas salgadas artesanais feitas com carinho
            para deixar seus momentos ainda mais especiais.
          </p>

        </div>

        <div className="footer-links">

          <h3>Navegação</h3>

          <a href="/">Início</a>
          <a href="/tortas">Tortas</a>
          <a href="/sobre">Sobre nós</a>
          <a href="/contato">Contato</a>

        </div>

        <div className="footer-contato">

          <h3>Contato</h3>

          <p>WhatsApp: (11) 99999-9999</p>
          <p>Segunda a sábado</p>
          <p>08h às 18h</p>

        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © 2026 Tortas & Sabores. Todos os direitos reservados.
        </p>
      </div>

    </footer>
  );
}

export default Footer;