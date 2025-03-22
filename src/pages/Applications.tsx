import { IApplication } from "../types/types"
import project1 from "../assets/project-1.gif"
import project2 from "../assets/project-2.gif"
import project3 from "../assets/project-3.gif"

const liveApps: IApplication[] = [
  {
    siteUrl: "https://online-chess.xyz"
    ,name: "Online Chess"
    ,description: "A full stack real time chess web app made with React, C# and SQLite."
    ,githubURL: "https://github.com/nashie1004/online-chess"
    ,imageURL: null
  }
  ,{
    siteUrl: "https://nashie1004.github.io/Path-Finding-Visualizer/"
    ,name: "Path Finding Visualizer"
    ,description: "A path finding algorithm visualizer for the Dijkstra, breadth first search and depth first search algorithms."
    ,githubURL: "https://github.com/nashie1004/Path-Finding-Visualizer"
    ,imageURL: project1
  }
  ,{
    siteUrl: "#"
    ,name: "Billiards (8 Ball)"
    ,description: "" 
    ,githubURL: "#"
    ,imageURL: null
  }
  ,{
    siteUrl: "https://socketiochatappreact.onrender.com/"
    ,name: "Real Time Chat App"
    ,description: "A full stack web application that lets you create an account and communicate with other users on real time."
    ,githubURL: "https://github.com/nashie1004/Socket.io-MongoDB-front"
    ,imageURL: project2
  }
  ,{
    siteUrl: "https://spotify2react.onrender.com/"
    ,name: "Spotify 2.0"
    ,description: "A Spotify clone made using React, Express.js, and Spotify's REST API that lets you manage your Spotify account." 
    ,githubURL: "https://github.com/nashie1004/Client-Spotify"
    ,imageURL: project3
  }
]

export default function Applications() {
  
  return (
    <>
      {
        liveApps.map((item, idx) => {
          return <div key={idx} className="card">
            <img src={item.imageURL ?? ""} alt={item.name} />
            <div className="card-body">
              <h2>{item.name}</h2>
              <div className="card-links">
                <a href={item.githubURL}>Github</a>
                <a href={item.siteUrl}>Site</a>
              </div>
              <p>{item.description}</p>
            </div>
          </div>
        })
      }
    </>
  )
}
