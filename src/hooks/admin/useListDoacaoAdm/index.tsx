import { useQuery } from "@tanstack/react-query";
import {
    listAllDoacaoAdmService,
    listDoacaoAnonimas,
    listDoacaoEntregues,
    listDoacaoError,
    listDoacaoFinalizados,
    listDoacaoMembros,
    listDoacaoObjeto,
    listDoacaoPendentes,
} from "api/admin/doacao/admDoacaoAPI";
import { ADM_QUERIES } from "hooks/queryConsts";
import { FiltersDonations } from "pages/Administrador/AdmDoacoes";

export const useListDoacaoAdm = (filter: FiltersDonations) => {
    return useQuery({
        queryKey: [`${ADM_QUERIES.LIST_DONATIONS_ADM}_${filter}`],
        queryFn: () => {
            switch (filter) {
                case "Todas":
                    return listAllDoacaoAdmService();

                case "Pendentes":
                    return listDoacaoPendentes();

                case "Anonimas":
                    return listDoacaoAnonimas();

                case "Entregues":
                    return listDoacaoEntregues();

                case "Error":
                    return listDoacaoError();

                case "Finalizadas":
                    return listDoacaoFinalizados();

                case "Membros":
                    return listDoacaoMembros();

                case "Objeto":
                    return listDoacaoObjeto();
            }
        },
    });
};
