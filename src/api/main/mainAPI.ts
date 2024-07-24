import api from "api/api";
import { SignInDTO, SignUpDTO } from "types/dtoTypes";
import { loadTokenAPI } from "utils/mainUtils";

export const signInService = async (dto: SignInDTO) => {
  try {
    const response = await api.post("/cadastrar", dto);
    return response.data;
  } catch (error: any) {
    throw new Error(error.description);
  }
};

export const signUpService = async (dto: SignUpDTO) => {
  try {
    const response = await api.post("/login", dto);
    return response.data;
  } catch (error: any) {
    console.log(error);
    throw new Error(error.description);
  }
};

export const isTokenExpiredService = async () => {
  try {
    const response = await api.get("/home/isTokenExpired", {
      headers: {
        Authorization: loadTokenAPI(),
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    return false;
  }
};
