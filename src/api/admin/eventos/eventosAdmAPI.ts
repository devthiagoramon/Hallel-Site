import api from "api/api";
import { AddEventAdmDTO, ListEventsAdmDTO } from "types/admDTOTypes";
import { loadTokenAPI } from "utils/mainUtils";

export const listEventsAscService = async (): Promise<
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

export const adicionarEventService = async (dto: AddEventAdmDTO) => {
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
