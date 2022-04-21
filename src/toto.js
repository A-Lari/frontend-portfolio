import axios from "axios";

const baseURL = "http://localhost:3001";

const base = axios.create({ baseURL });

const services = {
  getInfos() {
    return base.get(`/infos`).then((res) => res.data);
  },
};

export default services;
