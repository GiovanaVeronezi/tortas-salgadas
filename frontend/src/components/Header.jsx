function Header() {
  return (
    <header className="header">
      <div className="header-container">

        <a href="/" className="logo">
          Tortas & Sabores
        </a>

        <nav className="nav">
          <a href="/">Início</a>
          <a href="/tortas">Tortas</a>
          <a href="/sobre">Sobre nós</a>
          <a href="/contato">Contato</a>
        </nav>

        <a href="#encomenda" className="header-button">
          Fazer encomenda
        </a>

      </div>
    </header>
  );
}

export default Header;