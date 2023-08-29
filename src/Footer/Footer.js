import React from "react"
import "./Footer.css"
function Footer({theme}) {
   return(
     <>
     <div className={`footer ${theme}`}>
    <h6 className={`disclaimer ${theme}`}>All the images showed up here are subjected to Copyright©</h6>
  
    <div className="partners">
    <br/>
    <h4 className="list">Pictutes taken by Talented Artists</h4>  
    <h4 className="list">Free Stock photos</h4>
      <h4 className="list">Popular Searches</h4>
      <h4 className="list">Collections</h4>
    <h4 className="list">Challenges</h4>  
    <h4 className="list">FAQ</h4>
    <h4 className="list">Other Plugins and apps</h4>
    <h4 className="list">Blog</h4>
   </div>
    <h4 className={`endup ${theme}`}>All Rights Reserved©</h4>
      </div>
    </>
     )
}
export default Footer