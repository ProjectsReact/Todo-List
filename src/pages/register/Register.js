import React, { useState } from 'react';
import './Register.css';
import { Header } from '../../components/header/Header';

export function Register() {

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
