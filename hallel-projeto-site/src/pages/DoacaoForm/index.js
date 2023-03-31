import './styleDoacaoform.css'
import Formulario1 from './ComponentsDoacao/Form1'

function DoacaoForm(){

    return(

        <div className = "body-formDoacao">
         

            <div className = "left-formDoacao">
                <h1 className='tituloforms'>Doações</h1>
                <Formulario1/>
               
            </div>

        </div>

    );
}
export default DoacaoForm