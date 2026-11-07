import { Link } from "react-router-dom";

// Botão reutilizável.
// Se receber a prop "to", vira um Link (navegação sem recarregar a página).
// Caso contrário, renderiza um <button> comum com onClick.
function Button({ children, to, onClick, variante = "primario", type = "button" }) {
  const classe = `btn btn-${variante}`;

  if (to) {
    return (
      <Link to={to} className={classe}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classe} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
