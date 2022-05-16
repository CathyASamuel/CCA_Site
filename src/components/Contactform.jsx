import "../styles/contactform.css";
import line4 from "../images/line-4-1.png";
import line5 from "../images/line-5-1.png";
import line7 from "../images/line-7-1.png";
import { Location, Phone } from "akar-icons";
import { Email } from "@carbon/icons-react";
import timefive from "../images/time-five-regular.png";
import map from "../images/map.png";

function Contactform(props) {
  const {
    ccaLogo11,
    spanText1,
    spanText2,
    spanText3,
    spanText4,
    spanText5,
    spanText6,
    spanText7,
    undraw_Contact_Us_Re_4Qqt1,
    spanText8,
    spanText9,
    spanText10,
    spanText11,
    spanText12,
    spanText13,
    line6,
    spanText14,
    spanText15,
    spanText16,
    group1,
    carbonEmail,
    bxTimeFive,
    spanText17,
    spanText18,
    spanText19,
    spanText20,
    spanText21,
    spanText22,
    spanText23,
    rectangle122,
    spanText24,
    group2,
    akarIconsFacebookFill,
    spanText25,
    spanText26,
    spanText27,
    spanText28,
    spanText29,
    spanText30,
    spanText31,
    spanText32,
    spanText33,
    spanText34,
    spanText35,
    spanText36,
    spanText37,
    spanText38,
    spanText39,
    spanText40,
    spanText41,
    mdiAlphaCCircleOutline,
    spanText42,
    akarIconsinstagramFill1Props,
    akarIconsinstagramFill2Props
  } = props;

  return (
    <div container-center-horizontal>
      <div className="contactscreen">
        <div className="contact-usrobotoslab-bold-black-48px">
          <span className="robotoslab-bold-black-48px">Contact Us</span>
        </div>
        <div className="overlap-group4">
          <div className="flex-col">
            
            <div className="contact-form">
              <span className="robotoslab-bold-black-48px">Contact Form</span>
            </div>

            <div className="roboto-normal-black-16px">
              <span className="st-name-container">
                <label className="first-name">First-name</label>
                <label className="last-name">Last-name</label>
              </span>
            </div>

            <div className="line-container">
              <img className="line-4" src={line4} alt="line" />
              <img className="line-5" src={line5} alt="line" />
            </div>

            <div className="email">
              Email
              <img className="line-6" src={line7} alt="line" />
            </div>

            <div className="phone">
              <span className="roboto-normal-black-16px">Phone</span>
              <img className="line-7" src={line7} alt="line" />
            </div>

            <div className="message">
              <span className="roboto-normal-black-16px">Message</span>
              <div className="rectangle-120"></div>
            </div>

            <div className="overlap-group7">
              <h1 className="title">
                <span className="roboto-bold-white-36px">Submit</span>
              </h1>
            </div>
          </div>
            <div className="flex-row">
              <div className="flex-col-1">
                <Location className="akar-iconslocation"/>
                <Phone className="flex-col-item"/>
                <Email className="flex-col-item"/>
                <img className="bxtime-five" src={timefive} alt="time" />
              </div> 

              <div className="flex-col-2"> 
                <h1 className="info">
                <span className="robotoslab-bold-white-48px">Info</span>
                </h1>
              
                <div className="ha-blaize-street-st">
                  <div className="roboto-bold-white-24px">
                    <div>H. A. Blaize Street</div>
                    <div>St George's, Grenada,W.I</div>
                  </div>
                </div>

              <div className="phone-1">
                <div className="roboto-bold-white-24px">
                  <div>1 (473) 456 1568</div>
                </div>
              </div>

              <div className="ccagrenadagmailcom">
                <div className="roboto-bold-white-24px">
                  <div>ccagrenada@gmail.com</div>
                </div>
              </div>

              <div className="monday-friday-800-am-630-pm">
                <div className="roboto-bold-white-24px">
                  <div>Monday-Friday</div>
                  <div>8:00am - 6:30pm</div>
                </div>
              </div>

            </div>
          </div>
        </div>
       
        <div className="overlap-group5">
          <div className="find-location">
            <div className="robotoslab-bold-black-48px">Find Location</div>
          </div>
          <div className="click-on-the-map-to">
            <div className="roboto-normal-black-24px">
              click on the map to find out location
            </div>
          </div>
        </div>
        <img className="rectangle-122" src={map} alt="map" />
      </div>
    </div>
  );
}

export default Contactform;
