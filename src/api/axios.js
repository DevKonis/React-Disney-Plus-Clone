import axios from "axios";

// const config = {
//   headers: {
//     "Access-Control-Allow-Origin": "*",
//     "Content-Type": "text/plain",
//   },
// };

const { api_key } = process.env;

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  // https: config,
  params: {
    api_key: `${api_key}`,
    language: "ko-KR", 
  },
});

export default instance;
