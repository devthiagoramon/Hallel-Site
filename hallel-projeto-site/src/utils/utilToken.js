export function getToken() {
    const token = localStorage.getItem("tokenHallel");
    console.log("Token:", token);
    return token;
  }
  