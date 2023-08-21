import axios from "axios";

const instance = axios.create({
  baseURL: "http://api.themoviesdb.org/3",
  params: {
    api_key: "923c2f2c832ee1662f24164cf921918c",
    language: "ko-KR"
  }
})

export default instance;