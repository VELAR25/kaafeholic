import React from "react";
import "../../styles/Shipping.scss";
import { Country, State } from "country-state-city";

const Shipping = () => {
  return (
    <section className="shipping">
      <main>
        <h1>Shipping Details</h1>
        <form>
          <div>
            <label htmlFor="house">H.No.</label>
            <input type="text" placeholder="Enter House No." id="house" />
          </div>
          <div>
            <label htmlFor="city">City</label>
            <input type="text" placeholder="Enter City" id="city" />
          </div>
          <div>
            <label htmlFor="country">Country</label>
            <select>
              <option value="">Country</option>
              {Country &&
                Country.getAllCountries().map((i) => (
                  <option value={i.isoCode} key={i.isoCode}>
                    {i.name}
                  </option>
                ))}
            </select>
          </div>
          <div>
            <label htmlFor="state">State</label>
            <select>
              <option value="">State</option>
              {State &&
                State.getStatesOfCountry("IN").map((i) => (
                  <option value={i.isoCode} key={i.isoCode}>
                    {i.name}
                  </option>
                ))}
            </select>
          </div>
          <div>
            <label htmlFor="pin">Pincode</label>
            <input type="number" placeholder="Enter Pincode" id="pin" />
          </div>
          <div>
            <label htmlFor="no">Phone No.</label>
            <input type="number" placeholder="Enter Phone No." id="pin" />
          </div>
          <button type="submit">Confirm order</button>
        </form>
      </main>
    </section>
  );
};

export default Shipping;
