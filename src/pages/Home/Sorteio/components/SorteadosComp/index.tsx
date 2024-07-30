import { Tooltip } from "@mui/material";
import ProfilesPhoto from "components/ProfilesPhoto";
import { ListSorteadosDTO } from "types/dtoTypes";
import { truncateText } from "utils/mainUtils";
import { SorteadoCompContainer } from "./style";

interface SorteadosCompProps {
    sorteado: ListSorteadosDTO;
}

const SorteadosComp = ({ sorteado }: SorteadosCompProps) => {
    return (
        <SorteadoCompContainer>
            <ProfilesPhoto
                size={75}
                src={sorteado.image}
                userName={sorteado.nome}
                photoStyle={{
                    fontSize: 24,
                    fontWeight: "bold",
                }}
            />
            <div className="infos">
                <Tooltip title={sorteado.nome}>
                    <label className="name_user">
                        {truncateText(sorteado.nome, 17)}
                    </label>
                </Tooltip>
                <Tooltip title={sorteado.nomePremio}>
                    <span>Prêmio: {truncateText(sorteado.nomePremio, 26)}</span>
                </Tooltip>
            </div>
        </SorteadoCompContainer>
    );
};

export default SorteadosComp;
