import { useEffect, useState } from "react";
import "./Home.css";
import services from "../../services";

// import axios from "axios";
// const baseURL = "http://localhost:3001";
// const base = axios.create({ baseURL });

export default function Home() {
  const [infos, setInfos] = useState();

  // function getInfos() {
  //   return base.get(`/infos`).then((res) => res.data);
  // }

  // useEffect(() => {
  //   getInfos()
  //     .then((response) => {
  //       console.log(response);
  //       setInfos(response.title);
  //     })
  //     .catch(console.log);
  // }, []);
  useEffect(() => {
    services
      .getInfos()
      .then((response) => {
        console.log(response);
        setInfos(response.title);
      })
      .catch(console.log);
  }, []);

  return <div>Home</div>;
}
