import { useParams } from "react-router-dom";
import Principal from "../../comum/componentes/Principal/Principal";
import ServicoProduto from "../../comum/servicos/ServicoProduto";
import { useEffect, useState } from "react";
import "./PaginaDetalhesProdutos.css"
import ServicoUsuarios from "../../comum/servicos/ServicoUsuarios";

const instanciaServicoProduto = new ServicoProduto();
const instanciaServicoCliente = new ServicoUsuarios();
const PaginaDetalhesProdutos = () => {

    const [produto,setProduto] = useState([]);
    const [usuarios, setUsuario] = useState([]);
    const { id } = useParams()
    const { id_usuarios } = useParams()
    console.log(id)

    useEffect(() => {
        const getProduto = async () => {
            const response = await instanciaServicoProduto.getById(id);

            if (response.error) setProduto(null)
            else setProduto(response.data.data);
        };
        getProduto();
    }, []);
    useEffect(() => {
        const getUsuario = async () => {
            const response = await instanciaServicoCliente.getByIdUsuario(id_usuarios);

            if (response.error) setUsuario(null)
            else setUsuario(response.data.data);
        };
        getUsuario();
    }, []);
    return (
        <Principal>
            {produto && <div className="compra-produto">
                <img src={produto.foto_produto} id="imgProduto"></img>
                <div className="campo">
                    <h2>Nome:{produto.nome_produto}</h2>
                    <p>Preço: R${produto.preco_produto}</p>
                    <p>Descrição:{produto.descricao_produto}</p>
            </div>
            </div>}
            {usuarios && <div className="localizacao">
                        <p>Nome do Anunciante:{usuarios.nome}</p>
                        <p>Email:{usuarios.email} </p>
                        <p>Numero:{usuarios.telefone}</p>
                        <p>Cep:{usuarios.cep}</p>
            </div>}

        </Principal>
    );
}

export default PaginaDetalhesProdutos;