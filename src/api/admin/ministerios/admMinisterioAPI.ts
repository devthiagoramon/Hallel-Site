import api from "api/api";
import {
  ListMembroMinisterioDTO,
  ListMinisterioDTO,
  ListMinisterioRawDTO,
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

export const editarMinisterioAdmService = async (
  idMinisterio: string,
  dto: MinisterioAdmDTO,
) => {
  try {
    const response = await api.put(
      `/administrador/v1/ministerio/${idMinisterio}/edit`,
      dto,
      {
        headers: {
          Authorization: loadTokenAPI(),
        },
      },
    );
    return response.data;
  } catch (error) {
    throw new Error("Can't edit a ministerio");
  }
};

export const listMinisterioByIdAdmService = async (
  idMinisterio: string,
): Promise<ListMinisterioRawDTO> => {
  try {
    const response = await api.get(
      `/administrador/v1/ministerio/${idMinisterio}`,
      {
        headers: {
          Authorization: loadTokenAPI(),
        },
      },
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Can't list ministerio by id");
  }
};

export const listMembrosMinisteriosAdmService = async (
  idMinisterio: string,
): Promise<ListMembroMinisterioDTO[]> => {
  try {
    const response = await api.get(
      `/membros/ministerio/coordenador/membroMinisterio/list/${idMinisterio}`,
      {
        headers: {
          Authorization: loadTokenAPI(),
        },
      },
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Can't list membros ministerios");
  }
};

export const deleteMinisterioAdmService = async (
  idMinisterio: string,
) => {
  try {
    const response = await api.delete(
      `/administrador/v1/ministerio/${idMinisterio}`,
      {
        headers: {
          Authorization: loadTokenAPI(),
        },
      },
    );
    return response.data;
  } catch (error) {
    throw new Error("Can't delete a ministério");
  }
};
