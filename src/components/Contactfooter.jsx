import React from "react";
import "../styles/contactfooter.css";
import "../images/group-2.png";
import { AkarIconsinstagramFill } from 'akar-icons';

const Contactfooter = () => {
  return (
    <div className="footer">
          <h1 className="titlerobotoslab-bold-white-48px">
            <span className="robotoslab-bold-white-48px">
              Caribbean Coding Academy
            </span>
          </h1>
         
          <AkarIconsinstagramFill src="group-2.png" alt="hi" />
          <div className="akar-iconsyoutube-fill">
            <div className="group-1"></div>
          </div>
          
          <div className="akar-iconsfacebook-fill"></div>
          <AkarIconsinstagramFill
            src="../images/group-5.png"
            className="akar-iconslinkedin-fill"
          />
        </div>
        <div className="flex-row-1robotoslab-bold-white-30px">
          <span className="robotoslab-bold-white-30px">
            Contact Us People Programs Projects
          </span>
        </div>

        <div className="flex-row-2roboto-normal-white-24px">
          <span className="roboto-normal-white-24px">
            H. A. Blaize Street, St. George's, Grenada Teams Projects Future
            Projects
          </span>
        </div>

        <div className="flex-row-3roboto-normal-white-24px">
          <span className="roboto-normal-white-24px">
            +1 (473) 456- 1568 Developers Moodle Future Projects
          </span>
        </div>

        <div className="flex-row-4roboto-normal-white-24px">
            <span className="roboto-normal-white-24px">
                Caribbeancodingacademy@gmail.com
                Services
                Future Projects
            </span>
          </div>
        
        <div className="placeroboto-normal-white-24px">
          <span classsName="roboto-normal-white-24px">Contact</span>
        </div>
        
          <div className="copyright-1">
              <span className="roboto-normal-white-24px">Copyright
                <img 
                  className="mdialpha-c-circle-outline" 
                  src="mdi-alpha-c-circle-outline-1.png"
                  alt="hi"
                />
              2022&nbsp;&nbsp;Caribbean Coding Academy. All Rights Reserved.
            </span>
          </div>
  );
};

export default Contactfooter;
