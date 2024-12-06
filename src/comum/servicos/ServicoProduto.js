import instanciaApi from "./Api"

class ServicoProduto {
    cadastrarProduto(produto) {
        return instanciaApi.post('/produto', produto)
        
    }
    listarProdutos() {

        return instanciaApi.get('/produto/list')
        
    }
    listByUser(id) {
        return instanciaApi.get('/produto', {headers:{"x-usuario":id}})
    }
    // excluirProduto(produto){

    //     return instanciaApi.excluirProduto("/produto/:id", produto)

    // }

    excluirProduto(produto) {
        return axios.delete(`/produto/${produto.id}`);
      }
    
}

export default ServicoProduto;