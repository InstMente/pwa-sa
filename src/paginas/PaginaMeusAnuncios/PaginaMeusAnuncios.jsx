import CardProduto from "../../comum/componentes/CardProduto/CardProduto";
import ServicoProduto from '../../comum/servicos/ServicoProduto';
import { useEffect, useState } from 'react';
import Principal from "../../comum/componentes/Principal/Principal";
import ServicoAutenticacao from "../../comum/servicos/ServicoAutenticacao";

const instanciaServicoProduto = new ServicoProduto();   

const PaginaMeusAnuncio = () => {

    const session = new ServicoAutenticacao();
    const user = session.buscarUsuarioLogado()
    const [listByUser, setListByUser] = useState([]);

    useEffect(() => {
      const listByUser = async () => {
        const response = await instanciaServicoProduto.listByUser();
        setListByUser(response.data);
      };
      listByUser();
    }, []);
    return (
      
      <Principal titulo="Meus anuncios">
  
      {listByUser.map((produto, i) => 
         <CardProduto produto={produto} key={i}/> )}
       
      </Principal>
    );
}

export default PaginaMeusAnuncio;