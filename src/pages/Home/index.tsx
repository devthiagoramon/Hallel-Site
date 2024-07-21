import HeaderHome from "../../components/Headers/HeaderHome"

const Home = () => {
    return (
        <div>
            <HeaderHome
                titles={[
                    "Início",
                    "Eventos",
                    "Ministérios",
                    "Doações",
                    "Igreja",
                    "Cursos",
                    "Loja",
                ]}
            />
        </div>
    )
}

export default Home