import React, { useState } from 'react';
import './Login.css';
import { Header } from '../../components/header/Header';

export function Login() {

  return (
    <>
      <div className="container">
        <Header/>
        <div className="content">
          <div className="logo"></div>
          <div className="form"></div>
        </div>
      </div>
    </>
  );
}
