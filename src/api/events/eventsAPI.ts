import api from "api/api";
import { EventDTO, ListEventsDTO } from "types/dtoTypes";
import { loadTokenAPI } from "utils/mainUtils";

export const listEventsService = async (): Promise<
  ListEventsDTO[] | undefined
> => {
  try {
    const response = await api.get("/eventos", {
      headers: {
        Authorization: loadTokenAPI(),
      },
    });
    return response.data;
  } catch (error) {
    console.error("Can' get the events from API");
  }
};

export const getDetailsEvent = async (id: string): Promise<
  EventDTO | undefined
> => {
  try {
    const response = await api.get(`/eventos/${id}`, {
      headers: {
        Authorization: loadTokenAPI()
      }
    })

    return response.data
  } catch (error) {
    console.error("Can not take infos from API", error)
  }
}
