import pdfMake from "pdfmake/build/pdfmake"
import pdfFonts from "pdfmake/build/vfs_fonts"


function gastosPDF(){
    pdfMake.vfs = pdfFonts.pdfMake.vfs;

    const reportTitle = [
        {
            text: "Gastos",
            fontSize: 15,
            bold: true,
            margin: [15, 20, 0, 45]
        }
    ];
    const details = [];
    const rodape = [];

    const docDefinitions={
        pageSize: "A4",
        pageMargins: [15,50,15,40],
        header: [reportTitle],
        content: [details],
        fotter: [rodape]
    }

    pdfMake.createPdf(docDefinitions).download();
}

export default gastosPDF;