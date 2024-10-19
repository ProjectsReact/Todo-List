import { Header } from "../../components/header/Header";
import LoginForm from "../../components/LoginForm/LoginForm";
import "./Login.css";
import Logo from "../../components/Logo/Logo";

export function Login() {
  return (
    <>
      <div className="container">
        <Header />
        <div className="content">
          <div className="logo-side">
            <Logo />
          </div>
          <div className="login-side">
            <LoginForm />
          </div>
        </div>
      </div>
    </>
  );
}