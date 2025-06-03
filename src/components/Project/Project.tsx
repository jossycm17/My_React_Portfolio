import { Container } from "./styles";
import githubIcon from "../../assets/github.svg"
import externalLink from "../../assets/external-link.svg"
import pressmachine from "../../assets/Press Machine.png";
import sawdust from "../../assets/Saw dust.png";
import briquette from "../../assets/briquette machine.png";
import Carbonization from "../../assets/Carbonization.png";
import threeDprinter from "../../assets/3D printer.png";
import  robotichand from "../../assets/Robotic Hand.png";
import { Flip  } from "react-awesome-reveal";


export function Project() {
  return (
    <Container id="project">
      <h2>Programming Projects</h2>

      <div className="projects">

        <Flip direction="horizontal" triggerOnce={false}>
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/jossycm17/PRODIGY_ML_01/tree/main"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="GitHub" />
                </a>
              </div>
            </header>

            <div className="body">
              <h3>Linear regression model to predict the prices of houses</h3>
              <p>
                This project uses linear regression to predict house prices based on
                features like size, location, and number of rooms. It involves data
                cleaning, exploration, model training, and evaluation using metrics
                like R² and MSE, highlighting key data science and machine learning
                skills.
              </p>
            </div>

            <footer>
              <ul className="tech-list">
                <li>Python</li>
                <li>pandas</li>
                <li>numpy</li>
              </ul>
              <ul className="tech-list">
                <li>scikit-learn</li>
                <li>matplotlib</li>
                <li>seaborn</li>
              </ul>
            </footer>
          </div>
        </Flip>
       
      
       <Flip direction="horizontal" triggerOnce={false}>
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/jossycm17/PRODIGY_ML_01/tree/main"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="GitHub" />
                </a>
              </div>
            </header>

            <div className="body">
              <h3>Linear regression model to predict the prices of houses</h3>
              <p>
                This project uses linear regression to predict house prices based on
                features like size, location, and number of rooms. It involves data
                cleaning, exploration, model training, and evaluation using metrics like
                R² and MSE, highlighting key data science and machine learning skills.
              </p>
            </div>

            <footer>
              <ul className="tech-list">
                <li>Python</li>
                <li>pandas</li>
                <li>numpy</li>
              </ul>
              <ul className="tech-list">
                <li>scikit-learn</li>
                <li>matplotlib</li>
                <li>seaborn</li>
              </ul>
            </footer>
          </div>
        </Flip>
        

        <Flip direction="horizontal" triggerOnce={false}>
          <div className="project">
  <header>
    <svg
      width="50"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#23ce6b"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <title>Folder</title>
      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
    </svg>
    <div className="project-links">
      <a
        href="https://github.com/jossycm17/your-next-project-repo"
        target="_blank"
        rel="noreferrer"
      >
        <img src={githubIcon} alt="GitHub" />
      </a>
      <a
        href="https://your-live-project-link.com"
        target="_blank"
        rel="noreferrer"
      >
        <img src={externalLink} alt="Visit site" />
      </a>
    </div>
  </header>

  <div className="body">
    <h3>Deep learning model to detect defects in manufacturing products</h3>
    <p>
      This project implements a convolutional neural network (CNN) to detect defects in manufacturing products using image data. It includes data augmentation, model training, and performance evaluation using accuracy and F1-score metrics. Demonstrates expertise in deep learning, computer vision, and quality control automation.
    </p>
  </div>

  <footer>
    <ul className="tech-list">
      <li>Python</li>
      <li>TensorFlow</li>
      <li>Keras</li>
    </ul>
    <ul className="tech-list">
      <li>OpenCV</li>
      <li>matplotlib</li>
      <li>scikit-learn</li>
    </ul>
    </footer>
  </div>
 </Flip>


         <Flip direction="horizontal" triggerOnce={false}>
          <div className="project">
  <header>
    <svg
      width="50"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#23ce6b"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <title>Folder</title>
      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
    </svg>
    <div className="project-links">
      <a
        href="https://github.com/jossycm17/PRODIGY_ML_04"
        target="_blank"
        rel="noreferrer"
      >
        <img src={githubIcon} alt="GitHub" />
      </a>
      <a
        href="https://medibook.vinayaksingh.com"
        target="_blank"
        rel="noreferrer"
      >
        <img src={externalLink} alt="Visit site" />
      </a>
    </div>
  </header>

  <div className="body">
    <h3>Develop a hand gesture recognition model that accurately identifies and classifies different hand gestures</h3>
    <p>
      This project develops a hand gesture recognition model to accurately identify and classify various hand gestures from image or video data. It enables intuitive human-computer interaction and supports gesture-based control systems by leveraging computer vision and machine learning techniques.
    </p>
  </div>

  <footer>
    <ul className="tech-list">
      <li>Python</li>
      <li>pandas</li>
      <li>numpy</li>
    </ul>
    <ul className="tech-list">
      <li>scikit-learn</li>
      <li>matplotlib</li>
      <li>seaborn</li>
    </ul>
  </footer>
</div>
</Flip>

         <Flip direction="horizontal" triggerOnce={false}>
          <div className="project">
  <header>
    <svg
      width="50"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#23ce6b"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <title>Code</title>
      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
    </svg>
    <div className="project-links">
      <a
        href="https://github.com/jossycm17/PRODIGY_ML_05"
        target="_blank"
        rel="noreferrer"
      >
        <img src={githubIcon} alt="GitHub" />
      </a>
      <a
        href="https://youtu.be/NOm-3MynPLE"
        target="_blank"
        rel="noreferrer"
      >
        <img src={externalLink} alt="Visit site" />
      </a>
    </div>
  </header>

  <div className="body">
    <h3>Develop a model that can accurately recognize food items from images and estimate their calorie content</h3>
    <p>
      Develop a model to accurately recognize food items from images and estimate their calorie content. The project involves image preprocessing, training a classification model for food recognition, and using nutritional data to predict calories. This supports applications in diet tracking and health monitoring.
    </p>
  </div>

  <footer>
    <ul className="tech-list">
      <li>Python</li>
      <li>pandas</li>
      <li>numpy</li>
    </ul>
    <ul className="tech-list">
      <li>scikit-learn</li>
      <li>matplotlib</li>
      <li>seaborn</li>
    </ul>
  </footer>
</div>
</Flip>

         <Flip direction="horizontal" triggerOnce={false}>
          <div className="project">
  <header>
    <svg
      width="50"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#23ce6b"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <title>Folder</title>
      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
    </svg>
    <div className="project-links">
      <a
        href="https://github.com/jossycm17/Reactportfolio"
        target="_blank"
        rel="noreferrer"
      >
        <img src={githubIcon} alt="Visit site" />
      </a>
    </div>
  </header>

  <div className="body">
    <h3>React App Portfolio</h3>
    <p>
      A modern, responsive portfolio web app built using React, TypeScript, and Bootstrap to showcase work and expertise.
      Clean layout and styling are achieved with HTML, CSS, and responsive Bootstrap components.
      Interactive features are powered by JavaScript, ensuring a smooth user experience.
      The project is version-controlled with Git for reliability and maintainability.
    </p>
  </div>

  <footer>
    <ul className="tech-list">
      <li>React</li>
      <li>JavaScript</li>
      <li>TypeScript</li>
    </ul>
  </footer>
</div>
</Flip>
      
      </div>
      <h2>Mechanical Design Projects</h2>

      <div className="projects">

         <Flip direction="horizontal" triggerOnce={false}>
          <div className="project">
  <header>
    <svg
      width="50"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#23ce6b"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <title>Folder</title>
      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
    </svg>
    <div className="project-links">
      {/* No links provided */}
    </div>
  </header>

  <div className="body">
    <h3>Saw dust machine</h3>
    <p>
      The sawdust machine is a mechanical device designed
      with a feeding mechanism to introduce wood waste, a cutting
      system with sharp blades for shredding the material into sawdust.
    </p>
    <img src={sawdust} alt="Saw dust" />
  </div>

  <footer>
    <ul className="tech-list">
      <li>Solidwork</li>
      <li>Autocad</li>
      <li>Catia</li>
    </ul>
  </footer>
</div>
</Flip>

         <Flip direction="horizontal" triggerOnce={false}>
          <div className="project">
  <header>
    <svg
      width="50"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#23ce6b"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <title>Folder</title>
      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
    </svg>
    <div className="project-links">
      {/* No links provided */}
    </div>
  </header>

  <div className="body">
    <h3>Press Machine</h3>
    <p>
      A hydraulic press machine compacts leaves into dense, manageable forms for easy handling, storage, or processing. Ideal for reducing volume and improving material consistency.
    </p>
    <img src={pressmachine} alt="Press machine" />
  </div>

  <footer>
    <ul className="tech-list">
      <li>Solidwork</li>
      <li>Autocad</li>
      <li>Catia</li>
    </ul>
  </footer>
</div>
</Flip>


         <Flip direction="horizontal" triggerOnce={false}>
          <div className="project">
  <header>
    <svg
      width="50"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#23ce6b"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <title>Folder</title>
      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
    </svg>
    <div className="project-links">
      {/* No links */}
    </div>
  </header>

  <div className="body">
    <h3>Briquette machine</h3>
    <p>
      Saw Dust Briquette Machine compresses sawdust into solid, eco-friendly fuel blocks.
      It uses high pressure to create dense, energy-rich briquettes used for recycling wood waste.
    </p>
    <img src={briquette} alt="Briquette machine" />
  </div>

  <footer>
    <ul className="tech-list">
      <li>Solidwork</li>
      <li>Autocad</li>
      <li>Catia</li>
    </ul>
  </footer>
</div>
</Flip>

 <Flip direction="horizontal" triggerOnce={false}>
          <div className="project">
  <header>
    <svg
      width="50"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#23ce6b"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <title>Folder</title>
      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
    </svg>
    <div className="project-links">
      {/* No links */}
    </div>
  </header>

  <div className="body">
    <h3>Carbonization Machine</h3>
    <p>
      Carbonization Machine transforms biomass briquettes from sawdust or agricultural wastes into high-quality, eco-friendly charcoal by heating them in a controlled, low-oxygen chamber.
      It ensures efficient thermal decomposition, reducing smoke and harmful emissions.
    </p>
    <img src={Carbonization} alt="carbonization machine" />
  </div>

  <footer>
    <ul className="tech-list">
      <li>Solidwork</li>
      <li>Autocad</li>
      <li>Catia</li>
    </ul>
  </footer>
</div>
</Flip>

         <Flip direction="horizontal" triggerOnce={false}>
          <div className="project">
  <header>
    <svg
      width="50"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#23ce6b"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <title>Folder</title>
      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
    </svg>
    <div className="project-links">
      {/* No links */}
    </div>
  </header>

  <div className="body">
    <h3>3D Printer</h3>
    <p>
      3D Printer is a machine that creates three-dimensional objects by adding material layer by layer from a digital model.
      It uses materials like plastic, resin, or metal to produce precise and complex parts.
      It is designed for custom manufacturing, and rapid product development.
    </p>
    <img src={threeDprinter} alt="3D printer" />
  </div>

  <footer>
    <ul className="tech-list">
      <li>Solidwork</li>
      <li>Autocad</li>
      <li>Catia</li>
    </ul>
  </footer>
</div>
</Flip>

         <Flip direction="horizontal" triggerOnce={false}>
          <div className="project">
  <header>
    <svg
      width="50"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#23ce6b"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <title>Folder</title>
      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
    </svg>
    <div className="project-links">
      {/* No links */}
    </div>
  </header>

  <div className="body">
    <h3>Adjustable Robotic Hand</h3>
    <p>
      An adjustable robotic hand with multiple actuation offers precise and flexible control of each finger.
      It can adapt to various objects and grip styles, improving task versatility.
      It's designed for manufacturing industry automated handling systems.
    </p>
    <img src={robotichand} alt="robotichand" />
  </div>

  <footer>
    <ul className="tech-list">
      <li>Solidwork</li>
      <li>Autocad</li>
      <li>Catia</li>
    </ul>
  </footer>
</div>
</Flip>
               
      </div>
    </Container>
    
    
  );
}