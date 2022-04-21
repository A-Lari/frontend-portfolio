import { useEffect, useState } from "react";
import "./Home.css";
import services from "../../services";

export default function Home() {
  const [infos, setInfos] = useState({});

  useEffect(() => {
    services
      .getInfos()
      .then((response) => {
        console.log(response);
        setInfos(response);
      })
      .catch(console.log);
  }, []);

  return (
    <div>
      <p>{infos.logo}</p>
      <p>{infos.title}</p>
      <p>{infos.presentation_texte}</p>
      <p>{infos.footer}</p>
    </div>
  );
}
