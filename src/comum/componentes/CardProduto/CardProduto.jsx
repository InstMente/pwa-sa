// src/comum/componentes/CardProduto/CardProduto.jsx
import React from 'react';
import './CardProduto.css';  // Aqui você pode estilizar seu card.

const CardProduto = ({ produto }) => {
  return (
    <div className="card-produto">
      <h3>{produto.nome_produto}</h3>
      <p>Preço: R${produto.preco_produto}</p>
      <p>{produto.descricao_produto}</p>
      <img src='{produto.foto_produto}'></img>
      {/* <Link to=""></Link> */}
    </div>
  );
};

export default CardProduto;
