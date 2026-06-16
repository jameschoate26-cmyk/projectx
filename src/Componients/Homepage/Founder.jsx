import React from "react";
import { Founder_ceo } from "./Founder.js";
import imgage from "../../assets/image/_116361364_tes1.png";

const Founder = () => {
  return (
    <Founder_ceo>
      <div className="CEO">
        <div className="imges">
          <img src={imgage} alt="imgage" />
        </div>
        <div className="ceo">
          <p>elon musk</p>
          <p>CEO/Founder</p>
          <div className="span">
            <span>
              SpaceX was founded in 2002 with the goal of dramatically reducing
              the cost of space travel and eventually making humanity a
              multi-planet species. Musk has repeatedly said that he wants
              humans to become a civilization that can live on more than one
              planet, reducing the risk that a catastrophe on Earth could
              threaten humanity's future.
            </span>
          </div>
        </div>
      </div>
    </Founder_ceo>
  );
};

export default Founder;
