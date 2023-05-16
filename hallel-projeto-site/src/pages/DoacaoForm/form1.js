import { useState } from "react"
import "./styles/styleForm1.css"
import { Link } from "react-router-dom";

const  Form1 = ({setEstado2, estado1, setEstado1, estado2}) => {


    const [showDoacao, setShowDoacao] = useState(false);
    const [showObj, setShowObj] = useState(false);
    const [selectOption, setSelectOption] = useState("");


    function mudarSinais(){

        return(
            setEstado2(!estado2),
            setEstado1(!estado1)
        )

    }

    function showDonation(){

        return setShowDoacao(!showDoacao)  
    }

    function showObjetoDoacao(){

        setShowObj(!showObj)
    }

    function onValueChange(e){

        return setSelectOption(e);
    }


    function elementos(){
        

        return(

            <section className="container-form1">

            <div className="breadNav">

            <button>1</button>
            <button>2</button>
            <button>3</button>
            </div>

            <label>Selecione a sua forma de doação</label>

            <div className="forms1">

                <button onClick={showDonation}>Dinheiro</button>

                { showDoacao &&


                    <form className="formasDinheiro">

                        <span><selectOption/></span>

                    <label>
                        
                        PicPay
                       
                        <input type="radio" value="PicPay" name="picpay" checked = {selectOption === "picpay"} onChange={() =>onValueChange("picpay")}/>                    
                        
                    </label>

                    <label>

                        Cartão
                       
                            <input type="radio" value="Cartão" name="cartao" checked = {selectOption === "cartao"} onChange = {()=>onValueChange("cartao")}/>
                    </label>

                    <label>

                        QR-Code
                       
                            <input type="radio" value="QR-Code" name="qrcode" checked = {selectOption === "qrcode"} onChange = {()=>onValueChange("qrcode")}/>
                        
                    </label>
                    </form>
                }

                <hr/>
                <button onClick = {showObjetoDoacao}>Objetos/Alimentos</button>
                { showObj &&

                    <>
                    <label id = "objLabel">Acesse <span>aqui</span> para doar objetos/alimentos</label>
                    {/*evento on Clique*/}
                    </>
                }
                <hr/>
            </div>

            <div className="button-area">
           

                <button onClick={mudarSinais}><Link to= "/">Home</Link></button>
                <button id="avancaButton" onClick={mudarSinais}>Avançar</button>
            </div>
        </section>
        )
    }
    return(

            elementos()

    );
   
}

export default Form1;