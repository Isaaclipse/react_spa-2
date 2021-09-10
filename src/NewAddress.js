import "./NewAddress-styles.css";
import logo from "./assets/logo.png"; // relative path to image
import React, { useEffect, useState } from "react";
import { StrictMode } from "react";
import ReactDOM from "react-dom";
 
const defaultForm = {
  name: "",
  address1: "",
  address2: "",
  city: "",
  state: "",
  zip: "",
  country: ""
};

const s = (
  <script
    src="https://cdn.lob.com/lob-address-elements/2.0.0/lob-address-elements.min.js"
    data-lob-key="live_pub_5019fedf62ba65df198465d42dad4ea" 
    data-lob-primary-id="name"
  ></script>
);

export default function NewAddress() {
  const [formData, setFormData] = useState(defaultForm);
  const getFormValue = (key) => formData[key];

  // Adds script tag after form renders
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
    "https://cdn.lob.com/lob-address-elements/2.0.0/lob-address-elements.min.merged.js"
    ;
    script.async = true;
    script.setAttribute(
      "data-lob-key",
      "live_pub_47353821564ff863e02b8f975302357"
    );
    script.setAttribute("data-lob-primary-value", "true");
    document.body.appendChild(script);
  }, []);

  const setFormValue = (key) => (e) =>
    setFormData({ ...formData, [key]: e.target.value });

  return (
    <div className="NewAddress">
      <div className="formContainer">
        <h3>
          <img src={logo} alt="React Logo" />
          <span>Address Form</span>
        </h3>
        <form action="/api/v222/add-address" id="demo_form">
        <div className="field">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              onChange={setFormValue("name")}
              value={getFormValue("name")}
            />
          </div>
          <div className="field">
            <label htmlFor="address1">Address 1</label>
            <input
              id="address1"
              onChange={setFormValue("address1")}
              value={getFormValue("address1")}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
            />
          </div>
          <div className="field">
            <label htmlFor="address2">Address 2</label>
            <input
              id="address2"
              onChange={setFormValue("address2")}
              value={getFormValue("address2")}
            />
          </div>
          <div className="field">
            <label htmlFor="city">City</label>
            <input
              id="city"
              onChange={setFormValue("city")}
              value={getFormValue("city")}
            />
          </div>
          <div className="field">
            <label htmlFor="state">State</label>
            <input
              id="state"
              onChange={setFormValue("state")}
              value={getFormValue("state")}
            />
          </div>
          <div className="field">
            <label htmlFor="zip">Zip</label>
            <input
              id="zip"
              onChange={setFormValue("zip")}
              value={getFormValue("zip")}
            />
          </div>
          <div className="field">
            <label htmlFor="country">Country</label>
            <input
              id="country"
              onChange={setFormValue("country")}
              value={getFormValue("country")}
            />
          </div>
          {/* IMPORTANT:
           * The submit button must be an input of type submit
           * in order htmlFor the AV Script to function properly
           */}
          <input
            id="submit-button"
            className="btnSubmit"
            type="submit"
            value="Submit"
          ></input>
        </form>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <NewAddress />
  </StrictMode>,
  rootElement
);

