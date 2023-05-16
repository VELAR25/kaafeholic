import React from "react";
import "../../styles/OrderDetails.scss";

const OrderDetails = () => {
  return (
    <section className="orderDetails">
      <main>
        <h1>Order Details</h1>
        <div>
          <h1>Shipping</h1>
          <p>
            <b>Address</b>
            {"273/30 shyam Nagar"}
          </p>
        </div>
        <div>
          <h1>Contact</h1>
          <p>
            <b>Name</b>
            {"Gaurav"}
          </p>
          <p>
            <b>Phone</b>
            {"132131232"}
          </p>
        </div>
        <div>
          <h1>Status</h1>
          <p>
            <b>OrderStatus</b>
            {"Processing"}
          </p>

          <p>
            <b>Placed At</b>
            {"23-02-2023"}
          </p>
          <p>
            <b>Delivered At</b>
            {"25-02-2023"}
          </p>
        </div>
        <div>
          <h1>Payment</h1>
          <p>
            <b>Payment Method</b>
            {"Online"}
          </p>

          <p>
            <b>Payment Reference</b>
            {"#afdstas"}
          </p>
          <p>
            <b>Paid At</b>
            {"23-02-2023"}
          </p>
        </div>
        <div>
          <h1>Amount</h1>
          <p>
            <b>Items Total</b>
            &#x20B9;{"2132"}
          </p>
          <p>
            <b>Shipping Charges</b>
            &#x20B9;{"200"}
          </p>
          <p>
            <b>Tax</b>
            &#x20B9;{"232"}
          </p>
          <p>
            <b>Total Amount</b>
            &#x20B9;{"2564"}
          </p>
        </div>
        <article>
          <h1>Ordered Items</h1>
          <div>
            <h4>Cheese Burger</h4>
            <div>
              <span> {12}</span> X <span>{75}</span>
            </div>
          </div>
          <div>
            <h4>Veg Cheese Burger </h4>
            <div>
              <span>{10}</span> X <span>{100}</span>
            </div>
          </div>
          <div>
            <h4>Burger with French Fries</h4>
            <div>
              <span>{5}</span> X <span>{150}</span>
            </div>
          </div>
          <div>
            <h4
              style={{
                fontWeight: 800,
              }}
            >
              Sub Total
            </h4>
            <div style={{ fontWeight: 800 }}>&#x20B9;{2132}</div>
          </div>
        </article>
      </main>
    </section>
  );
};

export default OrderDetails;
