import { Link, useLocation } from 'react-router-dom';
import './Header.css';


export function Header() {
  const location = useLocation(); // Pega a rota atual

  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link 
              to="/register" 
              style={{ color: location.pathname === "/register" ? "yellow" : "white" }}
            >
              CADASTRAR
            </Link>
          </li>
          <li>
            <Link 
              to="/login" 
              style={{ color: location.pathname === "/login" ? "yellow" : "white" }}
            >
              ENTRAR
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}