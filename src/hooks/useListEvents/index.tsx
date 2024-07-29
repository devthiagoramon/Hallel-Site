import { useQuery } from "@tanstack/react-query";
import { listEventsService } from "api/events/eventsAPI";
import { QUERIES } from "hooks/queryConsts";

export const useListEvents = () => {
    return useQuery({
        queryKey: [QUERIES.LIST_EVENTS],
        queryFn: async () => {
            return await listEventsService();
        },
    });
};
