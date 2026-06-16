import React from "react";
import { MeetourTeam } from "./MeetOurTeam.js";
import images from "../../assets/image/team-1.jpg";

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
            <img src={images} alt="images" />
          </div>
          <p className="imagename">Dan Demarco</p>
          <p className="imagename">founder</p>{" "}
        </div>
        <div>
          <div className="image">
            <img src={images} alt="images" />
          </div>
          <p className="imagename">Dan Demarco</p>
          <p className="imagename">founder</p>
        </div>
        <div>
          <div className="image">
            <img src={images} alt="images" />
          </div>
          <p className="imagename">Dan Demarco</p>
          <p className="imagename">founder</p>{" "}
        </div>
        <div>
          <div className="image">
            <img src={images} alt="images" />
          </div>
          <p className="imagename">Dan Demarco</p>
          <p className="imagename">founder</p>{" "}
        </div>
      </div>
    </MeetourTeam>
  );
};

export default Meet_Our_Team;
