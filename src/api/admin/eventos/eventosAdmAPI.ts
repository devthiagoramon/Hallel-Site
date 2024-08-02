import api from "api/api";
import {
  AddEditEventAdmDTO,
  ListEventsAdmDTO,
} from "types/admDTOTypes";
import { loadTokenAPI } from "utils/mainUtils";

export const listEventsAscAdmService = async (): Promise<
  ListEventsAdmDTO[] | undefined
> => {
  try {
    const response = await api.get("/administrador/eventos/asc", {
      headers: {
        Authorization: loadTokenAPI(),
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Can't get the events from API");
  }
};

export const adicionarEventAdmService = async (
  dto: AddEditEventAdmDTO,
) => {
  try {
    const response = await api.post(
      "/administrador/eventos/create",
      dto,
      {
        headers: { Authorization: loadTokenAPI() },
      },
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Can't add the event into API");
  }
};
export const editarEventAdmService = async (
  idEvento: string,
  dto: AddEditEventAdmDTO,
) => {
  try {
    const response = await api.patch(
      `/administrador/eventos/${idEvento}/edit`,
      dto,
      {
        headers: { Authorization: loadTokenAPI() },
      },
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Can't add the event into API");
  }
};

export const listEventByIdAdmService = async (
  idEvento: string,
): Promise<ListEventsAdmDTO | undefined> => {
  try {
    const response = await api.get(
      `/administrador/eventos/${idEvento}/list`,
      {
        headers: {
          Authorization: loadTokenAPI(),
        },
      },
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Can't list the event by id from API");
  }
};
