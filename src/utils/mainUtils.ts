export const saveTokenAPI = (token: string) => {
  localStorage.setItem("apiToken", token);
};

export const loadTokenAPI = () => {
  const token = localStorage.getItem("apiToken");
  return token;
};

export const isTokenExist = (): boolean => {
  const token = localStorage.getItem("apiToken");
  return token !== null ? true : false;
};
