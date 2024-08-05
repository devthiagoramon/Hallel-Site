import { useQuery } from "@tanstack/react-query"
import { getDetailsEvent } from "api/events/eventsAPI"
import { QUERIES } from "hooks/queryConsts"

export const useShowEvent = (id: string) => {
    return useQuery({
        queryKey: [QUERIES.SHOW_EVENT],
        queryFn: async () => {
            return await getDetailsEvent(id)
        }
    })
}