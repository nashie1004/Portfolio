import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <aside>
        <img src="https://picsum.photos/id/130/250/250.jpg" />
        <h1>Nash Andrew</h1>
        <h2>Full-stack Developer</h2>

        <p></p>
        <a className='light-gray' href="mainto:naocenar@gmail.com">naocenar@gmail.com</a>

        <nav>
          <a href="#">Biography</a>
          <a href="#">Tech Stack</a>
          <a href="#">Applications</a>
        </nav>
      </aside>
      <main>
        <h1>Hi.</h1>

        <h2 className='light-gray'>About me</h2>

        <p>I'm a full-stack developer living in the Philippines specializing in developing web applications with ASP.NET Core, React, Typescript and SQL.</p>
        <p>
          I'm currently working at 
          <a href="https://www.linkedin.com/company/algar-information-systems-inc-"> ALGAR Information Systems Inc. </a>
          for almost 1.5 years, developing web applications with JQuery, C#, SQL Server and Crystal Report.
        </p>

        <h2 className='light-gray'>My Career Timeline</h2>

        <b>1. September 2022</b>
        <p>
          I started my programming journey with resources such as 
          <a href="https://www.edx.org/cs50"> CS50</a>,
          <a href="https://www.theodinproject.com/"> The Odin Project</a> and
          <a href="https://www.freecodecamp.org/"> Free Code Camp</a>.
        </p>

        <b>2. July 2023</b>
        <p>I started working professionally as a web developer.</p>
        
        <b>3. July 2024</b>
        <p>I reached 1 year of work experience, gaining more proficiency and expertise.</p>

        <b>4. Now</b>
        <p>I'm currently learning AWS, more intermediate to advance ASP.NET concepts and tools, and cloud technologies to deepen and hone my skills.</p>

      </main>
    </>
  )
}

export default App
