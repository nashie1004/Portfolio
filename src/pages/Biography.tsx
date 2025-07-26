import moment from "moment";

export default function Biography() {
  const startDate = moment("7/10/2023", "M/D/YYYY");
  const today = moment();

  const yrs = today.diff(startDate, 'years');

  return (
    <>
      <h1>Hi.</h1>
      <h2>About me</h2>
      <p>I'm a self-taught developer living in the Philippines specializing in C#/.NET, JS and SQL with {yrs} YOE. I'm currently working for 
        <a href="https://www.linkedin.com/company/tribal"> Tribal Group</a> as a Junior Developer.</p>
      <p>
        You can contact me on my 
        <a href="https://www.linkedin.com/in/nash-andrew-ocenar-447b63253/"> LinkedIn </a>
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
      <p>
        I started working professionally as a developer at 
        <a href="https://www.linkedin.com/company/algar-information-systems-inc-"> ALGAR</a>, 
        developing web applications with JQuery, .NET, SQL Server and Crystal Report.
      </p>
      <b>3. July 2024</b>
      <p>I reached 1 year of work experience at <a href="https://www.linkedin.com/company/algar-information-systems-inc-"> ALGAR</a>.</p>
      <b>4. July 2025</b>
      <p>After nearly 2 years, I switched and started working at <a href="https://www.linkedin.com/company/tribal">Tribal Group</a> as a Junior Developer.</p>
      <b>5. Now ({moment().format("MMMM YYYY")})</b>
      <p>I'm improving my C# and cloud skills.</p>

      <h2>Skills</h2>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript/Typescript</li>
        <li>JQuery</li>
        <li>React</li>
        <li>C# / .NET</li>
        <li>SQL Server</li>
        <li>Crystal Report</li>
        <li>Git</li>
        <li>Github</li>
        <li>Azure DevOps</li>
        <li>Visual Studio</li>
        <li>Visual Studio Code</li>
        <li>AWS EC2</li>
        <li>AWS S3</li>
      </ul>

    </>
  )
}
