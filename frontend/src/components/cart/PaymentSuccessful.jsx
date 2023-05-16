import React from "react";
import "../../styles/PaymentSuccessful.scss";
import { Link } from "react-router-dom";

const PaymentSuccessful = () => {
  return (
    <section className="paymentSuccessful">
      <main>
        <div>
          <h1>Order Confirmed</h1>
          <p>Order Placed Successfully. You can check the order status below</p>
          <Link to="/myorders">Check Status</Link>
        </div>
      </main>
    </section>
  );
};

export default PaymentSuccessful;
