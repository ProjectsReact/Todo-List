import { Header } from '../../components/header/Header';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import './Register.css';
import Logo from '../../components/Logo/Logo';

export function Register() {

  return (
    <>
      <div className="container">
        <Header/>
        <div className="content">
          <div className="logo-side">
            <Logo />
          </div>
          <div className="form-side">
            <RegisterForm />
          </div>
        </div>
      </div>
    </>
  );
}
