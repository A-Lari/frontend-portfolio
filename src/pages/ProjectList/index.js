import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import services from "../../services";
import Project from "../../components/Project";
import Navbar from "../../components/Navbar";

export default function ProjectList() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    services
      .getProjects()
      .then((response) => {
        console.log(response);
        setProjects(response);
      })
      .catch(console.log);
  }, []);
  return (
    <>
      <Navbar />
      <div>
        <h1>Liste projets</h1>
        {projects.map((project) => (
          <Project key={project._id} {...project} />
        ))}
      </div>
    </>
  );
}
