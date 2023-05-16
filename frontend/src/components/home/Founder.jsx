import React from "react";
import { motion } from "framer-motion";
import me from "../../assets/bg2.jpg";
import "../../styles/Founder.scss";

const Founder = () => {
  const options = {
    initial: {
      x: "-100%",
      opacity: 0,
    },
    whileInView: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <section className="founder">
      <motion.div {...options}>
        <img src={me} alt="Founder" height={200} width={200} />
        <h2>Gaurav Khinchi</h2>

        <p>
          Hey, Everyone I am Gaurav Khinchi , the owner of KaafeHolic. <br />{" "}
          Our Aim is to serve best drinks and beverges to you.
        </p>
      </motion.div>
    </section>
  );
};

export default Founder;
