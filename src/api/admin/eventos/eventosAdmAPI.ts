import api from "api/api";
import { ListEventsAdmDTO } from "types/admDTOTypes";

export const listEventsAscService = async (): Promise<
  ListEventsAdmDTO[] | undefined
> => {
  try {
    const response = await api.get("/administrador/eventos/asc");
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Can't get the events from API");
  }
};
