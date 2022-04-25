import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import services from "../../services";
import "./ProjectDetail.css";

export default function ProjectDetail() {
    const [project, setProject] = useState({
      techno: []
    });

    let { idProject } = useParams();
    console.log(idProject);

    useEffect(() => {
      services
        .getProject(idProject)
        .then((response) => {
          console.log(response);
          setProject(response);
        })
        .catch(console.log);
    }, []);

  return (
    <div>
        <p>{project.title}</p>
        <p>
          { JSON.stringify(project.techno) }
        </p>
        <p>
          {project.techno.map((techno) => (
            <span key={techno._id} className="badge rounded-pill bg-info text-dark">{techno.label}</span>
          ))}
        </p>
        <p>{project.summary}</p>
        <p>{project.content}</p>
    </div>

  )
}