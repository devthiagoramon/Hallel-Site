import axios from "axios";

axios.defaults.baseURL = process.env.REACT_API_URL;

export default axios;
