import React from "react";
import { Why_mars } from "./Whymars";
import ima from "../../assets/image/6.jpeg";
import ima2 from "../../assets/image/5.jpeg";

const Mars = () => {
  return (
    <Why_mars>
      <div className="images">
        <img src={ima2} alt="ima2" />
      </div>
      <div className="body">
        <div className="main">
          <h2>Why Mars?</h2>

          <p>SpaceX chose Mars because:</p>
          <ul>
            <li>It has water ice</li>
            <li>Days are similar to Earth (24.6 hours)</li>
            <li>It has gravity (about 38% of Earth’s)</li>
            <li>It has an atmosphere</li>
            <li>Temperatures are survivable with technology</li>
          </ul>

          <p>Mars is still extremely hostile though:</p>
          <ul>
            <li>Freezing temperatures</li>
            <li>Radiation exposure</li>
            <li>Dust storms</li>
            <li>Very thin atmosphere</li>
            <li>No breathable oxygen</li>
          </ul>

          <p>
            This is why our CEO Mr Elon Musk needs us and our support to achieve
            a conducive environment for us all.
          </p>

          <h2>The Year 2087</h2>

          <p>The first thing you notice on Mars is the silence.</p>

          <p>
            Not the peaceful silence of Earth — not birds, not wind through
            trees, not distant traffic. Mars feels ancient. Empty. Like a planet
            that has been waiting billions of years for someone to finally
            arrive.
          </p>

          <p>Then, in the distance, you see lights. A city.</p>

          <p>
            Not massive at first. More like a glowing scar across the red
            desert. Transparent domes shimmer beneath the cold sky while giant
            silver Starships stand upright nearby like metallic skyscrapers.
          </p>

          <p>
            Children born on Mars run through pressurized tunnels laughing in
            lower gravity, jumping higher than any human could on Earth.
          </p>

          <h2>Why Live on Mars?</h2>

          <p>
            Living on Mars would be one of the greatest achievements in human
            history because it means humanity is no longer limited to just one
            planet.
          </p>

          <ul>
            <li>A backup for humanity if Earth faces catastrophic disasters</li>
            <li>A center for scientific discoveries</li>
            <li>A place for new technologies and industries</li>
            <li>The beginning of a multiplanetary civilization</li>
          </ul>

          <p>
            Mars would push humanity forward technologically, developing better
            energy systems, medicine, agriculture, AI, robotics, and
            sustainability systems.
          </p>

          <p>
            The first humans born on Mars may see Earth as an ancient origin
            world.
          </p>

          <h2>Why Become a Multiplanetary Civilization?</h2>

          <h3>1. Survival of Humanity</h3>
          <p>
            Humanity currently lives on one planet. A second planet provides
            backup against global disasters like asteroids, pandemics, nuclear
            war, or climate collapse.
          </p>

          <h3>2. Scientific Discoveries</h3>
          <p>
            Living on another planet forces breakthroughs in medicine, robotics,
            energy, agriculture, and space engineering.
          </p>

          <h3>3. Faster Technological Progress</h3>
          <p>
            Survival on Mars would accelerate innovation in spacecraft,
            habitats, food systems, and energy.
          </p>

          <h3>4. New Economic Opportunities</h3>
          <p>
            Space mining, interplanetary transport, orbital manufacturing,
            tourism, and space construction could become major industries.
          </p>

          <h3>5. Exploration and Purpose</h3>
          <p>
            Exploration gives humanity inspiration, ambition, and long-term
            meaning.
          </p>

          <h3>6. Better Understanding of Earth</h3>
          <p>
            Living on Mars teaches humans how fragile ecosystems are and
            improves sustainability on Earth.
          </p>

          <h3>7. Long-Term Expansion</h3>
          <p>Humanity could expand to the Moon, Mars, asteroids, and beyond.</p>

          <h3>8. Cultural Evolution</h3>
          <p>
            Different planets may develop unique cultures, identities, and ways
            of life.
          </p>
        </div>

        <div className="image">
          <img src={ima} alt="ima" />
          <img src={ima2} alt="ima" />
        </div>
      </div>
    </Why_mars>
  );
};

export default Mars;
