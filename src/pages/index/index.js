import React from 'react';
import logo from '../../logo.svg';
import { Link } from 'react-router-dom'
import '../../App.css';




export default function index() {

  return (
    <div className="conteiner">
     <div className="App">
        <img src={logo} alt="IFRS"/>
        <p>
            Bem vindo ao portal do candidato! Essa plataforma tem o objetivo de te ajudar nessa jornada de se tornar um estudante do IF
        </p>
      <Link to="/modo-de-acesso"><button className="btn">  Escolher modalidade de acesso (cota)  </button></Link>
     </div>
    </div>
  );

}


