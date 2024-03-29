import React from "react";
import FOOTCON from "./footContainer";
import "./footer.css";
import svgI from "../../../images/svg.png"
const Footer = () => {
  return (
    <>
      <footer className="footer">
      <div className="footerContainer">
      <div className="waveTopStyle">
      </div>
      <FOOTCON />
      <img src={svgI} alt="nn"  style={{position:"absolute",bottom:"0px",width:"100%",zIndex:"100",height:"20%"}}/>
      </div>
      </footer>
      
    </>
  );
};
export default Footer;
