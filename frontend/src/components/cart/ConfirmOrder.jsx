import "../../styles/ConfirmOrder.scss";

import React from "react";

const ConfirmOrder = () => {
  return (
    <section className="confirmOrder">
      <main>
        <h1>Confirm Order</h1>
        <form>
          <div>
            <label for="cod">Cash on Delivery</label>
            <input id="cod" type="radio" name="payment" />
          </div>
          <div>
            <label for="on">Pay Online</label>
            <input id="on" type="radio" name="payment" />
          </div>
          <button type="submit">Place Order</button>
        </form>
      </main>
    </section>
  );
};

export default ConfirmOrder;
