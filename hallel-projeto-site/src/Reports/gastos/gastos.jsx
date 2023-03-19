import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

function gastosPDF(gastos) {
  pdfMake.vfs = pdfFonts.pdfMake.vfs;

  const reportTitle = [
    {
      text: "Gastos",
      fontSize: 18,
      bold: true,
      margin: [15, 20, 0, 45],
    },
  ];

  const dados = gastos.map((gasto) => {
    return [
      { text: gasto.descricaoGasto, fontSize: 9, margin: [0,2,0,2]  },
      { text: gasto.finalidadeGasto, fontSize: 9, margin: [0,2,0,2] },
      { text: gasto.valor, fontSize: 9, margin: [0,2,0,2] },
      { text: gasto.dataGasto, fontSize: 9, margin: [0,2,0,2] },
      { text: gasto.usuarioGasto, fontSize: 9, margin: [0,2,0,2] },
    ];
  });

  const details = [
    {
      table: {
        headerRow: 1,
        widths: ["*", "*", "*", "*", "*"],
        body: [
          [
            { text: "Descrição do gastos", style: "tableHeader", fontSize: 10 },
            { text: "Para", style: "tableHeader", fontSize: 10 },
            { text: "Valor", style: "tableHeader", fontSize: 10 },
            { text: "Data do gasto", style: "tableHeader", fontSize: 10 },
            { text: "Feito por", style: "tableHeader", fontSize: 10 },
          ],
          ...dados,
        ],
      },
      layout: "headerLineOnly",
    },
    {
      
    }
  ];
  function Rodape(currentPage, pageCount) {
    return [
      {
        text: currentPage + "/" + pageCount,
        alignment: "right",
        fontSize: 9,
        margin: [0, 10, 20, 0],
      },
    ];
  }

  const docDefinitions = {
    pageSize: "A4",
    pageMargins: [15, 50, 15, 40],
    header: [reportTitle],
    content: [details],
    footer: Rodape,
  };

  pdfMake.createPdf(docDefinitions).download();
}

export default gastosPDF;
