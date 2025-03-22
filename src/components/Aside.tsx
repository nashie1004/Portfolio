import { NavLink } from "react-router";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import myImg from "../assets/profile.jpg"
import myResume from "../assets/nash-ocenar-resume.pdf"

export default function Aside() {
  return (
    <aside>
      <img src={myImg} alt="my-face" className="profile-img" />
      <h1>Nash Andrew</h1>
      <h2>Full-stack Developer</h2>

      <div id="links">
        <a href="mailto:naocenar@gmail.com">naocenar@gmail.com</a>
        <a download="nash-ocenar-resume.pdf" href={myResume}>My Resume</a>
        <a href="https://nashandrew.onrender.com/">My Previous Site</a>
        <div id="sites">
          <a href="https://github.com/nashie1004"><FaGithub size={40} /></a>
          <a href="https://www.linkedin.com/in/nash-andrew-ocenar-447b63253/"><FaLinkedin size={40} /></a>
        </div>
      </div>

      <nav>
        <NavLink to="/">Biography</NavLink>
        <NavLink to="/applications">Applications</NavLink>
      </nav>
    </aside>
  )
}
