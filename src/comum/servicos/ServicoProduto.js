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

    excluirProduto(idProduto) {
        // Garante que o ID é passado corretamente na URL
        return axios.delete(`/produto/${idProduto}`);
      }
    
}

export default ServicoProduto;