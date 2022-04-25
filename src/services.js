import axios from "axios";

const baseURL = "http://localhost:3001";

const base = axios.create({ baseURL });

const services = {

  login(body) {
    // email, password
    return base.post("/auth/login", body).then((res) => res.data);
  },

  signup(body) {
    // email, password, confirmPassword
    return base.post("/auth/signup", body);
  },
  
  getInfos() {
    return base.get(`/sites`).then((res) => res.data);
  },

  getProjects() {
    return base.get(`/projects`).then((res) => res.data);
  },

  getProject(id) {
    return base.get(`/projects/${id}`).then((res) => res.data);
  },

  addLikes(id) {
    return base.post(`/projects/${id}/likes`, {}).then((res) => res.data);
  },

  createProject(body) {
    const token = localStorage.getItem("jwt");
    return base
      .post("/projects", body, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => res.data);
  },

};

export default services;
