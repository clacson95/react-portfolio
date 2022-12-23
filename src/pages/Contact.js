import React, { useState } from "react";
import { Link } from "@chakra-ui/react";
import { validateEmail } from "../utils/helpers";



const Contact = () => {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
  
    const handleInputChange = (e) => {
      const { target } = e;
      const inputType = target.name;
      const inputValue = target.value;
  
      if (inputType === "userName") {
        setUserName(inputValue);
      } else if (inputType === "email") {
        setEmail(inputValue);
      }
    };
  
    const handleFormSubmit = (e) => {
      e.preventDefault();
  
      if (!validateEmail(email) || !userName) {
        setErrorMessage("Invalid email or username");
        return;
      }
  
      setEmail("");
      setUserName("");
    };
  
    return (
      <div className="contactBody">
        <div>
          <label for="exampleFormControlInput1" className="form-label">
            Leave Me A Message!
          </label>
          <input
            value={userName}
            name="userName"
            onChange={handleInputChange}
            type="text"
            className="form-control"
            placeholder="name"
          />
          <br></br>
          <input
            name="email"
            onChange={handleInputChange}
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
            Mailto="steph.cambria.art@gmail.com"
          />
        </div>
        <div>
          <label for="exampleFormControlTextarea1" className="form-label"></label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            placeholder="Questions, comments, concerns..."
            rows={5}
          ></textarea>
        </div>
        <br></br>
        <button className="sendBtn" onClick={handleFormSubmit}>
          Send
        </button>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
  
        <div className="contactText">
          <br></br>
          <Link>caleb.lacson@gmail.com</Link>
          <br></br>
          <Link>https://github.com/StephCambria</Link>
        </div>
      </div>
    );
  }

export default Contact;
