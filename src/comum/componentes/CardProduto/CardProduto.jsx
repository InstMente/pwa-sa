// src/comum/componentes/CardProduto/CardProduto.jsx
import React from 'react';
import './CardProduto.css';  
import { Link } from 'react-router-dom';

const CardProduto = ({ produto }) => {
    return (
        <Link to="/nada">
            <div className="card-produto">
                <img src={produto.foto_produto}></img>
                <div>
                    <h3>{produto.nome_produto}</h3>
                    <p>Preço: R${produto.preco_produto}</p>
                    <p>{produto.descricao_produto.substr(0, 100) + "..."}</p>
                </div>
            </div>
        </Link>
    );
};

export default CardProduto;
