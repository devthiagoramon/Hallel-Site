import React, { useState } from 'react';
import "./Cartao.css";
import { height } from '@mui/system';


function Cartao() {
    const [selectedOption, setSelectedOption] = useState("");

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return(
        <div className="master">
            <div className="aa">
                <div className="Pagamento-text1">Pagamento</div>
                <div className="container-informacoes">
                    <div className="fomaPag">
                        <a>Selecione a forma de pagamento:</a>
                        <select name="cards" onChange={handleOptionChange}>
                            <option value="">Selecione uma opção</option>
                            <option value="Cartao de crédito">Cartao de crédito</option>
                            <option value="Cartao de debito">Cartao de debito</option>
                        </select> 
                    </div>
                    {selectedOption === "Cartao de crédito" && (
                        <div className="creditCardButtons" style={{marginTop:10}}>
                        <button>
                <div className="logo">
                    <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png"}  className='fundadora-img' style={{width:70, height:20, marginLeft:-10}}/>
                </div>
                ‎ 
            </button>
                         <button><div className="logo">
                    <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/1200px-Mastercard_2019_logo.svg.png"}  className='fundadora-img' style={{width:50, height:25, marginLeft:-10, marginRight:20}}/>
                </div>‎ </button>
                <button>
                <div className="logo">
                    <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Elo_card_association_logo_-_black_text.svg/800px-Elo_card_association_logo_-_black_text.svg.png"}  className='fundadora-img' style={{width:75, height:25, marginLeft:-10}}/>
                </div>
                ‎ 
            </button>
            
                        </div>
                    )}
                    {selectedOption === "Cartao de debito" && (
                        <div className="debitCardButtons" style={{marginTop:0}}>
                             <button>
                <div className="logo">
                    <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png"}  className='fundadora-img' style={{width:70, height:20, marginLeft:-10}}/>
                </div>
                ‎ 
            </button>
                         <button><div className="logo">
                    <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/1200px-Mastercard_2019_logo.svg.png"}  className='fundadora-img' style={{width:50, height:25, marginLeft:-10, marginRight:20}}/>
                </div>‎ </button>
                <button>
                <div className="logo">
                    <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Elo_card_association_logo_-_black_text.svg/800px-Elo_card_association_logo_-_black_text.svg.png"}  className='fundadora-img' style={{width:75, height:25, marginLeft:-10}}/>
                </div>
                ‎ 
            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Cartao;
