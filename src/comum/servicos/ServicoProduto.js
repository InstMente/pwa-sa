import instanciaApi from "./Api"

class ServicoProduto {
    cadastrarProduto(produto) {
        return instanciaApi.post('/cadastrar-produto', produto)
        
    }
    listarProdutos() {
        return instanciaApi.get('/produto')
        
    }
}

export default ServicoProduto;