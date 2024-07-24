export const saveTokenAPI = (token: string) => {
  localStorage.setItem("apiToken", "Bearer " + token);
};

export const loadTokenAPI = () => {
  const token = localStorage.getItem("apiToken");
  return token;
};

export const isTokenExist = (): boolean => {
  const token = localStorage.getItem("apiToken");
  return token !== null ? true : false;
};
