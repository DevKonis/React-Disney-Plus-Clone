import axios from "axios";

// const config = {
//   headers: {
//     "Access-Control-Allow-Origin": "*",
//     "Content-Type": "text/plain",
//   },
// };

const instance = axios.create({
  baseURL: "http://api.themoviedb.org/3",
  // https: config,
  params: {
    api_key: "923c2f2c832ee1662f24164cf921918c", 
    language: "ko-KR", 
  },
});

export default instance;
