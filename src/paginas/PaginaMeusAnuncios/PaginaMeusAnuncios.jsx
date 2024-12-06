import { useEffect, useState } from 'react';
import CardMeusAnuncios from "../../comum/CardMeusAnuncios/CardMeusAnuncios";
import Principal from "../../comum/componentes/Principal/Principal";
import ServicoProduto from '../../comum/servicos/ServicoProduto';
import ServicoAutenticacao from "../../comum/servicos/ServicoAutenticacao";

const instanciaServicoProduto = new ServicoProduto();

const PaginaMeusAnuncio = () => {
  const session = new ServicoAutenticacao();
  const user = session.buscarUsuarioLogado();
  const [listByUser, setListByUser] = useState([]);

  const excluirProduto = (idProduto) => {
    if (confirm('Tem certeza?')) {
      instanciaServicoProduto
        .excluirProduto(idProduto)
        .then(() => {
          setListByUser((prevList) =>
            prevList.filter((produto) => produto.id !== idProduto)
          );
        })
        .catch((erro) => {
          console.error("Erro ao excluir o produto:", erro);
        });
    }
  };

  useEffect(() => {
    const listByUser = async () => {
      try {
        const response = await instanciaServicoProduto.listByUser();
        setListByUser(response.data);
      } catch (erro) {
        console.error("Erro ao carregar os anúncios:", erro);
      }
    };

    listByUser();
  }, []);

  return (
    <Principal titulo="Meus anúncios">
      {listByUser.map((produto, i) => (
        <CardMeusAnuncios 
          produto={produto} 
          key={i} 
          onExcluir={() => excluirProduto(produto.id)} 
        />
      ))}
    </Principal>
  );
};

export default PaginaMeusAnuncio;
  