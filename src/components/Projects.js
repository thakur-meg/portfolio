import { Container, Row } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import psoc from "../assets/img/psoc.png";
import priceTiers from "../assets/img/price-tiers.png";
import videoCall from "../assets/img/video-call.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import '../styles/projects.css';

export const Projects = () => {

  const projects = [
    
    {
      title: "Price-tier",
      description: "A responsive price tier table with razorpay api.",
      imgUrl: priceTiers,
      githubUrl: "https://github.com/thakur-meg/price-table-bootcampproject",
      url: "https://pricing-tables-project.netlify.app/",
    },
    {
      title: "Video Call",
      description: "A beginners clone of zoom app made with webrtc and react.",
      imgUrl: videoCall,
      githubUrl: "https://github.com/thakur-meg/video-call-app",
      url: "https://obscure-citadel-12341.herokuapp.com/",
    },
    {
      title: "PSoC",
      description: "PClub Summer Of Code landing page with next.js.",
      imgUrl: psoc,
      githubUrl: "https://github.com/hrik2001/psoc2022-landing",
      url: "https://www.psoc.in",
    },
    
  ];

  return (
    <section className="project" id="projects">
      <h2>Projects</h2>
      <Container>
        <Row>
            {
              projects.map((project, index) => {
                return (
                  <ProjectCard
                    key={index}
                    {...project}
                        />
                        )})
            }
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
