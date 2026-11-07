import { useState } from "react";
import Card from "../components/Card.jsx";
import livros from "../data/livros.js";

function Produtos() {
  const [itensNoCarrinho, setItensNoCarrinho] = useState(0);

  function adicionarAoCarrinho() {
    setItensNoCarrinho(itensNoCarrinho + 1);
  }

  return (
    <section className="container pagina">
      <div className="pagina-topo">
        <div>
          <h1>Os livros</h1>
          <p className="pagina-subtitulo">
            Seis títulos para começar, clique em “Quero esse” para guardar no carrinho.
          </p>
        </div>
        <p className="carrinho">No carrinho: {itensNoCarrinho}</p>
      </div>

      <div className="grade">
        {livros.map((livro) => (
          <Card
            key={livro.id}
            titulo={livro.titulo}
            autor={livro.autor}
            imagem={livro.imagem}
            descricao={livro.descricao}
            preco={livro.preco}
            categoria={livro.categoria}
            onComprar={adicionarAoCarrinho}
          />
        ))}
      </div>
    </section>
  );
}

export default Produtos;
