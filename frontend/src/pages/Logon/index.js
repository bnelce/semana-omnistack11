import React from 'react';
import './styles.css';
import { FiLogIn } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';


import heroesImg from '../../assets/heroes.png';
import logo from '../../assets/logo.svg';

export default function Logon() {
  return (
    <div className="logonContainer">
    <section className="form">
        <img src={logo} alt="Be the hero"/>

        <form >
            <h1>Faça o seu logon</h1>
            <input placeholder="Sua ID" />
            <button className="button" type="submit">Entrar</button>
            <Link className="back-link" to="/register">
              <FiLogIn size={16} color="#E02041" />
                Não tenho cadastro
            </Link>
        </form>
    </section>
    <img src={heroesImg} alt="Heroes"/>
</div>
  );
}
