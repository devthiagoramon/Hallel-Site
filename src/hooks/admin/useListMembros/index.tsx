import { useQuery } from "@tanstack/react-query";
import { listMembrosAdmService } from "api/admin/membros/admMembrosAPI";
import { ADM_QUERIES } from "hooks/queryConsts";

export const useListMembros = (page: number, size: number) => {
    return useQuery({
        queryKey: [ADM_QUERIES.LIST_MEMBROS_ADM],
        queryFn: () => listMembrosAdmService(page, size),
    });
};
