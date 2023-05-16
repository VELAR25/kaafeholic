import React from "react";
import "../../styles/Cart.scss";
import burg1 from "../../assets/burg1.jpg";
import burg2 from "../../assets/burg2.jpg";
import burg3 from "../../assets/burg3.jpg";
import { Link } from "react-router-dom";

const CartItem = ({ value, title, img, increment, decrement }) => (
  <div className="cartItem">
    <div>
      <h4>{title}</h4>
      <img src={img} alt="Item" />
    </div>
    <div>
      <button onClick={decrement}>-</button>
      <input type="number" readOnly value={value} />
      <button onClick={increment}>+</button>
    </div>
  </div>
);

const Cart = () => {
  const increment = (item) => {};
  const decrement = (item) => {};

  return (
    <section className="cart">
      <main>
        <CartItem
          title="Burger"
          value={0}
          img={burg1}
          increment={() => increment(1)}
          decrement={() => decrement(1)}
        />
        <CartItem
          title="Cheese Burger"
          value={0}
          img={burg2}
          increment={() => increment(2)}
          decrement={() => decrement(2)}
        />
        <CartItem
          title="Burger with French Fries"
          value={0}
          img={burg3}
          increment={() => increment(3)}
          decrement={() => decrement(3)}
        />

        <article>
          <div>
            <h4>Sub Total</h4>
            <p>&#x20B9;{2000}</p>
          </div>
          <div>
            <h4>Tax</h4>
            <p>&#x20B9;{2000 * 0.18}</p>
          </div>
          <div>
            <h4>Shipping</h4>
            <p>&#x20B9;{200}</p>
          </div>
          <div>
            <h4>Net Total</h4>
            <p>&#x20B9;{2200 + 2000 * 0.18}</p>
          </div>
          <Link to="/shipping">Checkout</Link>
        </article>
      </main>
    </section>
  );
};

export default Cart;
