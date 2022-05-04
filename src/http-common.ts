import axios from "axios";

const api_url = process.env.REACT_APP_API_URL;
export default axios.create({
  baseURL: api_url,
  headers: {
    "Content-type": "application/json",
  },
});
