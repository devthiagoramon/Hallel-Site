import {
  Document,
  Image,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";
import React from "react";
import logoHallel from "./../../../../images/LogoHallel.png";
import dayjs from "dayjs";
import GuiaAdm from "../../../../components/GuiaAdm";

/*
- Para sabem como alterar e como funciona o pdf pesquise
no site https://react-pdf.org/ que mostrará todas as informações
sobre como funciona para gerar um pdf
*/

const styles = StyleSheet.create({
  page: {
    marginLeft: "1.5cm",
    marginTop: "1.5cm",
    marginRight: "1cm",
    marginBottom: "1cm",
  },
  header: {
    display: "flex",
    flexWrap: "nowrap",
    flexDirection: "row",
    alignItems: "flex-end",
  },
  headerText: {
    fontSize: "24px",
    fontWeight: 700,
    marginLeft: "10px",
  },
  logoImage: {
    width: 75,
    height: 50,
    break: "none",
  },
  body: {
    marginTop: "20px",
  },
  table: {
    display: "table",
    width: "90%",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#bfbfbf",
    marginTop: "20px",
  },
  tableRow: {
    flexDirection: "row",
  },
  tableCell: {
    flex: 1,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#bfbfbf",
    padding: 4,
  },
  textHeadTable: {
    fontSize: "16px",
    fontWeight: 700,
  },
  textBodyTable: {
    fontSize: "12px",
    fontWeight: 400,
  },
  contInfo: {
    marginTop: "5px",
    width: "90%",
    marginBottom: "5px",
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "nowrap",
    flexDirection: "row",
  },
  textInfo: {
    marginTop: "5px",
    marginBottom: "5px",
    fontSize: "14px",
    fontWeight: 600,
  },
  textInfoStrong: {
    marginTop: "5px",
    marginBottom: "5px",
    fontSize: "18px",
    fontWeight: "700",
  },
  contInfoLeft: {
    textAlign: "left",
  },
  contInfoRight: {
    textAlign: "right",
  },
});

const PDFSaida = ({ mesSelecionado, saidas }) => {
  return (
    <GuiaAdm title={"Pdf saída"}>
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Image style={styles.logoImage} src={logoHallel} />
          <Text style={styles.headerText}>Comunidade Católica Hallel</Text>
        </View>
        <View style={styles.body}>
          <View style={styles.contInfo}>
            <View style={styles.contInfoLeft}>
              <Text style={styles.textInfoStrong}>
                Todas as saidas (Mês:{" "}
                {dayjs(mesSelecionado).format("MM/YYYY")})
              </Text>
            </View>
            <View style={styles.contInfoRight}>
              <Text style={styles.textInfo}>
                Emitido em: {dayjs().format("DD/MM/YYYY")}
              </Text>
            </View>
          </View>

          <View style={styles.table}>
            <View style={styles.tableRow}>
              <View style={styles.tableCell}>
                <Text style={styles.textHeadTable}>Código</Text>
              </View>
              <View style={styles.tableCell}>
                <Text style={styles.textHeadTable}>Descrição</Text>
              </View>
              <View style={styles.tableCell}>
                <Text style={styles.textHeadTable}>Data</Text>
              </View>
              <View style={styles.tableCell}>
                <Text style={styles.textHeadTable}>Valor</Text>
              </View>
              <View style={styles.tableCell}>
                <Text style={styles.textHeadTable}>Pago com</Text>
              </View>
            </View>
            {saidas.lenght > 0 && (
              <>
                {saidas?.map((saida) => {
                  return (
                    <View style={styles.tableRow}>
                      <View style={styles.tableCell}>
                        <Text style={styles.textBodyTable}>
                          {saida.codigo.numeroCodigo} |{" "}
                          {saida.codigo.nomeCodigo}
                        </Text>
                      </View>
                      <View style={styles.tableCell}>
                        <Text style={styles.textBodyTable}>
                          {saida.descricao != null && saida.descricao}
                        </Text>
                      </View>
                      <View style={styles.tableCell}>
                        <Text style={styles.textBodyTable}>
                          {dayjs(saida.data).format("DD/MM/YYYY")}
                        </Text>
                      </View>
                      <View style={styles.tableCell}>
                        <Text style={styles.textBodyTable}>
                          {saida.valor.toLocaleString("pt-BR", {
                            style: "currency",
                            currency: "BRL",
                          })}
                        </Text>
                      </View>
                      <View style={styles.tableCell}>
                        <Text style={styles.textBodyTable}>
                          {saida.metodoPagamento === "CARTAO_CREDITO"
                            ? "Cartão de Crédito"
                            : ""}
                          {saida.metodoPagamento === "CARTAO_DEBITO"
                            ? "Cartão de Débito"
                            : ""}
                          {saida.metodoPagamento === "CARTAO_MAQUINA"
                            ? "Cartão de Crédito"
                            : ""}
                          {saida.metodoPagamento === "PIX" ? "PIX" : ""}
                        </Text>
                      </View>
                    </View>
                  );
                })}
              </>
            )}
          </View>
        </View>
      </Page>
    </Document>
    </GuiaAdm>
  );
};

export default PDFSaida;
