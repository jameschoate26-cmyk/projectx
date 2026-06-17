import React from "react";
import { MeetourTeam } from "./MeetOurTeam.js";
import image3 from "../../assets/image/meet3.jpeg";
import image1 from "../../assets/image/meet1.jpeg";
import image2 from "../../assets/image/meet2.jpeg";
import image4 from "../../assets/image/meet4.jpeg";

const Meet_Our_Team = () => {
  return (
    <MeetourTeam>
      <div className="ourteams">
        <p>Meet Our Team</p>
        <p>
          Your goals are our mission, and every member of our team is here to
          turn your challenges into achievements.
        </p>
      </div>

      <div className="image_box">
        <div>
          <div className="image">
            <img src={image1} alt="images" />
          </div>
          <p className="imagename">Gwynne Shotwell</p>
          <p className="imagename">President and COO of SpaceX</p>{" "}
        </div>
        <div>
          <div className="image">
            <img src={image2} alt="images" />
          </div>
          <p className="imagename">William Gerstenmaier</p>
          <p className="imagename">Mission Assurance Chief</p>
        </div>
        <div>
          <div className="image">
            <img src={image3} alt="images" />
          </div>
          <p className="imagename">Mark Juncosa</p>
          <p className="imagename">Senior engineering leader</p>{" "}
        </div>
        <div>
          <div className="image">
            <img src={image4} alt="images" />
          </div>
          <p className="imagename">Tom Ochinero</p>
          <p className="imagename">Vice President of Starship Programs</p>{" "}
        </div>
      </div>
    </MeetourTeam>
  );
};

export default Meet_Our_Team;
