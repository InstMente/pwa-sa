// src/comum/componentes/CardProduto/CardProduto.jsx
import React from 'react';
import './CardMeusAnuncios.css';
import { Link } from 'react-router-dom';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

const CardMeusAnuncios = ({ produto, onExcluir }) => {
    return (
        <Link>
            <div className="card-produto">
                <img src={produto.foto_produto}></img>
                <div>
                    <h3>{produto.nome_produto}</h3>
                    <p>Preço: R${produto.preco_produto}</p>
                    <p>{produto.descricao_produto.substr(0, 10) + "..."}</p>
                <FaTrashAlt onClick={() => onExcluir(produto.id)} id='excluir' ></FaTrashAlt>
                <FaEdit id='editar'></FaEdit>
                </div>
            </div>
        </Link>
    );
};

export default CardMeusAnuncios;
