import { useQuery } from "@tanstack/react-query";
import { listEventsAscService } from "api/admin/eventos/eventosAdmAPI";
import { ADM_QUERIES } from "hooks/queryConsts";

export const useListEventsAdm = () => {
    return useQuery({
        queryKey: [ADM_QUERIES.LIST_EVENTS_ADM],
        queryFn: () => listEventsAscService(),
    });
};
