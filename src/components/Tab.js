import React, { useState } from "react";
import "../css/tab.css";
import Skills from "./Skills";
import FESkills from "./FESkills";
import BESkills from "./BESkills";
import EESkills from "./EESkills";
import TSkills from "./TSkills";

function Tabs() {
    const [toggleState, setToggleState] = useState(1);
  
    const toggleTab = (index) => {
      setToggleState(index);
    };
  
    return (
    
    <>
      <h1 id='tabs' class='sectiontitle'>Skills</h1>
      <div className="containertab">
        
        <div className="bloc-tabs">
          <button className={toggleState === 1 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(1)}>
            Front End
          </button>
          <button className={toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(2)}>
            Back End
          </button>
          <button className={toggleState === 3 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(3)}>
            Electrical Engineering
          </button>
          <button className={toggleState === 4 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(4)}>
            Technology
          </button>
        </div>
        <div id='out'>
         <div className="content-tabs">
           <div className={toggleState === 1 ? "content active-content" : "content"}>
              <FESkills />
           </div>
   
           <div className={toggleState === 2 ? "content active-content" : "content"}>
              <BESkills />
           </div>
   
           <div className={toggleState === 3 ? "content active-content" : "content"}>
              <EESkills />
           </div>
           <div className={toggleState === 4 ? "content active-content" : "content"}>
              <TSkills />
           </div>
         </div>
        </div>
      </div>
    </>
    );
  }
  
  export default Tabs;