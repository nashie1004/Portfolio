import { IApplication } from "../types/types"

const liveApps: IApplication[] = [
  {
    siteUrl: "https://nashie1004.github.io/Path-Finding-Visualizer/"
    ,name: "Path Finding Visualizer"
    ,description: "A path finding algorithm visualizer for the Dijkstra, breadth first search and depth first search algorithms."
    ,githubURL: "https://github.com/nashie1004/Path-Finding-Visualizer"
    ,imageURL: ""
  }
  ,{
    siteUrl: "https://socketiochatappreact.onrender.com/"
    ,name: "Real Time Chat App"
    ,description: "A full stack web application that lets you create an account and communicate with other users on real time."
    ,githubURL: "https://github.com/nashie1004/Socket.io-MongoDB-front"
    ,imageURL: ""
  }
  ,{
    siteUrl: "https://spotify2react.onrender.com/"
    ,name: "Spotify 2.0"
    ,description: "A Spotify clone made using React, Express.js, and Spotify's REST API that lets you manage your Spotify account." 
    ,githubURL: "https://github.com/nashie1004/Client-Spotify"
    ,imageURL: ""
  }
]

export default function Applications() {
  return (
    <>
      <h1>Live</h1>
      {
        liveApps.map((item, idx) => {
          return <div key={idx} className="card">
            <h2>{item.name}</h2>
            <div className="card-links">
              <a href={item.githubURL}>Github</a>
              <a href={item.siteUrl}>Site</a>
            </div>
            <p>{item.description}</p>
          </div>
        })
      }
    </>
  )
}
