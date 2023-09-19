import {
  Document,
  Image,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";
import React from "react";
import logoHallel from "./../../../images/LogoHallel.png";
import dayjs from "dayjs";

const style = StyleSheet.create({
  page: {
    paddingLeft: "2cm",
    paddingTop: "2cm",
    paddingRight: "3cm",
    paddingBottom: "3cm",
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
    marginTop: "1cm",
  },
  textBody: {
    fontSize: "12px",
  },
  footer:{
    marginTop: "1cm"
  },
  textFooter: {
    fontSize: "10px",
    marginBottom: "1cm"
  },
  limite: {
    marginTop: "1cm"
  }
});

const PDFAssinaturaDeMenor = ({nomeEvento}) => {
  return (
    <Document>
      <Page size="A4" style={style.page}>
        <View style={style.header}>
          <Image style={style.logoImage} src={logoHallel} />
          <Text style={style.headerText}>Comunidade Católica Hallel</Text>
        </View>
        <View style={style.body}>
          <Text style={style.textBody}>
            Eu ________________________________, como responsável pelo
            ________________________________, aceito que este possa participar
            do evento: {nomeEvento}
          </Text>
        </View>
        <View style={style.footer}>
            <Text style={style.textFooter}>*Este documento deve ser entregue na hora que o evento ocorrer, confirmando que o menor de idade tem permissão de participar.</Text>
            <Text style={style.textBody}>Assinatura: ________________________</Text>
            <Text style={style.textBody}>Data emitida: {dayjs().format("DD/MM/YYYY")}</Text>
        </View>
        <View style={style.limite}>
            <Text>-------------------------------------------------------------------------------</Text>
        </View>
      </Page>
    </Document>
  );
};

export default PDFAssinaturaDeMenor;
