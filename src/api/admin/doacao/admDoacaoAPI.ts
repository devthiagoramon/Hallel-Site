import api from "api/api";
import { CriarDoacaoDTO } from "types/admDTOTypes";
import { loadTokenAPI } from "utils/mainUtils";

export const criarDoacaoAdmService = async (dto: CriarDoacaoDTO) => {
  try {
    const response = await api.post(
      "/administrador/doacao/criar",
      dto,
      {
        headers: {
          Authorization: loadTokenAPI(),
        },
      },
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Can't create the donation");
  }
};
