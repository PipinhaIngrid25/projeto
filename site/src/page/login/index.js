import axios  from 'axios'

import { useState } from 'react'
import './index.scss'

export default function index() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const navigate = useNavigate();

    async function entrarClick() {
        try {
            const r = await axios.get('http://localhost:5000/usuario/login',{
            email:email,
            senha:senha
        });
        navigate('/admin');
     } catch (err) {
        if (err.response.status === 401){
            setErro(err.response.data);
      }
    }
}
    
    return(
        <main className='cod'>
            <div className="login1">
       <div className="cont">
            <h1> Bem-vindo ao Login</h1>
            <p>Acesse sua conta agora mesmo. </p>
            <div className="botoes">
                <a className="cad" href="../menu" > Cadastrar </a>
                <a className="log" href="../menu2"onClick={entrarClick}> Login </a>
            </div>
           
       </div>

       <div className="cont2">
                <h2> Criar uma conta </h2>
            <div className="in-1">
               <label for="nome" > nome:</label>
               <input className="text" type="text" />
            </div>

            <div className="in-2">
               <label for="email" > email: </label>
               <input className="text" type="email"value={ email } onChange={e => setEmail(e.target.value)} />
            </div>

            <div className="in-3">
                <label for="senha" > senha: </label>
                <input class="text" type="password"value= { senha } onChange={e => setSenha(e.target.value)} />
             </div>
            </div>

   </div>
        </main>
    )

}