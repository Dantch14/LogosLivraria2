import Button from "./Button.jsx";

// Card reutilizável: tudo o que aparece nele chega por Props.
function Card({ titulo, autor, imagem, descricao, preco, categoria, onComprar }) {
  const precoFormatado = preco.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <article className="card">
      <img className="card-imagem" src={imagem} alt={`Capa de ${titulo}`} />
      <div className="card-corpo">
        <p className="card-categoria">{categoria}</p>
        <h3 className="card-titulo">{titulo}</h3>
        <p className="card-autor">{autor}</p>
        <p className="card-descricao">{descricao}</p>
        <div className="card-rodape">
          <span className="card-preco">{precoFormatado}</span>
          <Button onClick={onComprar}>Quero esse</Button>
        </div>
      </div>
    </article>
  );
}

export default Card;
