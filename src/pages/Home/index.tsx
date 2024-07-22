import ButtonH from "../../components/ButtonH"
import TextFieldH from "../../components/TextFieldH"

const Home = () => {
  return (
    <div style={{ display: "flex", minHeight: "100vh", minWidth: "100vw", justifyContent: "center", alignItems: "center", flexDirection: "column", flexWrap: "wrap", rowGap: 24 }}>
      <TextFieldH label="Vasco da gama"/>
      <ButtonH mode="success" containerProps={{ style: { width: "150px" } }} >Enviar</ButtonH>
    </div>
  )
}

export default Home