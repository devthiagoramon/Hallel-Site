import React, { useState } from 'react';
import "./Cartao.css";
import { height } from '@mui/system';
import { OutlinedButtonHallel } from "../../../components/BtnHallel";

function Cartao() {
    const [selectedOption, setSelectedOption] = useState("");
    const [autoRenewal, setAutoRenewal] = useState(false);
    const [cardNumber, setCardNumber] = useState("");
    const [expirationMonth, setExpirationMonth] = useState("");
    const [expirationYear, setExpirationYear] = useState("");
    const [securityCode, setSecurityCode] = useState("");

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleAutoRenewalChange = () => {
        setAutoRenewal(!autoRenewal);
    };

    const handleCardNumberChange = (event) => {
        // Adicione sua lógica de máscara aqui se necessário
        setCardNumber(event.target.value);
    };

    const handleExpirationMonthChange = (event) => {
        setExpirationMonth(event.target.value);
    };

    const handleExpirationYearChange = (event) => {
        setExpirationYear(event.target.value);
    };

    const handleSecurityCodeChange = (event) => {
        // Adicione sua lógica de validação aqui se necessário
        setSecurityCode(event.target.value);
    };

    // Gerar opções para os meses (1 a 12)
    const monthOptions = [];
    for (let i = 1; i <= 12; i++) {
        monthOptions.push(<option key={i} value={i}>{i}</option>);
    }

    // Gerar opções para os anos (atual até 10 anos no futuro)
    const currentYear = new Date().getFullYear();
    const yearOptions = [];
    for (let i = currentYear; i <= currentYear + 10; i++) {
        yearOptions.push(<option key={i} value={i}>{i}</option>);
    }

    return(
        <div className="master">
            <div className="aa">
                <div className="Pagamento-text1">Pagamento</div>
                <div style={{marginTop:25}} className="container-informacoes">
                
                    <div  className="fomaPag">
                        <div style={{marginTop:20,height:40}}></div>
                        <a style={{color:"#00471F"}}>Selecione a forma de pagamento:</a>

                        <select  name="cards" onChange={handleOptionChange}>
                            <option value="">Selecione uma opção</option>
                            <option value="Cartao de crédito">Cartão de crédito</option>
                            <option value="Cartao de debito">Cartão de débito</option>
                        </select> 
                    </div>
                    <div className="autoRenewal">
                        <a style={{color:"#00471F"}}>Ativar renovação do pagamento automática:</a>
                        <label className="switch">
                            <input  style={{width:15,height:15}} type="checkbox" checked={autoRenewal} onChange={handleAutoRenewalChange} />
                            <span className="slider round"></span>
                        </label>
                    </div>
                    <div className="cardNumber">
                        <a style={{color:"#00471F"}}>Número do cartão:</a>
                        <input type="text" value={cardNumber} onChange={handleCardNumberChange} placeholder="1111 2222 3333 4444" />
                    </div>
                    <div className="expirationDate">
                        <a style={{color:"#00471F"}}>Data de expiração:</a>
                        <div style={{marginTop:10,width:0,height:0,backgroundColor:"pink"}} ></div>
                        <select style={{marginLeft:"25%", width:100}} value={expirationMonth} onChange={handleExpirationMonthChange}>
                            <option value="">Mês</option>
                            {monthOptions}
                        </select>
                        <select style={{width:100, marginLeft:30}} value={expirationYear} onChange={handleExpirationYearChange}>
                            <option value="">Ano</option>
                            {yearOptions}
                        </select>
                    </div>
                    <div className='securityCode'>
                        <a style={{color:"#00471F"}}>Código de segurança:</a>
                        <div style={{height:5}}/>
                        <input style={{marginLeft:"25%",width:300}} type="text" value={securityCode} onChange={handleSecurityCodeChange} placeholder="CVV" />
                    </div>
                    <div className="buttom">
                        <OutlinedButtonHallel
                         style={{
                            width: "90%",
                            height: "90%",
                            padding: "0.1rem",
                             fontSize: "24px",
                             marginTop: 70,
                             marginLeft:"70%"
                            }} > Continuar
                         </OutlinedButtonHallel>
                     </div>
                </div>
            </div>
        </div>
    );
}

export default Cartao;