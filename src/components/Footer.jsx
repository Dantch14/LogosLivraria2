import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-interno">
        <p>
          <strong>Logos livraria</strong>
          <br />
          Um projeto de estudo feito com React. Os preços são inventados e
          nenhuma compra é de verdade.
        </p>
        <p>
          <Link to="/produtos">Livros</Link> · <Link to="/sobre">Sobre</Link> ·{" "}
          <Link to="/contato">Contato</Link>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
