import moment from "moment";

export default function Biography() {
  return (
    <>
      <h1>Hi.</h1>
      <h2>About me</h2>
      <p>I'm a self-taught full-stack developer living in the Philippines specializing in developing web applications with ASP.NET Core, React, Typescript and SQL.</p>
      <p>
        I have been working at 
        <a href="https://www.linkedin.com/company/algar-information-systems-inc-"> ALGAR Information Systems Inc. </a>
        for {moment().diff("7/10/2023", "years", true).toFixed(1)} year(s), developing web applications with JQuery, ASP.NET Core, SQL Server and Crystal Report.
      </p>
      <p>
        You can contact me on my 
        <a href="https://www.linkedin.com/in/nash-ocenar-447b63253/"> LinkedIn </a>
        or send me an email at <a href="mailto:naocenar@gmail.com"> naocenar@gmail.com</a>.
      </p>

      <h2>My Career Timeline</h2>
      <b>1. September 2022</b>
      <p>
        I started my programming journey with 
        <a href="https://www.edx.org/cs50"> CS50</a>,
        <a href="https://www.theodinproject.com/"> The Odin Project</a> and
        <a href="https://www.freecodecamp.org/"> Free Code Camp</a>.
      </p>
      <b>2. July 2023</b>
      <p>I started working professionally as a web developer.</p>
      <b>3. July 2024</b>
      <p>I reached 1 year of work experience, gaining more proficiency and expertise.</p>
      <b>4. Now ({moment().format("MMMM YYYY")})</b>
      <p>I'm currently learning AWS, more intermediate to advance ASP.NET Core concepts and tools, and cloud technologies to deepen and hone my skills.</p>

      <h2>Technologies</h2>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript and Typescript</li>
        <li>JQuery</li>
        <li>React.js</li>
        <li>C# / ASP.NET Core</li>
        <li>SQL Server / SQL</li>
        <li>Node.js</li>
        <li>Crystal Report</li>
        <li>Git</li>
        <li>Github</li>
        <li>Azure DevOps</li>
        <li>Visual Studio</li>
        <li>Visual Studio Code</li>
      </ul>

      <h2>Interests</h2>
      <ul>
        <li>Web Development</li>
        <li>Front-end Development</li>
        <li>Back-end Development</li>
        <li>Full-stack Development</li>
      </ul>
    </>
  )
}
