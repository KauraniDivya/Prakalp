
import React, {  useEffect } from "react";
import { Link} from "react-router-dom";
import logo from "./images/79.png";
import techn from "./images/techn.png";
import logo2 from "./images/jharkhand.png";
import prakalp from "./images/prakalp.svg";
// import oscillate from "./images/oooscillate.svg"
// import endless from "./images/abstract-timekeeper.png";
const AuthHeader = () => {
    useEffect(() => {
   
    
        
        
        
        
   }, []);
  
 
   return (
     <>

 

<div className="header-part1">
            <div className="logo-and-text">
              <img src={logo} alt="logo" />
              <h4>
                <img src={prakalp} style={{width:"250px", marginLeft:"400px"}}/>
              </h4>
    

      <img
        src={logo2}
        alt="logo"
        style={{ width: "80px", height: "80px", marginLeft:"350px" }}
      />


              


            </div>
          </div>

  </>
  );
};

export default AuthHeader;
