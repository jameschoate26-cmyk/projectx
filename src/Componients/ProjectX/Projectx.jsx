import React from "react";
import { Project } from "./Projectx.js";
import image from "../../assets/image/1.jpeg";
import image2 from "../../assets/image/4.jpeg";
import mars from "../../assets/image/3.jpeg";

const ProjectX = () => {
  return (
    <Project>
      <div className="images">
        <img src={mars} alt="Mars" />
      </div>

      <div className="body">
        <div className="investment-content">
          <h2>Why This Project Deserves Serious Investment</h2>

          <p>
            This project is not built on hype—it is built on control, planning,
            and resource ownership.
          </p>

          <p>
            The survey and construction plan shown above demonstrates a simple
            principle that has created wealth throughout history: those who
            secure strategic land and resources early benefit the most when
            development expands.
          </p>

          <p>
            Unlike speculative ventures that rely purely on demand, this project
            begins with something tangible:
          </p>

          <ul>
            <li>Defined zones and mapped resources instead of guesswork.</li>
            <li>
              Infrastructure planning before expansion, reducing unnecessary
              risk.
            </li>
            <li>
              Access to valuable materials and energy sources, creating multiple
              revenue opportunities rather than depending on a single market.
            </li>
            <li>
              A phased approach, allowing capital to be deployed gradually and
              efficiently.
            </li>
            <li>
              Long-term scarcity value, since locations with proven resources
              and established infrastructure naturally become more valuable over
              time.
            </li>
          </ul>

          <h3>The Investment Case</h3>

          <p>
            Think of it the same way investors once viewed undeveloped oil
            fields, mining regions, or prime coastal land. The greatest returns
            did not come from those who arrived after cities were built—they
            came from those who recognized the value of strategic assets before
            everyone else.
          </p>

          <p>This is not merely investing in land or structures.</p>

          <p>It is investing in:</p>

          <ul>
            <li>Resource rights</li>
            <li>Infrastructure</li>
            <li>Logistics</li>
            <li>Energy production</li>
            <li>Future commercial activity</li>
          </ul>

          <p>
            <strong>The objective is simple:</strong>
          </p>

          <p>
            Acquire and develop assets in locations with proven resources and
            infrastructure potential, creating value through ownership, access,
            and controlled expansion.
          </p>

          <p>
            In every era, wealth has been created by those who understood one
            truth:
          </p>

          <blockquote>
            “Resources create industries, industries create communities, and
            communities create value.”
          </blockquote>

          <p>
            That is what makes a project like this compelling—not because of
            where it is, but because of what it controls and what it can
            produce.
          </p>
        </div>
        <div className="imges">
          <img src={image} alt="image" />
          <img src={image2} alt="image2" />
        </div>
      </div>
    </Project>
  );
};

export default ProjectX;
