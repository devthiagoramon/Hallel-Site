import { CalendarDots } from "@phosphor-icons/react";
import TitleH from "components/TitleH";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";
import { ListSorteadosDTO } from "types/dtoTypes";
import BannerSorteio from "../../../assets/Banner Sorteio - Hallel.png";
import SemImageUltimosGanhadores from "../../../assets/Sem imagem ganhadores sorteio - Hallel.png";
import SorteadosComp from "./components/SorteadosComp";
import {
    GanhadoresMesSorteioContainer,
    InfosSorteioContainer,
    LeftInfosSorteioContainer,
    RigthInfosSorteioContainer,
    SorteioContainer,
} from "./style";

const Sorteio = () => {
    const [actualMonth, setactualMonth] = useState<Dayjs>(dayjs());

    const dummySorteados: ListSorteadosDTO[] = [
        {
            image: "",
            nome: "Thiago Ramonfsafasfasfsa",
            nomePremio: "Biblia",
        },
        {
            image: "",
            nome: "Antonio Bandeiras",
            nomePremio: "Santinho",
        },
        {
            image: "",
            nome: "Felipe Gabriel",
            nomePremio: "Terço",
        },
    ];

    return (
        <SorteioContainer>
            <InfosSorteioContainer>
                <LeftInfosSorteioContainer>
                    <TitleH color="black" size="medium">
                        Sorteio da comunidade
                    </TitleH>
                    <label className="last_winners">Últimos ganhadores</label>
                    <div className="carrosel">
                        <img src={SemImageUltimosGanhadores} alt="sem imagem" />
                    </div>
                </LeftInfosSorteioContainer>
                <RigthInfosSorteioContainer>
                    <label className="winners">Ganhadores</label>
                    <span>
                        Mês: {actualMonth.format("MM/YYYY")}{" "}
                        <CalendarDots size={30} />
                    </span>
                    <GanhadoresMesSorteioContainer>
                        {dummySorteados.map((sorteado) => {
                            return <SorteadosComp sorteado={sorteado} />;
                        })}
                    </GanhadoresMesSorteioContainer>
                </RigthInfosSorteioContainer>
            </InfosSorteioContainer>
            <img
                className="banner"
                src={BannerSorteio}
                alt="banner-sorteio-hallel"
            />
        </SorteioContainer>
    );
};

export default Sorteio;
