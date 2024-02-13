import React from 'react'
import bannerimg from "../Images/Banner.png"

export default function Banner() {
  return (
    <div style={{backgroundColor:"#F7FDFF"}}>
      <div className="container p-4" >
      <h1 style={{ fontStyle: "italic" }}>Your <span style={{ color: "#0096C8" }}>hobby</span> ,<span style={{ color: "#8064A2" }}>community...</span></h1>
      <button className="expbtn my-2 px-4 py-1 my-5" style={{display:"block",backgroundColor:"#8064A2",border:"1px solid #8064A2", color:"#ffff",borderRadius:"8px",fontWeight:"700"}}>Get Started</button>
      <img  className="my-5" src={bannerimg} style={{width:"75vw"}}></img>
      </div>
    </div>
  )
}
