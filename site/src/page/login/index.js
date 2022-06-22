
import './index.scss'

export default function index() {
    
    
    return(
        
<main className="Faixa-Login">
   <div className="login1">
       <div className="cont">
            <h1> Bem-vindo ao Login</h1>
            <p>Acesse sua conta agora mesmo. </p>
            <div className="botoes">
                <a className="cad" href="../menu"> Cadastrar </a>
                <a className="log" href="../menu2"> Login </a>
            </div>
           
       </div>

       <div className="cont2">
                <h2> Criar uma conta </h2>
            <div className="in-1">
               <label For = "nome"> nome:</label>
               <input className="text" type="text" />
            </div>

            <div className = "in-2">
               <label For = "email" > email: </label>
               <input className="text" type="email" />
            </div>

            <div className="in-3">
                <label For = "senha" > senha: </label>
                <input className="text" type="password" />
             </div>
            </div>

   </div>
</main>
    )

}
