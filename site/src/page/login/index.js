
import './index.scss'

export default function index() {
    
    
    return(
        
<main className="Faixa-Login">
   <div className="login1">
       <div className="cont">
            <h1> Bem-vindo ao Login</h1>
            <p>Acesse sua conta agora mesmo. </p>
            <div classNamw="botoes">
                <a className="cad" href="../menu/index.html"> Cadastrar </a>
                <a className="log" href="../menu2/index.html"> Login </a>
            </div>
           
       </div>

       <div class="cont2">
                <h2> Criar uma conta </h2>
            <div className="in-1">
               <label for="nome" > nome:</label>
               <input className="text" type="text" />
            </div>

            <div className="in-2">
               <label for="email" > email: </label>
               <input className="text" type="email" />
            </div>

            <div className="in-3">
                <label for="senha" > senha: </label>
                <input className="text" type="password" />
             </div>
            </div>

   </div>
</main>
    )

}
