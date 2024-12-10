import { useEffect, useState } from "react";
import BotaoCustomizado from "../../comum/componentes/BotaoCustomizado/BotaoCustomizado";
import Principal from "../../comum/componentes/Principal/Principal";
import "./PaginaProduto.css";
import { toast } from "react-toastify";
import ServicoProduto from "../../comum/servicos/ServicoProduto";
import { useNavigate, useParams } from "react-router-dom";
import instanciaApi from "../../comum/servicos/Api";

const instanciaServicoProduto = new ServicoProduto();

const PaginaProduto = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // Simplificação do params

  const [nomeProduto, setNomeProduto] = useState("");
  const [descricaoProduto, setDescricaoProduto] = useState("");
  const [valorProduto, setValorProduto] = useState("");
  const [fotoProduto, setFotoProduto] = useState("");

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

  useEffect(() => {
    const buscarProduto = async () => {
      if (id) {
        try {
          const response = await instanciaApi.get(`/produto/${id}`);
          if (response.data) {
            setNomeProduto(response.data.nomeProduto || "");
            setDescricaoProduto(response.data.descricaoProduto || "");
            setValorProduto(response.data.valorProduto || "");
            setFotoProduto(response.data.fotoProduto || "");
          }
        } catch (error) {
          console.error(error);
          toast.error("Erro ao buscar produto.");
        }
      }
    };

    buscarProduto();
  }, [id]);

  const cadastrarProduto = async () => {
    try {
      if (!nomeProduto || !descricaoProduto || !valorProduto || !fotoProduto) {
        toast.error("Preencha os dados solicitados.");
        return;
      }

      const produto = {
        nomeProduto,
        descricaoProduto,
        valorProduto,
        fotoProduto,
      };

      if (id) {
        // Editar produto
        await instanciaServicoProduto.editarProduto(id, produto);
        toast.success("Produto editado com sucesso.");
      } else {
        // Cadastrar produto
        await instanciaServicoProduto.cadastrarProduto(produto);
        toast.success("Produto cadastrado com sucesso.");
      }

      navigate("/");
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data || "Erro ao salvar o produto.");
    }
  };

  return (
    <Principal titulo={id ? "Editar Produto" : "Cadastrar Produto"}>
      {id && (
        <div className="campo">
          <label>ID:</label>
          <input type="text" value={id} disabled />
        </div>
      )}
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
        {fotoProduto && <img src={fotoProduto} alt="Preview" width="100" />}
        <input
          type="file"
          accept="image/*"
          multiple={false}
          onChange={fotoBase}
        />
      </div>
      <BotaoCustomizado cor="primaria" aoClicar={cadastrarProduto}>
        {id ? "Editar" : "Cadastrar"}
      </BotaoCustomizado>
    </Principal>
  );
};

export default PaginaProduto;
