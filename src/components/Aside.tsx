import { NavLink } from "react-router";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Aside() {
  return (
    <aside>
      <img src="https://picsum.photos/id/130/250/250.jpg" />
      <h1>Nash Andrew</h1>
      <h2>Full-stack Developer</h2>

      <div id="links">
        <a className='light-gray' href="mainto:naocenar@gmail.com">naocenar@gmail.com</a>
        <div id="sites">
          <a href="#"><FaGithub size={40} /></a>
          <a href="#"><FaLinkedin size={40} /></a>
        </div>
      </div>

      <nav>
        <NavLink to="/">Biography</NavLink>
        <NavLink to="/techStack">Tech Stack</NavLink>
        <NavLink to="/applications">Applications</NavLink>
      </nav>
    </aside>
  )
}
