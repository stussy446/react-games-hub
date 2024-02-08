import axios from "axios";

export default axios.create({
  params: {
    key: "e2d0f75aa751426da906563094015720",
  },
});

axios.defaults.baseURL = "https://api.rawg.io/api";
