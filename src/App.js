import './App.css';
import { useState } from "react";
import { content } from "./assets/content";
import classified from "./assets/classified-stamp.png"

function App() {

  const [tab, setTab] = useState('Home');
  console.log(content[tab].image)
  return (
    <div className="App">
      <div className="cont">
        <div className="buttons">
          <button className={tab === "Home" ? "button-active" : "button"} style={{ margin: "0 0 0 0px", zIndex: `${tab === "Home" ? 6 : 4}` }} onClick={() => setTab("Home")}><div className="tab">Home</div></button>
          <button className={tab === "Personas" ? "button-active" : "button"} style={{ margin: "0 0 0 -20px", zIndex: `${tab === "Personas" ? 6 : 3}` }} onClick={() => setTab("Personas")}><div className="tab">Personas</div></button>
          <button className={tab === "Redesign" ? "button-active" : "button"} style={{ margin: "0 0 0 -20px", zIndex: `${tab === "Redesign" ? 6 : 2}` }} onClick={() => setTab("Redesign")}><div className="tab">Redesign</div></button>
          <button className={tab === "Iterative" ? "button-active" : "button"} style={{ margin: "0 0 0 -20px", zIndex: `${tab === "Iterative" ? 6 : 1}` }} onClick={() => setTab("Iterative")}><div className="tab">Iterative</div></button>
          <button className={tab === "Development" ? "button-active" : "button"} style={{ margin: "0 0 0 -20px", zIndex: `${tab === "Development" ? 6 : 0}` }} onClick={() => setTab("Development")}><div className="tab">Development</div></button>
        </div>
        <div className="File">
          <div className="infobutton">
            <div className="info">
              <div className='header'>{content[tab].header}</div>
              <div className='header2'>{content[tab].header2}</div>
              <div className='wordy'> {content[tab].info1}</div>
              <div className='header2'>{content[tab].header3}</div>
              <div className='wordy'> {content[tab].info2}</div>
            </div>
            <div className="classi">
              {content[tab].button === true ? <a href={content[tab].url} target="_blank" rel="noreferrer"><button className="outbutton"><div className="tab" style={{color: "darkred"}}>Go to Full Investigation</div></button></a> : "" }
              <div style={{ height: "70%", padding: "5px 5px" }}><img className="panda-pic" src={classified} alt="classified stamp"></img></div>
            </div>
          </div>
          <div style={{ height: "100%" }}><img className="panda-pic" src={content[tab].image} alt="panda"></img></div>
        </div>
      </div>
    </div>
  );
}

export default App;
