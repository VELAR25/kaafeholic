import React from "react";
import { AiFillInstagram, AiFillYoutube, AiFillLinkedin } from "react-icons/ai";
import "../../styles/Footer.scss";

const Footer = () => {
  return (
    <footer>
      <div>
        <h2>KAAFEHOLIC</h2>
        <p>Coffee and Friends make the Perfect Blend</p>
        <br />
        <em>We Give attention to genuine feedback</em>
        <br />
        <strong>All right received @kaafeholic</strong>
      </div>
      <aside>
        <h4>Follow Us</h4>
        <a href="https://www.instagram.com/gaurav_kh02">
          <AiFillInstagram />
        </a>
        <a href="https://www.linkedin.com/in/gaurav-khinchi-ba3989241/">
          <AiFillLinkedin />
        </a>
        <a href="https://www.youtube.com">
          <AiFillYoutube />
        </a>
      </aside>
    </footer>
  );
};

export default Footer;
