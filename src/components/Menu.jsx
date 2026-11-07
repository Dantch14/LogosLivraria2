import { NavLink } from "react-router-dom";

// Lista de links do menu. Para criar uma nova rota no menu,
// basta adicionar um objeto neste array.
const links = [
  { caminho: "/", texto: "Início" },
  { caminho: "/produtos", texto: "Livros" },
  { caminho: "/sobre", texto: "Sobre" },
  { caminho: "/contato", texto: "Contato" },
];

function Menu() {
  return (
    <nav className="menu" aria-label="Navegação principal">
      {links.map((link) => (
        <NavLink
          key={link.caminho}
          to={link.caminho}
          end={link.caminho === "/"}
          className={({ isActive }) => (isActive ? "menu-link ativo" : "menu-link")}
        >
          {link.texto}
        </NavLink>
      ))}
    </nav>
  );
}

export default Menu;
