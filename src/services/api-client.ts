import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "45c7b83cb99844d384044f0e6296bbfb",
  },
});
