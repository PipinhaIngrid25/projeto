import './index.scss';

export default function index() {
    
    return(
        <main classNameName='cod'>
            <div className="Adicionar">
        
        <div className="Botões">
            <div className="alterar">Alterar</div>
            <div className="remover">Remover</div>
        </div>
        <div className="contatos">
            <p>11 <img className="Login" src="/images/foto.png" alt='foto'/></p>
        <a className="Pagina-Inicial" href="../home">Home</a>
        <h1>Meus pets</h1>
        <a className="Mais-Pets" href="../menu">Adic. +</a>
    </div>
    <div className="Cards-criados">
        <div className="Card1">
            <p>Jade</p>
            <p>4 meses</p>
            <p>Shih-tzu</p>
            <p>Cachorro</p>
            <p>Fêmea</p>
        <div className="Botões">
            <div className="alterar">Alterar</div>
            <div className="remover">Remover</div>
        </div>
        <div className="contatos">
            <p>11 94908-1832</p>
            <p>Rua: Paraíso <br/>
                Pq. Res. Cocaia <br/>
                Nº20 <br/>
                São Paulo, SP</p>
            <img className="Jade" src="/images/Jadee.jpg" alt='jadee'/>
        </div>
        </div>
        <div className="Card2">
            <p>Alicia</p>
            <p>8 anos</p>
            <p>Sem raça</p>
            <p>Gato</p>
            <p>Fêmea</p>
        <div className="Botões">
            <div className="alterar">Alterar</div>
            <div className="remover">Remover</div>
        </div>
            <div className="contatos">
                <p>11 94908-1832</p>
                <p>Rua: Paraíso </p> <br/>
                    Pq. Res. Cocaia <br/>
                    Nº20 <br/>
                <p> São Paulo, SP</p>
                <img class="Alicia" src="/images/Alicia.jpg" alt='alicia'/>
            </div>

        <div className="Card3">
            <p>Paçoca</p>
            <p>3 anos</p>
            <p>Sem raça</p>
            <p>Cachorro<p/>
            <p>Macho</p>94908-1832</p>
            <p>Rua: Paraíso <br/>
                Pq. Res. Cocaia <br/>
                Nº20 <br/>
                São Paulo, SP</p>
            <img className="Paçoca" src="/images/Paçoca.jpg" alt='paçoca'/>
        </div>
        </div>
    </div>
    </div>
        </main>
    )

}