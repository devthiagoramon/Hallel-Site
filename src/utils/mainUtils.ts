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

export const truncateText = (text: string, length: number) => {
  let provText = text;
  if (text.length > length) {
    provText = text.slice(0, length - 3) + "...";
  }
  return provText;
};
