import React, {useState,useEffect} from "react"
import Typewriter from 'typewriter-effect';
import Aos from "aos"
import Footer from "../Footer/Footer"
import LoadingBar from 'react-top-loading-bar'
import axios from "axios"
import logo from "./NoResults.png"
import "aos/dist/aos.css"
import "./Gallerybody.css"
function Gallerybody({theme}) {
  const [images, setImages] = useState([])
  const [input, setInput ] = useState("")
  const [progress, setProgress ] = useState(0)
  const [inputClick, setinputClick]=useState(null)
useEffect(()=>{
  const fetchImages = async () => {
    try {
      setProgress(50); 
      const response = await axios.get(`https://pixabay.com/api/?key=39007897-1542c0896e08d4bb536cc82f2&q=${inputClick}&image_type=photo&pretty=true`);
      setImages(response.data.hits)
      setImages(response.data.hits);
      setProgress(100);
      // Hide loading bar after API call is complete
    } catch (error) {
      alert("ERORR_FETCH STATUS:404" + error);
    }
  };
  fetchImages();
}, [inputClick]);
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  const triggerHandler = () =>{
    if (input.trim() === "") {
    alert("This Feild is Mandatory");
    return; // Don't update the state

  }
  setinputClick(input);
  }
   return (
   <>
     <div className ={`body ${theme}`}>
     <div className ={`container ${theme}`} >
 <img className ="bodyimage" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0Mnkm_iy94p6h281IYDfypEyZeNIxS-JF6A&usqp=CAU" alt="flowers img"/>
 <div className="Text">
<Typewriter
  options={{
    strings: ['Get Awesome Free Photos', 'Taken By Talented Artists', 'Only Just For You!!'],
    autoStart: true,
    loop: true,
  }}
/>
</div>
   <input value={input} onChange={e=>setInput(e.target.value)}  className={`inputfeild ${theme}`}type="text" placeHolder="Search what ever you Like!" required/>
<button onClick={triggerHandler} className={`fetch ${theme}`}>Serach</button>
  </div>
  <div className="imagecards">
     <div className={`column ${theme}`}>
     <LoadingBar
       color='blue'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      {(
        images.map(photo=><img
        data-aos="zoom-in"
        key={photo.id} 
        src={photo.webformatURL}/>)
      )
      }
{
  ( images.length===0 && input.trim()!="") &&
  (<>
    <h2 className={`errtext ${theme}`} >Oops!!</h2>
  <img style={{
    boxShadow:"none", 
    pointerEvents:"none", 
    height:"100px",
    width:"100px"
  }} src={logo} alt="no results"/>
  <p className={`errtext ${theme}`} >Sorry!!..No Results for Your Search, Try different key Words similar to {inputClick}</p>
  </>
  )
}
    </div>
  </div>
  <Footer theme={theme}/>
  </div>
 </>
 )
}

export default Gallerybody