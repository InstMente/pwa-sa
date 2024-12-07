import Principal from '../../comum/componentes/Principal/Principal';
import './PaginaInicial.css';
import ServicoProduto from '../../comum/servicos/ServicoProduto';
import { useEffect, useState } from 'react';
import CardProduto from '../../comum/componentes/CardProduto/CardProduto';
import { FaSearch } from 'react-icons/fa';

const instanciaServicoProduto = new ServicoProduto();

const PaginaInicial = () => {

  const [listarProdutos, setListarProdutos] = useState([]);

  useEffect(() => {
    const listarProdutos = async () => {
      const response = await instanciaServicoProduto.listarProdutos();
      setListarProdutos(response.data);
    };
    listarProdutos();
  }, []);

  return (

    <Principal titulo="BreShop">
      <div className='campo'>

        <input  type="text" placeholder='Pesquisar' />
        <FaSearch  className='iconPesquisar' onClick={() => listarProdutos()}>
          
        </FaSearch>
      </div>
      {listarProdutos.map((produto, i) =>
        <CardProduto produto={produto} key={i} />)}

    </Principal>
  );
};

export default PaginaInicial;
