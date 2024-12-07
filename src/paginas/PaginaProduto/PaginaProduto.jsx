import { useState } from "react"
import BotaoCustomizado from "../../comum/componentes/BotaoCustomizado/BotaoCustomizado"
import Principal from "../../comum/componentes/Principal/Principal"
import './PaginaProduto.css'
import { toast } from "react-toastify"
import ServicoProduto from "../../comum/servicos/ServicoProduto"
import { useNavigate } from "react-router-dom"

const instanciaServicoProduto = new ServicoProduto();
const PaginaProduto = () => {
    const navigate = useNavigate();

    const [nomeProduto, setNomeProduto] = useState('');
    const [descricaoProduto, setDescricaoProduto] = useState('');
    const [valorProduto, setValorProduto] = useState('');
    const [fotoProduto, setFotoProduto] = useState('');

    const fotoBase = (e) => {
        const file = e.target.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = function (event) {
                const base64String = event.target.result;

                setFotoProduto(base64String);
            };

            reader.readAsDataURL(file);
        }
    };

    const cadastrarProduto = async () => {
        try {
            if (!nomeProduto || !descricaoProduto || !valorProduto || !fotoProduto) {
                toast.error('Preencha os dados solicitados.');
                return;
            }

            const produto = {
                nomeProduto,
                descricaoProduto,
                valorProduto,
                fotoProduto
            };

            await instanciaServicoProduto.cadastrarProduto(produto);
            toast.success('Cadastro do produto realizado com sucesso');
            
            navigate("/");
        } catch (error) {
            console.error(error);
            toast.error(error.response?.data || 'Erro ao cadastrar produto.');
        }
    };

    return (
        <Principal titulo='Cadastro de produtos'>
            <div className="campo">
                <label>Nome do produto</label>
                <input
                    type="text"
                    placeholder="..."
                    value={nomeProduto}
                    onChange={(e) => setNomeProduto(e.target.value)}
                />
            </div>
            <div className="campo">
                <label>Descrição</label>
                <input
                    type="text"
                    placeholder="..."
                    value={descricaoProduto}
                    onChange={(e) => setDescricaoProduto(e.target.value)}
                />
            </div>
            <div className="campo">
                <label>Valor</label>
                <input
                    type="text"
                    placeholder="..."
                    value={valorProduto}
                    onChange={(e) => setValorProduto(e.target.value)}
                />
            </div>
            <div className="campo">
                <label>Foto</label>
                <input
                    type="file"
                    accept="image/*"
                    multiple={false}
                    onChange={fotoBase}
                />
            </div>
            <BotaoCustomizado cor='primaria' aoClicar={cadastrarProduto}>
                Cadastrar
            </BotaoCustomizado>
        </Principal>
    );
};

export default PaginaProduto;
