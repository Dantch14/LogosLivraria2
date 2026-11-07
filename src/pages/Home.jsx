import Button from "../components/Button.jsx";
import livros from "../data/livros.js";

// Sugestões simples de por onde começar a ler.
const sugestoes = [
  {
    pergunta: "Gosta de pensar sobre linguagem?",
    resposta: "Comece pelas Investigações Filosóficas, de Wittgenstein.",
  },
  {
    pergunta: "Quer entender como conhecemos as coisas?",
    resposta: "A Crítica da Razão Pura, de Kant, é o ponto de partida.",
  },
  {
    pergunta: "Curioso sobre a existência?",
    resposta: "Ser e Tempo, de Heidegger, o magnum opus da Ontologia.",
  },
];

function Home() {
  return (
    <>
      <section className="container intro">
        <div className="intro-texto">
          <h1>Uma livraria pequena para quem ama a Filosofia.</h1>
          <p>
            Olá! Aqui a gente reuniu alguns livros de filosofia que são totalmente
           essenciais para quem está começando a estudar. Não tem pressa, pois dá para
            olhar com calma, comparar e escolher o que combina com você.
          </p>
          <div className="intro-acoes">
            <Button to="/produtos">Ver os livros</Button>
            <Button to="/sobre" variante="link">
              Quem somos
            </Button>
          </div>
        </div>

        <div className="intro-capas" aria-hidden="true">
          {livros.slice(0, 3).map((livro) => (
            <img key={livro.id} src={livro.imagem} alt="" />
          ))}
        </div>
      </section>

      <section className="faixa">
        <div className="container">
          <h2>Por onde começar?</h2>
          <div className="sugestoes">
            {sugestoes.map((item) => (
              <div key={item.pergunta} className="sugestao">
                <p className="sugestao-pergunta">{item.pergunta}</p>
                <p>{item.resposta}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
