import { useState } from "react";
import Button from "../Button/Button";
import FormInput from "../FormInput/FormInput";
import "./RegisterForm.css";

const RegisterForm = () => {
  const [registerForm, setRegisterForm] = useState({
    nome: "",
    email: "",
    senha: "",
  });

  const [isPasswordMatch, setIsPasswordMatch] = useState(true);
 
  const handleFieldsChange = (event) => {
    const { name, value } = event.target;
    setRegisterForm({ ...registerForm, [name]: value });

    if (name === "confirmarSenha" || name === "senha") {
      setIsPasswordMatch(registerForm.senha === value);
      const isEmpty = value !== "" && registerForm.senha === value ? false: true;
      setIsPasswordMatch(isEmpty);
    }
  };

  const handleClick = async () => {
    const response = await fetch("http://localhost:3005/users", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(registerForm),
    });

    const data = await response.json();
    
    alert(`Usuário ${data.nome} cadastrado com sucesso!`);
    setRegisterForm({
      nome: "",
      email: "",
      senha: "",
    });
  };

  return (
    <form className="form" autocomplete="off">
      <FormInput inputName="Nome" id="nome" name="nome" type="text" value={registerForm.nome} onChange={handleFieldsChange} />
      <FormInput inputName="Email" id="email" name="email" type="email" value={registerForm.email} onChange={handleFieldsChange} />
      <FormInput inputName="Senha" id="senha" name="senha" type="password" value={registerForm.senha} onChange={handleFieldsChange} />
      <FormInput inputName="Confirmar Senha" id="confirmarSenha" name="confirmarSenha" type="password" value={registerForm.confirmarSenha} onChange={handleFieldsChange} className={isPasswordMatch ? "" : "error"} />
      <Button text="Cadastrar" type="button" onClick={handleClick} />
    </form>
  );
};

export default RegisterForm;
