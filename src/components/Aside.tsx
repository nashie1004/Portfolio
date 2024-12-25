import { NavLink } from "react-router";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Aside() {
  return (
    <aside>
      <img src="https://picsum.photos/id/131/250/250.jpg" />
      <h1>Nash Andrew</h1>
      <h2>Full-stack Developer</h2>

      <div id="links">
        <a href="mailto:naocenar@gmail.com">naocenar@gmail.com</a>
        <a href="#">Resume</a>
        <a href="https://nashandrew.onrender.com/">My Previous Site</a>
        <div id="sites">
          <a href="https://github.com/nashie1004"><FaGithub size={40} /></a>
          <a href="https://www.linkedin.com/in/nash-ocenar-447b63253/"><FaLinkedin size={40} /></a>
        </div>
      </div>

      <nav>
        <NavLink to="/">Biography</NavLink>
        <NavLink to="/applications">Applications</NavLink>
      </nav>
    </aside>
  )
}
