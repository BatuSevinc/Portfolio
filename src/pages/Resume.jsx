//React Router DOM
import { Link } from "react-router-dom";
//Images
import Batu from "../images/batu.jpg";
//Icons
import {
  FaCity,
  FaMailBulk,
  FaPhone,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { AiOutlineFileSearch } from "react-icons/ai";
//Css
import "./resume.css";

const Resume = () => {
  return (
    <div className="resume">
      <div className="resume-header">
        <div className="resume-header-left">
          <h1>Batuhan Sevinç</h1>
          <h2>Front-end Developer</h2>
          <p>
            I am a graduate in Civil Engineering. I am eager to learn new
            things, value ethical principles, and consider myself a confident,
            problem-solving, and results-oriented team player. I strive to be
            one of the top professionals in my field by constantly improving
            myself. With a growing interest in the software industry, I have
            decided to advance my career in that field. I have developed my
            skills by working on practical projects and conducting continuous
            research to expand my knowledge.
          </p>
        </div>
        <div className="resume-header-right">
          <img src={Batu} alt="batuhan sevinç" />
        </div>
      </div>
      <div className="resume-address">
        <span>
          <FaMailBulk />
          batusvnc@outlook.com
        </span>
        <span>
          <FaPhone />
          +90 534 551 80 80
        </span>
        <span>
          <FaCity />
          Izmir,Turkey
        </span>
        <span>
          <AiOutlineFileSearch />
          <Link
            to={"https://batusevinc-portfolio.netlify.app/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            batusevinc-portfolio.netlify.app/
          </Link>
        </span>
        <span>
          <FaLinkedin />
          <Link
            to={"https://www.linkedin.com/in/batusevinc/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/batuSevinc
          </Link>
        </span>
        <span>
          <FaGithub />
          <Link
            to={"https://github.com/BatuSevinc"}
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/BatuSevinc
          </Link>
        </span>
      </div>
      <div className="resume-desc">
        <div className="resume-desc-left">
          <h2>EDUCATION</h2>
          <h4>Civil Engineering</h4>
          <h3>DOKUZ EYLÜL UNIVERSITY</h3>
          <div className="info">
            <p>09/2018-02/2023</p>
            <p>Izmir,TURKEY</p>
          </div>
          <h2>WORK EXPERIENCE</h2>
          <h4>Front-end Developer</h4>
          <h3>ThothTech</h3>
          <p className="date">08/2023 - Present</p>
          <p className="subtitle">Achievements/Tasks</p>
          <ul>
            <li>
              <span>
                I undertook the role of a frontend developer in projects using
                React, Redux, JavaScript, HTML, CSS, Sass, Tailwind CSS, and
                Bootstrap. I developed a system where users can filter based on
                product features and log in via authorization.
              </span>
            </li>
            <li>
              <span>
                I created an architecture that efficiently handles filtering
                processes sometimes on the frontend and sometimes by sending
                queries to the backend for more effective and optimized
                performance. I integrated features using cookies and
                localStorage to store user preferences in the browser.
              </span>
            </li>
            <li>
              <span>
                Designing the admin panel, I enabled the management of cost,
                profit, and time data in a multi-layered structure. I developed
                a stock system, determining material needs based on comparisons
                between available and used materials according to orders.
              </span>
            </li>
            <li>
              <span>
                I designed and implemented a system managing user-based
                payments. Storing users' tokens in localStorage, I ensured that
                every action communicates with the API using tokens. I
                implemented processes to redirect users to the login page in
                case of an invalid token.
              </span>
            </li>
            <li>
              <span>
                Using Redux for global state management, I controlled global
                states such as application-specific colors. For systems with
                multiple admins, I developed an admin panel where rules set by
                the general manager affect everyone, while rules set by team
                managers only affect their subordinates.
              </span>
            </li>
            <li>
              <span>
                By adding language support, I dynamically changed site content
                based on the selected language, storing the user's language
                preference in localStorage to retain language selections even
                after closing and reopening the site.
              </span>
            </li>
          </ul>
          <h2>Contact:</h2>
          <h5>Mehmet Alemdar (Full-Stack Developer)</h5>
        </div>
        <div className="resume-desc-right">
          <h2>SKILLS</h2>
          <div className="right-skills">
            <div className="skill-btn">React.js</div>
            <div className="skill-btn">JavaScript</div>
            <div className="skill-btn">HTML</div>
            <div className="skill-btn">CSS</div>
            <div className="skill-btn">SASS</div>
            <div className="skill-btn">Tailwind CSS</div>
            <div className="skill-btn">Bootstrap5</div>
            <div className="skill-btn">Web Socket</div>
            <div className="skill-btn">Figma</div>
            <div className="skill-btn">Adobe XD</div>
          </div>
          <h2>BOOTCAMP</h2>
          <h4>Front-End Bootcamp</h4>
          <h3>Turkcell Geleceği Yazanlar</h3>
          <p className="date">09/2022-12/2022</p>
          <p className="subtitle">Achievements/Tasks</p>
          <ul>
            <li>
              <span>
                Algorithmic Problem Solving: Algorithmic questions were solved
                to enhance algorithmic thinking.
              </span>
            </li>
            <li>
              <span>
                Developed multiple projects using APIs, involving tasks such as
                sending HTTP requests, processing JSON data, and working with
                web services.
              </span>
            </li>
            <li>
              <span>
                Teamwork: I prioritized teamwork while working on projects with
                different teams, particularly by utilizing collaboration tools
                like GitHub.
              </span>
            </li>
            <li>
              <span>
                Examples with MVC, Component-Based, and Single-Page Application
                (SPA) Architectures: Sample projects were developed to
                understand and utilize MVC, Component-Based, and Single-Page
                Application (SPA) architectures.
              </span>
            </li>
            <li>
              <span>
                Responsive Design: I have learned and applied the Responsive
                Design approach to make user interfaces adapt to different
                screen sizes and devices.
              </span>
            </li>
          </ul>
          <h2>REFERENCES</h2>
          <h5 style={{ marginTop: "2px" }}>Varol MAKSUTOĞLU</h5>
          <small>Front-end Team Lead at Turkcell Group Company Atmosware</small>
          <br />
          <h2>CERTIFICATES</h2>
          <h3>
            Turkcell Geleceği Yazanlar Front-end Certificate <br />
            (09/2023 - 12/2022)
          </h3>
          <h2>LANGUAGES</h2>
          <div className="info">
            <div>
              <p>Turkish</p>
              <small>Native or Bilingual Proficiency</small>
            </div>
            <div>
              <p>English</p>
              <small>Limited Working Proficiency</small>
            </div>
          </div>
          <h2>INTERESTS</h2>
          <div className="right-interests">
            <div className="interest-btn">Travelling</div>
            <div className="interest-btn">Discovering new things</div>
            <div className="interest-btn">Fishing</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
