import { useEffect, useState } from "react";
import services from "../../services";
import Project from "../../components/Project";

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
          <Project key={project._id} {...project} />
        ))}
      </div>
    </>
  );
}
