import api from "api/api";
import { SignInDTO, SignUpDTO } from "types/dtoTypes";

export const signInService = async (dto: SignInDTO) => {
  try {
    const response = await api.post("/cadastrar", dto);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const signUpService = async (dto: SignUpDTO) => {
  try {
    const response = await api.post("/login", dto);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
