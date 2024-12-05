import instanciaApi from "./Api"

class ServicoProduto {
    cadastrarProduto(produto) {
        return instanciaApi.post('/produto', produto)
        
    }
    listarProdutos() {

        return instanciaApi.get('/produto')
        
    }
}

export default ServicoProduto;