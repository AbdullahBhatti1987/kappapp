// utils/api.js
import axios from "axios";

const API = axios.create({
  baseURL: "http://192.168.100.72:5000/api",
  timeout: 10000,
   headers: { "Content-Type": "application/json" },
 

});

export default API;
