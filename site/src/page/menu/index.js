import './index.scss';


export default function index() {
    
    return(
        <main className=''>
            <div class="p-container">
       <a href="../home"> Home </a>
       <h2> Crie um card para o seu pet</h2>
       <div className="carrd">
        <div className="in-1">
            <label for="nome" > nome:</label>
            <input type="text" />
        </div>

        <div className="in-1">
            <label for="i" > idade:</label>
            <input type="text" />
        </div>

        <div className="in-1">
            <label for="r" > raça do pet: </label>
            <input type="text" />
        </div>

        <div className="in-1">
            <select class="Animal">
                <option>Cachorro</option>
                <option>Gato</option>
            </select>
        </div>

        <div className="in-1">
            <select class="Escolha">
                <option>Fêmea</option>
                <option>Macho</option>
            </select>
        </div>

        <div className="in-6">
            <label for="tel" > tel:</label>
            <input type="text" />
        </div>

        <div className="in-7">
            <label for="end" > endereço :</label>
            <input type="text" />
        </div>

        <div className="in-8">
            <label for="foto" > Adicione uma foto do animal:</label>
            <input type="image" />
        </div>

       </div>

       <a className="button" href="../menu2">Criar</a>
   </div>
        </main>
    )

}