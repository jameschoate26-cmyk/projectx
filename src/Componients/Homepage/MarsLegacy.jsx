import React from "react";
import { Mars_Legacy } from "./MarsLegacy.js";
import images from "../../assets/image/shutterstock_2560899093.jpg";

const MarsLegacy = () => {
  return (
    <Mars_Legacy>
      <div className="boxs">
        <div className="MARS">
          <p>
            Mars Legacy Estates is a conceptual ultra-premium interplanetary
            property vision inspired by the coming era of space civilization,
            advanced technology, and multi-planetary living. It is designed for
            forward-thinking individuals who understand that the future is not
            only shaped by what exists today, but by the bold ideas people
            choose to believe in before the rest of the world catches up. Mars
            represents more than a distant planet. It represents a new frontier
            of human ambition, innovation, and legacy. As humanity moves closer
            to life beyond Earth, Mars Legacy Estates stands as a symbol of
            early positioning in one of the most powerful visions of the future.
            For the few who understand that true wealth is built not only
            through assets, but through vision, timing, and positioning ahead of
            history itself, Mars Legacy Estates offers a chance to be connected
            to a future greater than ordinary real estate. This is not just
            about property. It is about imagination, progress, and becoming part
            of a story that may one day define the next chapter of human
            civilization.
          </p>
        </div>
        <div className="IMG">
          <img src={images} alt="images" />
        </div>
      </div>
    </Mars_Legacy>
  );
};

export default MarsLegacy;
