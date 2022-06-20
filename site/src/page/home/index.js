import './index.scss';
import { Link } from 'react-router-dom';


export default function index() {
    
    return(
        <main className='cod'>
            <section className="Faixa-1">
            <header className="Entradas">
                <img className="Logo" src="/images/logoo.png" alt='logoo'/>
                <a className="Entrada1" href="/menu3">VER PETS</a>
                <Link className="Entrada2" to="/Login">LOGIN</Link>
                <img className="Login" src="/images/Loginn.svg" alt='loginn'/>
            </header>

                <img className="Imagem-site" src="/images/Imagem site.jpg" alt='imagem site'/>
            <div className="Titulo">
                <h1>Pet <br/> Companhia</h1>
                <h2>Amor de verdade não se compra,<br/> se encontra</h2>
            </div>
        </section>

        <section className="Faixa-2">
            <div className="Textos-2">
                <div>
                    <h1 className="Titulo-2">QUEM SOMOS</h1>
                    <p className="Paragrafo-2">Somos uma ONG especializada em tratar e cuidar de animais abandonados,em situação de rua ou que foram maltratados, estamos ajudando esses animais desde setembro de 2021.
                    Mantemos um abrigo com mias de 110 leitos para os animais,onde podem ter tudo que precisam,também cuidamos de animais com deficiências físicas e mentais.Em nossa clínica veterinária,damos todo o tipo de apoio e cuidado para os que necessitam para que possam estar saudáveis e que encontrem um novo lar.</p>
                </div>
                <img className="Imagem-2" src="/images/gatin_fofin.jpeg" alt='gatin_fofin'/>
            </div>
        </section>

        <section className="Faixa-3">
            <div className="Textos-3">
                <div>
                    <h1 className="Titulo-3">COMO RESGATAMOS OS ANIMAIS</h1>
                    <p className="Paragrafo-3">Recebemos muitas denúncias de animais que podem estar em situação de risco ou que nós mesmos da ONG encontramos, checamos primeiro a situação que se encontra o animal,como ele reage ao contato humano e/ou com outros animais,depois disso o damos água e comida e o levamos para nossa clínica veterinária aonde fazemos os devidos exames para identificar alguma possível doença com o animal e o tratamos da melhor forma possível para que tenha uma vida saudável novamente.</p>
                </div>
                <img className="Imagem-3" src="/images/catiorro_fofinho.webp" alt='catiorro_fofinho'/>
            </div>
        </section>

        <section className="Faixa-4">
            <div className="Imagens-Informação">
                <img src="/images/Imagem4.svg" alt='imagem4'/>
                <img src="/images/Imagem3.svg" alt='imagem3'/>
                <img src="/images/Imagem2.png" alt='imagem2'/>
                <img src="/images/Imagem1.svg" alt='imagem1'/>
            </div>
            <div className="Qtd">
                <h1>110</h1>
                <h1>30</h1>
                <h1>10</h1>
                <h1>50</h1>
            </div>
            <div className="Titulos-4">
                <h1 className="T1">Animais <br/> Resgatados</h1>
                <h1 className="T2">Animais <br/> Adotados</h1>
                <h1 className="T3">Animais <br/> Disponiveis</h1>
                <h1 className="T4">Animais no <br/> seu novo lar</h1>
            </div>
        </section>

        <section className="Faixa-5">
            <div className="Textos-5">
                <div>
                    <h1 className="Titulo-5">COMO ANUNCIAR UM PET</h1>
                    <p className="Paragrafo-5">Para anunciar um pet basta entrar em contato conosco por uma de nossas redes sociais,contato por telefone,pelo site ou nos visitando no nosso abrigo,nos informando de toda a situação do Pet encontrado,onde foi encontrado,como,se estava passando por maus tratos e etc. Daremos todos o suporte necessário para que o Pet esteja em condições saudáveis para ser anunciado na adoção </p>
                </div>
                <img className="Imagem-5" src="/images/miaaaaaaaaaaaaaaaaau.jpg" alt='miaaaaaaaaaaaaaaaaau'/>
            </div>
        </section>
        <section className="Faixa-6">
            <img className="Logo-6" src="/images/logoo.png" alt='logoo'/>
            <h1 className="Titulo-6">NOS ENCONTRE!</h1>
            <div className="Informações-Dados">
                <div className="Rede-Social">
                    <img className="Redes" src="/images/Face.svg" alt='face'/>
                    <h1>PetCompanhia</h1>
                    <img className="Redes" src="/images/Insta.svg" alt='insta'/>
                    <h1>@Pet.Companhia</h1>
                    <img className="Redes" src="/images/Twiter.svg" alt='twitter'/>
                    <h1>@Pet.Companhia</h1>
                </div>
                <div className="Contato">
                    <img className="contatoss" src="/images/whatsapp.svg" alt='whatsapp'/>
                    <h1>9854-6227</h1>
                    <img className="contatoss" src="/images/Localização.svg" alt='localização'/>
                    <h1>Av. Belmira Marim N 875</h1>
                </div>
            </div>
        </section>
        </main>
    )

}