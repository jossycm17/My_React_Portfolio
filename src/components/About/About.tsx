import { Container } from "./styles";
import jossy from "../../assets/jossy.webp";
import python from "../../assets/python.svg";
import solidwork from "../../assets/solidworks.svg";
import ansys from "../../assets/ansys.svg";
import autocad from "../../assets/Autocad.svg";
import fusion360 from "../../assets/fusion-360.webp";
import matlab from "../../assets/matlab.svg";
import blender from "../../assets/blender.svg";
import catia from "../../assets/catia.svg";
import firebase from "../../assets/firebase.svg";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import {Fade} from "react-awesome-reveal";


export function About() {
  return (
    <Container id="about">
      <div className="about-image">
        <div className="aboutpage-image-container">
          <div className="aboutpage-image-wrapper">
            <Fade direction="left" delay={210} triggerOnce={false}>
              <img src={jossy} alt="jossy" />
            </Fade>
          </div>
        </div>
      </div>
      <div className="about-text">
        <Fade direction="right" triggerOnce={false}>
          <h2>About me</h2>
        </Fade>
        <Fade direction="right" delay={100} triggerOnce={false}>
          <p>
            Hi there! I'm Yossief, an enthusiastic Software Engineer skilled in web development, machine learning, and Mechanical Product Design Engineer
          </p>
        </Fade>
        <Fade direction="right" delay={200} triggerOnce={false}>
          <p>
            I build responsive web applications, fine-tune ML models, and design robust and efficient systems that push technological boundaries.
          </p>
        </Fade>
        <Fade direction="right" delay={300} triggerOnce={false}>
          <p>
            And also I have dedication to innovation, craftsmanship, and sustainable engineering, merging functionality with aesthetics to inspire and captivate.
          </p>
        </Fade>
        <Fade direction="right" delay={400} triggerOnce={false}>
          <div className="education">
            <h3>Education:</h3>
            <h4> Bachelor of Mechanical Engineering and self-taught software developer.</h4>
            <p>Addis Ababa University, Addis Ababa| July 2022 - Present</p>
          </div>
        </Fade>
        <Fade direction="right" delay={550} triggerOnce={false}>
          <div className="experience">
            <h3>Experience:</h3>
            <h4>Mechanical Design Engineer</h4>
            <p>Vector Four Engineering | October 2024 - Present</p>
            <p>Blec Engineering | February 2024 - July 2024</p>
            <p>Shemu PLC| May 2023 - January 2024</p>
            <p>Addis Ababa, Ethiopia</p>
          </div>
        </Fade>
        <Fade direction="right" delay={400} triggerOnce={false}>
          <h3>Here are my main skills:</h3>
        </Fade>

        <p>Programming Skill</p>
        <div className="hard-skills">
          <div className="hability">
            <Fade direction="up" delay={100} triggerOnce={false}>
              <img src={python} alt="python" />
            </Fade>
          </div>
          <div className="hability">
            <Fade direction="up" delay={120} triggerOnce={false}>
              <img src={jsIcon} alt="JavaScript" />
            </Fade>
          </div>
          <div className="hability">
            <Fade direction="up" delay={130} triggerOnce={false}>
              <img src={reactIcon} alt="React" />
            </Fade>
          </div>
          <div className="hability">
            <Fade direction="up" delay={140} triggerOnce={false}>
              <img src={typescriptIcon} alt="Typescript" />
            </Fade>
          </div>
          <div className="hability">
            <Fade direction="up" delay={150} triggerOnce={false}>
              <img src={firebase} alt="firebase" />
            </Fade>
          </div>
          <div className="hability">
            <Fade direction="up" delay={180} triggerOnce={false}>
              <img src={htmlIcon} alt="Html" />
            </Fade>
          </div>
          <div className="hability">
            <Fade direction="up" delay={190} triggerOnce={false}>
              <img src={cssIcon} alt="Css" />
            </Fade>
          </div>
          <div className="hability">
            <Fade direction="up" delay={200} triggerOnce={false}>
              <img src={nodeIcon} alt="Node" />
            </Fade>
          </div>
        </div>

        <p>Design Skills</p>
        <div className="hard-skills">
          <div className="hability">
            <Fade direction="up" delay={100} triggerOnce={false}>
              <img src={solidwork} alt="solidwork" />
            </Fade>
          </div>
          <div className="hability">
            <Fade direction="up" delay={120} triggerOnce={false}>
              <img src={catia} alt="catia" />
            </Fade>
          </div>
          <div className="hability">
            <Fade direction="up" delay={130} triggerOnce={false}>
              <img src={autocad} alt="Autocad" />
            </Fade>
          </div>
          <div className="hability">
            <Fade direction="up" delay={140} triggerOnce={false}>
              <img src={fusion360} alt="fusion360" />
            </Fade>
          </div>
          <div className="hability">
            <Fade direction="up" delay={150} triggerOnce={false}>
              <img src={blender} alt="blender" />
            </Fade>
          </div>
          <div className="hability">
            <Fade direction="up" delay={160} triggerOnce={false}>
              <img src={matlab} alt="matlab" />
            </Fade>
          </div>
          <div className="hability">
            <Fade direction="up" delay={180} triggerOnce={false}>
              <img src={ansys} alt="ansys" />
            </Fade>
          </div>
        </div>
      </div>

      
    </Container>
  );
}
