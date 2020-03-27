import React from 'react';

import './styles.css';

import { Link } from 'react-router-dom';
import logoImg from '../../assets/logo.svg';
import { FiArrowLeft } from 'react-icons/fi';

export default function NewIncident(){
    return (
    <div className="new-incident-container">
        <div className="content">
            <section>
                <img src={logoImg} alt="Be The Hero" />

                <h1>Cadastrar novo caso</h1>
                <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>

                <Link className="back-link" to="/profile">
                    <FiArrowLeft size={16} color="#E02041" />
                    Não tenho cadastro
                </Link>

            </section>

            <form>
                <input placeholder="Título do caso" />
                <textarea placeholder="Descrição" />
                <input placeholder="Valor em reais" />     

                <button className="button" type="submit">Cadastrar</button>
            </form>
        </div>
    </div>
    )
}