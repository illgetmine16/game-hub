import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "878fbf5d5aa542f6a450d69d1ad32381",
  },
});
