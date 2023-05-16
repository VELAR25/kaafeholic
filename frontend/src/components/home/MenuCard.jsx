import React from "react";
import { motion } from "framer-motion";
import "../../styles/Menu.scss";

const MenuCard = ({ itemNum, itemSrc, price, title, handler, delay }) => {
  return (
    <motion.div
      className="menuCard"
      initial={{
        x: "-100%",
        opacity: 0,
      }}
      whileInView={{
        x: 0,
        opacity: 1,
      }}
      transition={{ delay }}
    >
      <div>Item {itemNum}</div>
      <main>
        <img src={itemSrc} alt={itemNum} height={200} width={200} />
        <h5>&#x20B9;{price}</h5>
        <p>{title}</p>

        <button onClick={() => handler(itemNum)}>Buy Now</button>
      </main>
    </motion.div>
  );
};

export default MenuCard;
