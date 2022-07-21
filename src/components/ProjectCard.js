import { Col } from "react-bootstrap";
import { Github, Link } from "react-bootstrap-icons";

export const ProjectCard = ({ title, description, imgUrl, githubUrl, url }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <br></br>
          <a href={githubUrl}><button ><Github size={25} /></button></a>
          <a href={url}><button ><Link size={25} /></button></a>        
          </div>
      </div>
    </Col>
  )
}
