import React, { useState } from 'react';
import './Register.css';
import { Header } from '../../components/header/Header';
import logo from '../../assets/logo.png';;

export function Register() {

  return (
    <>
      <div className="container">
        <Header/>
        <div className="content">
          <div className="logo-side">
            <div className="logo-content">
              <img src={logo} alt="logo" />
              <h1>TO-D0 LIST</h1>
            </div>
          </div>
          <div className="form-side">
            <form autocomplete="off">
              <label for="username">Usuário</label>
              <input type="text" id="username" />

              <label for="email">Email</label>
              <input type="email" id="email" />

              <label for="password">Senha</label>
              <input type="password" id="password" />
              <label for="confirm-password">Confirmar Senha</label>
              <input type="password" id="confirm-password"/>

              <button type="submit">Cadastrar</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
