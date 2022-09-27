import React, { useState } from "react";
import "./Contactus.css";
import { auth, db, firestoredb } from "./base";
import { collection, addDoc, setDoc, doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

function generateId() {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < 8; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * 
charactersLength));
 }
 return result;
}

const Contactus = () => {
  const [email, setEmail] = useState("");
  const [question, setQuestion] = useState("");
  const [status, setStatus] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    async function onRegister() {
      try {
        const data = {
          email: email,
          question: question,
        };
        const res = await setDoc(doc(firestoredb, "contactus", generateId()), data);
        setEmail("");
        setQuestion("");
        setStatus("Thank you! We will contact you Shortly!");
      }
      catch (e) { setStatus("Something went wrong! Please try again!"); }
    }
    onRegister();
  };

  const navigateHome = () => {
    navigate('/');
  };

  return (
    <div>
      <form className="contactForm" onSubmit={handleSubmit}>
        <b id="error">{status}</b>
        <h2>Contact Us!</h2><br/>
        <input
          placeholder="email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <textarea
          placeholder="Question"
          type="textarea"
          onChange={(e) => setQuestion(e.target.value)}
        ></textarea>
        <button class="button"><span>Submit</span></button>

      </form>
    </div>
  );
};

export default Contactus;