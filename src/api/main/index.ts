import axios from "axios";
import { SignInDTO, SignUpDTO } from "types/dtoTypes";

export const signInService = async (dto: SignInDTO) => {
  const response = await axios.post("/cadastrar", dto);
  return response.data;
};

export const signUpService = async (dto: SignUpDTO) => {
  const response = await axios.post("/login", dto);
  return response.data;
};
