import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import services from "../../services";

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
      <div>
        <h1>Liste projets</h1>
        {projects.map((project) => (
          <p key={project._id}>
            <span>{project.title}</span>
            <span>{project.summary}</span>
          </p>
        ))}
      </div>
    </>
  );
}
