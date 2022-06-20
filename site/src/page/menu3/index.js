import './index.scss';


export default function index() {
    
    return(
        <main className='cod'>
            <div className="pets">
        <div className="principal">
            <h1>Adotar é amar de graça.</h1>
            <div className="textos">
                <h3>Adoção deve sser um processo deacolhimento baseado no amor e no respeito, trazendo alegria a todos da nova familia constituida, e não um peso para quem acolheu, nem um castgo para quem foi acolhido </h3>
                <img className="Animais" src="/images/Cachorro e gatinho.jpg" alt='cachorro e gatinho'/>
            </div>
            <h1 className="t2">Conheça os nossos animais</h1>
        </div>
            
        <div className="cards">
            <div className="card1">
                <img className="Cacau" src="/images/Cacau.jpg" alt='Cacau'/>
                <h2>Adote a Cacau</h2>
                <h5>Fêmea <br/>
                    Sem raça definida <br/>
                    3 anos de idade <br/>
                    No abrigo desde: 19/07/2019</h5>
            </div>
               
            <div className="card1">
                <img className="Marley" src="/images/Marley.png" alt='marley'/>
                <h2>Adote o marley</h2>
                <h5>macho <br/>
                    Sem raça definida <br/>
                    3 anos de idade <br/>
                    No abrigo desde
                    11/02/21
                </h5>
            </div>
        </div>

        <div className="cards">
          <div className="card2">
            <img className="Duque" src="/images/Duque.png" alt='duque'/>
            <h2>Adote a Duque</h2>
            <h5>macho <br/>
                Sem raça definida <br/>
                3 anos de idade <br/>
                No abrigo desde
                11/04/21
            </h5>
          </div>

          <div className="card2">
            <img className="Princesa" src="/images/Princesa.png" alt='princesa'/>
            <h2>Adote a princesa</h2>
            <h5>Femea <br/>
                Sem raça definida <br/>
                2 anos de idade <br/>
                No abrigo desde
                19/05/19
            </h5>
         </div>
        </div>

        <div className="cards">
         <div className="card3">
             <img className="Xubi" src="/images/Xubi.jpg" alt='xubi'/>
             <h2>Adote a Xubi</h2>
             <h5>Fêmea <br/>
                sem raça definida <br/>
                5 anos de idade <br/>
                No abrigo desde: 14/02/2019</h5>
         </div>

         <div className="card3">
             <img className="Fofinha" src="/images/Fofinha.jpg" alt='fofinha'/>
             <h2>Adote a Fofinha </h2>
             <h5>Fêmea <br/>
                Raça: Ragdoll <br/>
                7 anos de idade <br/>
                No abrigo desde: 22/08/2018</h5>
         </div>
        </div>

        <div className="cards">
         <div className="card4">
             <img className="Maezinho" src="/images/Maezinho.jpg" alt='maezinho'/>
             <h2>Adote o Maezinho</h2>
             <h5>Macho <br/>
                Raça: Siamês <br/>
                6 anos de idade <br/>
                No abrigo desde: 14/06/202 0</h5>
         </div>

         <div className="card4">
             <img classname="Leoni" src="/images/Leoni.jpg" alt='leoni'/>
             <h2>Adote o Leoni</h2>
             <h5>Macho <br/>
                sem raça definida <br/>
                7 anos de idade <br/>
                No abrigo desde: 07/02/ 2019</h5>
         </div>
        </div>
    </div>
        </main>
    )

}