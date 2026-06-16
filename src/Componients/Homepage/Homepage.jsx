import React from "react";
import { Home_page } from "./Homepage.js";
import MarsLegacy from "./MarsLegacy.jsx";
import Founder from "./Founder.jsx";
import Meet_Our_Team from "./MeetOurTeam.jsx";

const Homepage = () => {
  return (
    <Home_page>
      <div className="video-write">
        <video className="home-video" autoPlay muted loop playsInline>
          <source
            src="https://themes.incognitothemes.com/andor/assets/videos/home-video-1.mp4"
            type="video/mp4"
          />
        </video>

        <div className="video-content">
          <h1>Mars Is No Longer a Dream. It’s the Next Address of Humanity.</h1>
   
        </div>

        <div className="content-box">
          <div className="box">
            <div>
              <h1>Earth was the beginning. Mars is the future</h1>
              <p>
                For generations, Mars existed only in imagination a distant red
                world seen through telescopes and science fiction. Today, it
                represents something greater: the next frontier of human
                ambition, innovation, and survival. As technology moves humanity
                closer to life beyond Earth, Mars stands as a symbol of the
                future a place where visionaries, pioneers, and investors can
                imagine a new chapter of civilization.
              </p>
            </div>
          </div>
          <div className="box">
            <div>
              <h1>Mars is no longer viewed as science fiction</h1>
              <p>
                What once felt impossible is now becoming part of real
                conversations about technology, exploration, and the future of
                humanity. With rapid progress in space travel, advanced
                engineering, and private space development, Mars is no longer
                just a dream in movies or books. It is becoming a serious vision
                for the next stage of human civilization.
              </p>
            </div>
          </div>
          <div className="box">
            <div>
              <h1>This is bigger than real estate. This is history</h1>
              <p>
                Mars represents more than land, property, or investment. It
                represents the beginning of a new human chapter — a future where
                civilization is no longer limited to one planet. To be part of
                Mars is to be part of a story that future generations may
                remember as one of humanity’s greatest turning points.
              </p>
            </div>
          </div>
          <div className="box">
            <div>
              <h1>Secure your place in the future today</h1>
              <p>
                The future belongs to those who see possibility before the rest
                of the world catches up. Mars represents a new frontier of
                vision, ambition, and opportunity. Take the first step toward
                becoming part of humanity’s next great chapter.
              </p>
            </div>
          </div>
        </div>
      </div>

      <MarsLegacy />
      <Founder />
      <Meet_Our_Team />
    </Home_page>
  );
};

export default Homepage;
