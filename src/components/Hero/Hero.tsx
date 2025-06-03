import { BrowserRouter } from "react-router-dom"
import { Container } from "./styles"
import ScrollAnimation from "react-animate-on-scroll"
import Illustration from "../../assets/illustration.webp"
import { NavHashLink } from "react-router-hash-link"
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'
import whatsapp from '../../assets/whatsapp.svg'
import Hello from '../../assets/Hello.gif'
import telegram from '../../assets/telegram.svg'
import { Fade, Slide } from "react-awesome-reveal";

// export function Hero() {
//   return (
//     <Container id="home">
//       <div className="hero-text">
//         <ScrollAnimation animateIn="fadeInUp">
//           <p>Hello <img src={Hello} alt="Hello" width="20px"/>, I'm</p>
//         </ScrollAnimation>
//         <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
//           <h1>YOSSIEF CHANYALEW</h1>
//         </ScrollAnimation>
//         <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
//           <h3>Software Engineer and Mechanical Product Design Engineer</h3>
//         </ScrollAnimation>
//         <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
//           <p className="small-resume">3 Year Experience</p>
//         </ScrollAnimation>
//         <ScrollAnimation animateIn="fadeInUp" delay={0.8 * 1000}>
//           <BrowserRouter>
//             <NavHashLink smooth to="#contact" className="button">Contact</NavHashLink>
//           </BrowserRouter>
//         </ScrollAnimation>
//         <ScrollAnimation animateIn="fadeInUp" delay={1 * 1000}>
//       <div className="social-media"><a
//         href="www.linkedin.com/in/yossief-chanyalew"
//         target="_blank"
//         rel="noreferrer"
//       >
//         <img src={linkedin} alt="Linkedin" />
//       </a>
//         <a
//           href="https://github.com/jossycm17/"
//           target="_blank"
//           rel="noreferrer"
//         >
//           <img src={githubIcon} alt="GitHub" />
//         </a>
//         <a
//           href=""
//           target="_blank"
//           rel="noreferrer"
//         >
//           <img src={whatsapp} alt="Whatsapp" />
//         </a>
//         <a
//           href="https://t.me/Jos_cm"
//           target="_blank"
//           rel="noreferrer"
//         >
//           <img src={telegram} alt="telegram" />
//         </a></div>
//         </ScrollAnimation>
//       </div>
//       <div className="hero-image">
//         <ScrollAnimation animateIn="fadeInRight" delay={1 * 1000}>
//           <img src={Illustration} alt="Illustration" />
//         </ScrollAnimation>
//       </div>
//     </Container>
//   )
// }

export function Hero() {
  return (
    <Container id="home">
      <div className="hero-text">
        <Fade direction="up" triggerOnce={false}>
          <p>
            Hello <img src={Hello} alt="Hello" width="20px" />, I'm
          </p>
        </Fade>

        <Fade direction="up" delay={200} triggerOnce={false}>
          <h1>YOSSIEF CHANYALEW</h1>
        </Fade>

        <Fade direction="up" delay={400} triggerOnce={false}>
          <h3>Software Engineer and Mechanical Product Design Engineer</h3>
        </Fade>

        <Fade direction="up" delay={600} triggerOnce={false}>
          <p className="small-resume">3 Year Experience</p>
        </Fade>

        <Fade direction="up" delay={800} triggerOnce={false}>
          <BrowserRouter>
            <NavHashLink smooth to="#contact" className="button">
              Contact
            </NavHashLink>
          </BrowserRouter>
        </Fade>

        <Fade direction="up" delay={1000} triggerOnce={false}>
          <div className="social-media">
            <a
              href="https://www.linkedin.com/in/yossief-chanyalew"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedin} alt="Linkedin" />
            </a>
            <a
              href="https://github.com/jossycm17/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={githubIcon} alt="GitHub" />
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              <img src={whatsapp} alt="Whatsapp" />
            </a>
            <a
              href="https://t.me/Jos_cm"
              target="_blank"
              rel="noreferrer"
            >
              <img src={telegram} alt="telegram" />
            </a>
          </div>
        </Fade>
      </div>

      <div className="hero-image">
        <Fade direction="right" delay={1000} triggerOnce={false}>
          <img src={Illustration} alt="Illustration" />
        </Fade>
      </div>
    </Container>
  );
}