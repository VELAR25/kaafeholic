import React from "react";
import MenuCard from "./MenuCard";
import burg1 from "../../assets/burg1.jpg";
import burg2 from "../../assets/burg2.jpg";
import burg3 from "../../assets/burg3.jpg";
import fries from "../../assets/fries.jpg";
import oreo from "../../assets/oreo.jpg";
import mojito from "../../assets/mojito.jpg";
import choc_cake from "../../assets/choc_cake.jpg";
import chat_papdi from "../../assets/chat_papdi.jpg";
import chowmein from "../../assets/chowmein.jpg";
import combo from "../../assets/combo.jpg";
import pan_cake from "../../assets/pan_cake.jpg";
import pizza from "../../assets/pizza.jpg";
import pulav from "../../assets/pulav.jpg";
import r_pasta from "../../assets/r_pasta.jpg";
import w_pasta from "../../assets/w_pasta.jpg";
import spicy_fries from "../../assets/spicy_fries.jpg";
import tikka from "../../assets/tikka.jpg";
import van_cake from "../../assets/van_cake.jpg";
import veg_roll from "../../assets/veg_roll.jpg";
import wraps from "../../assets/wraps.jpg";

import "../../styles/Menu.scss";

const Menu = () => {
  const addToCartHandler = (itemNum) => {};

  return (
    <section id="menu">
      <h1>MENU</h1>
      <div>
        <MenuCard
          itemNum={1}
          itemSrc={burg1}
          price={200}
          title="Cheese Burger"
          handler={addToCartHandler}
          delay={0.1}
        />

        <MenuCard
          itemNum={2}
          itemSrc={burg2}
          price={150}
          title="Aloo Patti Burger"
          handler={addToCartHandler}
          delay={0.3}
        />

        <MenuCard
          itemNum={3}
          itemSrc={burg3}
          price={400}
          title="Double Loaded Burger"
          handler={addToCartHandler}
          delay={0.5}
        />
        <MenuCard
          itemNum={4}
          itemSrc={oreo}
          price={120}
          title="Oreo Shake"
          handler={addToCartHandler}
          delay={0.6}
        />
        <MenuCard
          itemNum={5}
          itemSrc={mojito}
          price={120}
          title="Mojito Drink"
          handler={addToCartHandler}
          delay={0.8}
        />
        <MenuCard
          itemNum={6}
          itemSrc={fries}
          price={80}
          title="French Fries"
          handler={addToCartHandler}
          delay={1}
        />
        <MenuCard
          itemNum={7}
          itemSrc={chat_papdi}
          price={60}
          title="Aloo Papdi Chat"
          handler={addToCartHandler}
          delay={1.1}
        />
        <MenuCard
          itemNum={8}
          itemSrc={pizza}
          price={300}
          title="8'inch PIZZA"
          handler={addToCartHandler}
          delay={1.2}
        />
        <MenuCard
          itemNum={9}
          itemSrc={wraps}
          price={80}
          title="Wraps"
          handler={addToCartHandler}
          delay={0.1}
        />
        <MenuCard
          itemNum={10}
          itemSrc={pan_cake}
          price={50}
          title="Honey Pan Cake"
          handler={addToCartHandler}
          delay={0.3}
        />
        <MenuCard
          itemNum={11}
          itemSrc={choc_cake}
          price={120}
          title="Chocolate Pastry"
          handler={addToCartHandler}
          delay={0.5}
        />
        <MenuCard
          itemNum={12}
          itemSrc={van_cake}
          price={80}
          title="Vanilla Pastry"
          handler={addToCartHandler}
          delay={0.7}
        />
        <MenuCard
          itemNum={13}
          itemSrc={r_pasta}
          price={150}
          title="Spicy Red Pasta"
          handler={addToCartHandler}
          delay={0.8}
        />
        <MenuCard
          itemNum={14}
          itemSrc={w_pasta}
          price={150}
          title="White Pasta"
          handler={addToCartHandler}
          delay={1}
        />
        <MenuCard
          itemNum={15}
          itemSrc={combo}
          price={500}
          title="Combo - eatster "
          handler={addToCartHandler}
          delay={1.2}
        />
        <MenuCard
          itemNum={16}
          itemSrc={veg_roll}
          price={80}
          title="Veg Roll"
          handler={addToCartHandler}
          delay={1.4}
        />
      </div>
    </section>
  );
};

export default Menu;
