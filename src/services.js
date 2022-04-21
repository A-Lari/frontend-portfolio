import axios from "axios";

const baseURL = "http://localhost:3001";

const base = axios.create({ baseURL });

const services = {
  getInfos() {
    return base.get(`/sites/6261254d4c2647fc4c5f6b35`).then((res) => res.data);
  },

  getProjects() {
    return base.get(`/projects`).then((res) => res.data);
  },
};

export default services;
