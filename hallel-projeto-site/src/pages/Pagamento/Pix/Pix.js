import "./Pix.css";
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';

function Pix() {
    return(

        <div className="master">
            <div className="aa">
                <div className="Pagamento-text">Pagamento</div>
                 <div className="Container">
                     <div className="quadrado-pix"style={{ textAlign: "center"}}></div>
                     <button id="copyButton" style={{fontSize:20, color: "#00471F", marginTop:15, fontWeight: "bold", textAlign: "center"}}>Copie o código do seu QR code aqui</button>
                  
                 </div>
            <h1><ContentCopyOutlinedIcon style={{color: "#00471F", marginLeft:565, marginTop: 375}}/></h1>

            <div className="containaerInfo">
                <div className="quadradoInfoPagamento">
                    <h4 style={{marginLeft:25 ,color: "#00471F"}}>   Informações sobre a conta de pagagamento</h4>
                </div>
                
            </div>
<div className="QdInfo" style={{marginLeft:40}}></div>
            </div>
        </div>

    );
}
export default Pix;