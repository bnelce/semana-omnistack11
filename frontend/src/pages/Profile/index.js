import React, { useState , useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

//import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.svg';


export default function Profile() {

   /* const [incidents, setIncidents] = useState([]);
    const history = useHistory();

    const ongId = localStorage.getItem('ongId');
    const ongName = localStorage.getItem('ongName');

    useEffect(() => {
        api.get('profiles', {
            headers: {
                Authorization: ongId,
            }
        }).then(response => {
            setIncidents(response.data);
        })
    } ,[ongId]);

    async function handlyDeleteIncident(id) {
        try {
            await api.delete(`incidents/${id}`, {
                headers: {
                    Authorization: ongId,
                }
            });

            setIncidents(incidents.filter(incident => incident.id !== id));
        } catch {
            alert('Erro ao deletar caso, tente novamente');
        }
    }

    function handleLogout() {
        localStorage.clear();
        history.push('/');
    }*/
    
    return(
        <div className="profile-container">
            <header>
                <img src={ logoImg } alt="Be the hero" />
                <span>Bem vindo, ONG Tal</span>

                <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
                <button type="button" onClick="">
                    <FiPower size={18} color="#E02041" />
                </button>
            </header>

            <h1>Casos cadastrados</h1>

                <ul>
                    
                      <li>
                            <strong>CASO: </strong>
                            <p>título</p>
    
                            <strong>DESCRICAO: </strong>
                            <p>descrição ...</p>
    
                            <strong>Valor: </strong>
                            <p>R$ 199.00</p>
    
                            <button onClick="" type="button">
                                <FiTrash2 size={20}  color="#a8a8b3"></FiTrash2>
                            </button>
                        </li>
                        <li>
                            <strong>CASO: </strong>
                            <p>título</p>
    
                            <strong>DESCRICAO: </strong>
                            <p>descrição ...</p>
    
                            <strong>Valor: </strong>
                            <p>R$ 199.00</p>
    
                            <button onClick="" type="button">
                                <FiTrash2 size={20}  color="#a8a8b3"></FiTrash2>
                            </button>
                        </li>
                        <li>
                            <strong>CASO: </strong>
                            <p>título</p>
    
                            <strong>DESCRICAO: </strong>
                            <p>descrição ...</p>
    
                            <strong>Valor: </strong>
                            <p>R$ 199.00</p>
    
                            <button onClick="" type="button">
                                <FiTrash2 size={20}  color="#a8a8b3"></FiTrash2>
                            </button>
                        </li>
                        <li>
                            <strong>CASO: </strong>
                            <p>título</p>
    
                            <strong>DESCRICAO: </strong>
                            <p>descrição ...</p>
    
                            <strong>Valor: </strong>
                            <p>R$ 199.00</p>
    
                            <button onClick="" type="button">
                                <FiTrash2 size={20}  color="#a8a8b3"></FiTrash2>
                            </button>
                        </li>
                    
                </ul>

        </div>
    );
}