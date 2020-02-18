import axios from "axios";
let baseURL;
const service = axios.create({ withCredentials: true, baseURL });

const MY_SERVICE = {
  test: async () => {
    return await service.get("/");
  },
  getCharacters: async () => {
    return await axios.get("https://rickandmortyapi.com/api/character/");
  },
  getEpisodes: async () => {
    return await axios.get("https://rickandmortyapi.com/api/episode/");
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
