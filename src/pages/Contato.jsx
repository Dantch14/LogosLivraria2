import { useState } from "react";
import Button from "../components/Button.jsx";

function Contato() {
  const [enviado, setEnviado] = useState(false);

  function aoEnviar(evento) {
    evento.preventDefault();
    setEnviado(true);
    evento.target.reset();
  }

  return (
    <section className="container pagina contato">
      <div className="contato-texto">
        <h1>Vamos conversar?</h1>
        <p>
          Quer indicar um livro, tirar uma dúvida ou só dizer oi? Escreve para
          a gente. Este formulário é só visual, então a mensagem não vai para
          lugar nenhum.
        </p>
      </div>

      <form className="formulario" onSubmit={aoEnviar}>
        <label htmlFor="nome">Seu nome</label>
        <input id="nome" name="nome" type="text" required />

        <label htmlFor="email">Seu e-mail</label>
        <input id="email" name="email" type="email" required />

        <label htmlFor="mensagem">Mensagem</label>
        <textarea id="mensagem" name="mensagem" rows="5" required />

        <Button type="submit">Enviar</Button>

        {enviado && <p className="formulario-ok">Obrigado! Sua mensagem foi registrada.</p>}
      </form>
    </section>
  );
}

export default Contato;
