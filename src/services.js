import axios from "axios";

const baseURL = "http://localhost:3001";

const base = axios.create({ baseURL });

const services = {
  getInfos() {
    return base.get(`/sites`).then((res) => res.data);
  },

  getProjects() {
    return base.get(`/projects`).then((res) => res.data);
  },
};

export default services;
