import { useQuery } from "@tanstack/react-query";
import { listMinisterioAdmService } from "api/admin/ministerios/admMinisterioAPI";
import { ADM_QUERIES } from "hooks/queryConsts";

export default () => {
    return useQuery({
        queryKey: [ADM_QUERIES.LIST_MINISTERIOS_ADM],
        queryFn: () => listMinisterioAdmService(),
    });
};
