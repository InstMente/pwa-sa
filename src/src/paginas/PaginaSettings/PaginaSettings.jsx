import { useNavigate } from "react-router-dom";
import BotaoCustomizado from "../../comum/componentes/BotaoCustomizado/BotaoCustomizado";
import Principal from "../../comum/componentes/Principal/Principal";

const PaginaSettings = () =>{

    const navigate = useNavigate()
return(
    <Principal titulo="Anúncios">

     
        <BotaoCustomizado cor="segundaria" aoClicar={() => navigate("/meus-anuncios")}>
         Meus Anúncios
        </BotaoCustomizado> 

        <BotaoCustomizado cor = "segundaria" aoClicar={() => navigate("/resgistro-vendas")}>
            Resgistro de Vendas
        </BotaoCustomizado>

    </Principal>
);

}

export default PaginaSettings;