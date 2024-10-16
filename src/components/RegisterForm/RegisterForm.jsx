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
  const handleFieldsChange = (event) => {
    setRegisterForm({ ...registerForm, [event.target.name]: event.target.value });
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
      <Button text="Cadastrar" type="button" onClick={handleClick} />
    </form>
  );
};

export default RegisterForm;
