import React, { useEffect, useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import db from "@/lib/firebase-config";
import { addDoc, collection } from "firebase/firestore";

const PhoneModal = ({
  price,
  phoneName,
  varientSelected,
  storageSelected,
  networkSelected,
}) => {
  const [phoneValue, setPhoneValue] = useState();
  const [paymentMethod, setPaymentMethod] = useState("paypal");

  const [name, setname] = useState("");
  const [email, setemail] = useState("");

  const [address, setaddress] = useState("");
  const [city, setcity] = useState("");
  const [state, setstate] = useState("");
  const [postCode, setpostCode] = useState("");

  const [paypalAdress, setpaypalAdress] = useState("");
  const [checkAdress, setcheckAdress] = useState("");

  useEffect(() => {
    const payment = document.querySelectorAll(".payment input");
    payment.forEach((pay) => {
      pay.addEventListener("click", () => {
        setPaymentMethod(pay.id);

        if (pay.id === "paypal") {
          payment[1].classList.remove("active");
          pay.classList.add("active");
        } else {
          payment[0].classList.remove("active");
          pay.classList.add("active");
        }
      });
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !name ||
      !email ||
      !phoneValue ||
      !address ||
      !city ||
      !state ||
      !postCode
    ) {
      return alert("Please fill in all the fields");
    }

    if (price === "$0") {
      return alert("Please select a phone");
    }

    try {
      const docRef = await addDoc(collection(db, "orders"), {
        phoneName: phoneName,
        price: price,

        varientSelected: varientSelected,
        storageSelected: storageSelected,
        networkSelected: networkSelected,

        name: name,
        email: email,
        phoneValue: phoneValue,
        paymentMethod: paymentMethod,
        address: address,
        city: city,
        state: state,
        postCode: postCode,
        paypalAdress: paypalAdress,
        checkAdress: checkAdress,
        status: "pending",
        date: new Date().toLocaleDateString(),
      });
    } catch (error) {
      console.log(error);
    }

    setMessage("Order Placed");
  };

  const [message, setMessage] = useState("");

  if (message) {
    return (
      <div className="modal">
        <div className="modal-content">
          <div className="modal-header">
            <h1>Checkout</h1>
            <h3>Estimated Value: {price}</h3>
            <p className="sub">You are buying: {phoneName}</p>
            <h1>{message}</h1>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h1>Checkout</h1>
          <h3>Estimated Value: {price}</h3>
          <p className="sub">You are buying: {phoneName}</p>

          <form>
            <h2>Your Details</h2>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                onChange={(e) => {
                  setname(e.target.value);
                }}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                onChange={(e) => {
                  setemail(e.target.value);
                }}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <PhoneInput
                className="phone"
                id="phone"
                defaultCountry="US"
                placeholder="Enter phone number"
                value={phoneValue}
                onChange={setPhoneValue}
              />
            </div>

            {/* terms and conditoin */}

            <h2>Shipping Details</h2>
            {/* make input with adress line one adress line 2 city state post code with placeholder */}

            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                name="address"
                id="address"
                onChange={(e) => {
                  setaddress(e.target.value);
                }}
                placeholder="Address"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="city">City</label>
              <input
                type="text"
                name="city"
                onChange={(e) => {
                  setcity(e.target.value);
                }}
                id="city"
                placeholder="City"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="state">State</label>
              <input
                type="text"
                name="state"
                onChange={(e) => {
                  setstate(e.target.value);
                }}
                id="state"
                placeholder="State"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="postCode">Post Code</label>
              <input
                type="text"
                name="postCode"
                id="postCode"
                onChange={(e) => {
                  setpostCode(e.target.value);
                }}
                placeholder="Post Code"
                required
              />
            </div>

            <h2>Payment Details</h2>
            <div className="payment">
              <input type="radio" name="payment" id="paypal" checked />
              <label htmlFor="paypal">Paypal</label>
              <input type="radio" name="payment" id="check" />
              <label htmlFor="check">Check</label>
            </div>
            {paymentMethod === "paypal" ? (
              <>
                <div className="form-group">
                  <label htmlFor="paypalAddress">Paypal Address</label>
                  <input
                    type="text"
                    name="paypalAddress"
                    id="paypalAddress"
                    onChange={(e) => {
                      setpaypalAdress(e.target.value);
                    }}
                    placeholder="Paypal Address"
                    required
                  />
                </div>
              </>
            ) : (
              <>
                <div className="form-group">
                  <label htmlFor="checkAddress">Check Address</label>
                  <input
                    type="text"
                    onChange={(e) => {
                      setcheckAdress(e.target.value);
                    }}
                    name="checkAddress"
                    id="checkAddress"
                    placeholder="Check Address"
                    required
                  />
                </div>
              </>
            )}
            <div className="terms">
              <input type="checkbox" name="terms" id="terms" />
              <label htmlFor="terms">
                I agree to the{" "}
                <a href="https://www.google.com">Terms and Conditions</a>
              </label>
            </div>

            <div className="submit">
              <button
                type="submit"
                onClick={handleSubmit}
                className="btn active"
              >
                Submit
              </button>
            </div>
          </form>

          <div className="close">
            <AiOutlineCloseCircle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneModal;
