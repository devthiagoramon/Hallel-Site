import "./Pix.css";
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';

function Pix() {
    return(

        <div className="master">
            <div className="aa">
                <div className="Pagamento-text">Pagamento</div>
                 <div className="Container">
                     <div className="quadrado-pix"style={{ textAlign: "center"}}></div>
                     <button id="copyButton" style={{fontSize:20, color: "#00471F", marginTop:15, fontWeight: "bold", textAlign: "center"}}>Copie o código do seu QR code aqui</button>
                  
                 </div>
            <h1><ContentCopyOutlinedIcon style={{color: "#00471F", marginLeft:565, marginTop: 365}}/></h1>

            <div className="containaerInfo">
                <div className="quadradoInfoPagamento">
                <div><InfoRoundedIcon style={{color: "#00471F", marginLeft: 5, marginTop:5}}/></div>
                    <h4 style={{marginLeft:40,marginTop:-25 ,color: "#00471F", width:1000}}>   Informações sobre a conta de pagagamento</h4>
                </div>
                
            </div>
            
        <div className="QdInfo" style={{marginLeft:40}}>
            <div style={{ display: "flex", flexDirection: "column" }}><p><strong>Nome:</strong>Gisele Saraiva Vieira</p>
            <p><strong>Chave Pix:</strong>065.067.342-56</p></div>
            <div style={{ display: "flex", flexDirection: "column" }}>
            <p ><strong>Instituição:</strong>BANCO INTER</p>
            <p><strong>Tipo de chave:</strong>CPF</p></div>
            
        </div>
            </div>
        </div>

    );
}
export default Pix;