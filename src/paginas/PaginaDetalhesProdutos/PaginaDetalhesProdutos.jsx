import { useParams } from "react-router-dom";
import Principal from "../../comum/componentes/Principal/Principal";
import ServicoProduto from "../../comum/servicos/ServicoProduto";
import { useEffect, useState } from "react";

const instanciaServicoProduto = new ServicoProduto();

const PaginaDetalhesProdutos = () => {

    const [produto, setProduto] = useState([]);
    const {id} = useParams()
    console.log(id)

    useEffect(() => {
      const getProduto = async () => {
        const response = await instanciaServicoProduto.getById(id);
        
        if (response.error)setProduto(null)
        else setProduto(response.data.data);
      };
      getProduto();
    }, []);
    return(
        <Principal>
            {produto && <div className="card-produto">
                <img src={produto.foto_produto}></img>
                <div>
                    <h4>{produto.nome_produto}</h4>
                    <p>Preço: R${produto.preco_produto}</p>
                    <p>{produto.descricao_produto}</p>
                    <button >Ver Detalhes...</button>
                </div>
            </div>}
        </Principal>
    );
}

export default PaginaDetalhesProdutos;