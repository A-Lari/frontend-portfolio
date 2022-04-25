import { Button, Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import services from "../../services";
import Project from "../../components/Project";
import "./ProjectList.css";

export default function ProjectList() {
  const [projects, setProjects] = useState([]);
  const [inputTitle, setInputTitle] = useState("");

  const handleSearchChange = (e) => {
    console.log(e);
    setInputTitle(e.target.value);
  };

  const handleSubmitSearch = (e) => {
    e.preventDefault();

    services
      .searchByTitle(inputTitle)
      .then((result) => {
        console.log(result);
        setProjects(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
    <Container>
      <h2>Les projets</h2>

      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <form className="d-flex" onSubmit={handleSubmitSearch}>
            <input
              className="form-control me-2"
              type="search"
              onChange={handleSearchChange}
              value={inputTitle}
              placeholder="Un titre"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Chercher
            </button>
          </form>
        </div>
      </nav>

      <Row>
        {projects.map((project) => (
          <Project key={project._id} {...project} />
        ))}
      </Row>
    </Container>
  );
}
