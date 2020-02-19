import axios from "axios";
let baseURL;
const service = axios.create({ withCredentials: true, baseURL });

const MY_SERVICE = {
  test: async () => {
    return await service.get("/");
  },
  getCharacters: async () => {
    return await axios.get(
      `https://rickandmortyapi.com/api/character/${[...Array(394).keys()]
        .sort(() => Math.random() * 2 - 1)
        .slice(0, 30)
        .join(",")}`
    );
  },
  getEpisodes: async () => {
    //random 30 elements
    return await axios.get(
      `https://rickandmortyapi.com/api/episode/${[...Array(32).keys()]
        .sort(() => Math.random() * 2 - 1)
        .slice(0, 30)
        .join(",")}`
    );
  },
  getEpisode: async id => {
    return await axios.get("https://rickandmortyapi.com/api/episode/" + id);
  },
  getCharDetail: async id => {
    return await axios.get("https://rickandmortyapi.com/api/character/" + id);
  },
  getMultipleChars: async ids => {
    return await axios.get(
      "https://rickandmortyapi.com/api/character/" + ids.join(",")
    );
  }
};

export default MY_SERVICE;
