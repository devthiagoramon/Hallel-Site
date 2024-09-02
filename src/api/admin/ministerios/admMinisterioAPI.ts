import api from "api/api";
import {
  ListMinisterioDTO,
  MinisterioAdmDTO,
} from "types/admDTOTypes";
import { loadTokenAPI } from "utils/mainUtils";

export const listMinisterioAdmService = async (): Promise<
  ListMinisterioDTO[] | undefined
> => {
  try {
    const response = await api.get("/administrador/v1/ministerio", {
      headers: { Authorization: loadTokenAPI() },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Can't list the ministerios");
  }
};

export const addMinisterioAdmService = async (
  dto: MinisterioAdmDTO,
) => {
  try {
    const response = await api.post(
      "/administrador/v1/ministerio",
      dto,
      {
        headers: {
          Authorization: loadTokenAPI(),
        },
      },
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Can't add a ministerio");
  }
};
