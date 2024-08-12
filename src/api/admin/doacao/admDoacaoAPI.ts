import api from "api/api";
import {
  CriarEditarDoacaoDTO,
  ListDoacaoDTO,
} from "types/admDTOTypes";
import { loadTokenAPI } from "utils/mainUtils";

export const criarDoacaoAdmService = async (
  dto: CriarEditarDoacaoDTO,
) => {
  try {
    const response = await api.post(
      "/administrador/doacao/criar",
      dto,
      {
        headers: {
          Authorization: loadTokenAPI(),
        },
      },
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Can't create the donation");
  }
};

export const listAllDoacaoAdmService = async (): Promise<
  ListDoacaoDTO[] | undefined
> => {
  try {
    const response = await api.get("/administrador/doacao", {
      headers: {
        Authorization: loadTokenAPI(),
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Can't list all the donations");
  }
};

export const listDoacaoPendentes = async (): Promise<
  ListDoacaoDTO[] | undefined
> => {
  try {
    const response = await api.get("/administrador/doacao/pendente", {
      headers: {
        Authorization: loadTokenAPI(),
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Can't list pending donations");
  }
};

export const listDoacaoObjeto = async (): Promise<
  ListDoacaoDTO[] | undefined
> => {
  try {
    const response = await api.get("/administrador/doacao/objeto", {
      headers: {
        Authorization: loadTokenAPI(),
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Can't list object donations");
  }
};

export const listDoacaoMembros = async (): Promise<
  ListDoacaoDTO[] | undefined
> => {
  try {
    const response = await api.get("/administrador/doacao/membros", {
      headers: {
        Authorization: loadTokenAPI(),
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Can't list members donations");
  }
};

export const listDoacaoFinalizados = async (): Promise<
  ListDoacaoDTO[] | undefined
> => {
  try {
    const response = await api.get(
      "/administrador/doacao/finalizados",
      {
        headers: {
          Authorization: loadTokenAPI(),
        },
      },
    );
    return response.data;
  } catch (error) {
    throw new Error("Can't list finished donations");
  }
};

export const listDoacaoError = async (): Promise<
  ListDoacaoDTO[] | undefined
> => {
  try {
    const response = await api.get("/administrador/doacao/error", {
      headers: {
        Authorization: loadTokenAPI(),
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Can't list errors donations");
  }
};

export const listDoacaoEntregues = async (): Promise<
  ListDoacaoDTO[] | undefined
> => {
  try {
    const response = await api.get(
      "/administrador/doacao/entregues",
      {
        headers: {
          Authorization: loadTokenAPI(),
        },
      },
    );
    return response.data;
  } catch (error) {
    throw new Error("Can't list object donations");
  }
};

export const listDoacaoAnonimas = async (): Promise<
  ListDoacaoDTO[] | undefined
> => {
  try {
    const response = await api.get("/administrador/doacao/anonimas", {
      headers: {
        Authorization: loadTokenAPI(),
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Can't list anonymous donations");
  }
};

export const editDoacaoAdmService = async (
  idDoacao: string,
  dto: CriarEditarDoacaoDTO,
) => {
  try {
    const response = await api.put(
      `/administrador/doacao/${idDoacao}/editar`,
      dto,
      {
        headers: {
          Authorization: loadTokenAPI(),
        },
      },
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Can't edit the donation");
  }
};
