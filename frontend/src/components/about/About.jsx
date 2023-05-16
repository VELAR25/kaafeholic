import React from "react";
import { Link } from "react-router-dom";
import { RiFindReplaceLine } from "react-icons/ri";
import me from "../../assets/gaurav.jpg";
import "../../styles/About.scss";
const About = () => {
  return (
    <section className="about">
      <main>
        <h1>About Us</h1>
        <article>
          <h4>KAAFEHOLIC</h4>
          <p>
            <b
              style={{
                color: "red",
              }}
            >
              Slow Down And Enjoy Your Coffee
            </b>
            <br />
            <i>
              {`You don't experience life  by drinking coffee fast. You experience life by savoring every last drop.`}
            </i>
          </p>
          <p>
            <b>
              Explore the various type of Food and Burgers. Click below to see
              the Menu .
            </b>
          </p>
          <Link to="/">
            <RiFindReplaceLine />
          </Link>
        </article>
        <div>
          <h2>Founder</h2>
          <article>
            <div>
              <img src={me} alt="Founder" />
              <h3>Gaurav Khinchi</h3>
            </div>
            <p>
              <b>
                I am Gaurav Khinchi , the owner of KAAFEHOLIC. Affiliated to
                Good Taste...
              </b>
            </p>
          </article>
        </div>
      </main>
    </section>
  );
};

export default About;
