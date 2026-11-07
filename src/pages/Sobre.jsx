function Sobre() {
  return (
    <section className="container pagina pagina-texto">
      <h1>Quem somos</h1>
      <p>
        A Logos é uma livraria de filosofia com uma ideia simples: montar um catálogo
        algumas das grandes obras da filosofia, com capas bonitas e textos curtos,
        que dessem vontade de abrir os livros e alimentassem a curiosidade de quem 
        está começando a estudar.
      </p>

      <h2>Como o site foi feito</h2>
      <p>
        O site usa React com Vite, cada pedaço da tela (cabeçalho, menu, rodapé,
        card e botão) é um componente separado, e a navegação entre as páginas
        funciona com o React Router, sem recarregar tudo a cada clique.
      </p>

      <h2>Sobre os livros</h2>
      <p>
        Os livros existem de verdade, mas a loja não. Os preços foram
        inventados e o botão “Quero esse” só soma um número no carrinho.
      </p>
    </section>
  );
}

export default Sobre;
