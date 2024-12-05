import { useNavigate } from 'react-router-dom';
import Principal from '../../comum/componentes/Principal/Principal';
import './PaginaInicial.css';
import ServicoProduto from '../../comum/servicos/ServicoProduto';
import { useEffect, useState } from 'react';
import CardProduto from '../../comum/componentes/CardProduto/CardProduto';

const instanciaServicoProduto = new ServicoProduto();

const PaginaInicial = () => {
  
  const navigate = useNavigate()  
  const [listarProdutos, setListarProdutos] = useState([]);

  useEffect(() => {
    const listarProdutos = async () => {
      const response = await instanciaServicoProduto.listarProdutos();
      setListarProdutos(response.data);
    };
    listarProdutos();
  }, []);

  return (
    
    <Principal titulo="Página Inicial">

    {listarProdutos.map((produto) => {
      return(
       <CardProduto produto={produto} key={produto.id}>
       </CardProduto>
      );
    })}
      {/* /* <BotaoCustomizado cor="primaria" aoClicar={() => navigate('/lista-clientes')}>
        Lista de Clientes
      </BotaoCustomizado> */}
     
    </Principal>
  );
};

export default PaginaInicial;
