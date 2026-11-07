import Button from "../components/Button.jsx";

function NotFound() {
  return (
    <section className="container pagina nao-encontrada">
      <p className="erro-codigo">404</p>
      <h1>Essa página se perdeu entre as estantes.</h1>
      <p>O endereço que você digitou não existe por aqui.</p>
      <Button to="/">Voltar para o início</Button>
    </section>
  );
}

export default NotFound;
