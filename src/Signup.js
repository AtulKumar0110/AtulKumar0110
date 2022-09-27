import React, { useState } from "react";
import { auth, db, firestoredb } from "./base";
import "./Signup.css";
import { collection, addDoc, setDoc, doc } from "firebase/firestore";
import { AuthErrorCodes, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { ref, set } from "firebase/database";

const SignUp = () => {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [sem, setSem] = useState("");
    const [branch, setBranch] = useState("");
    const [status, setStatus] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        function onRegister() {
            createUserWithEmailAndPassword(auth, email, password)
                .then(async (userCredential) => {
                    set(ref(db, "users/" + userCredential.user.uid), {
                        firstName: firstName,
                        lastName: lastName,
                        email: email,
                    });
                    const data = {
                        email: email,
                        Semester: sem,
                        branch: branch,
                    };

                    const res = await setDoc(doc(firestoredb, "users", email), data);
                    
                    setStatus("Registration Successfull!");
                })
                .catch((error) => setStatus(error.code?.substring(5)));
        }
        onRegister();
    };

    const navigateHome = () => {
        navigate('/');
    };
    const navigateLogin = () => {
        navigate('/login');
    };

    const clickContactUs = () => {
        navigate("/contactus");
    };

    return (
        <div>
            <form className="signupForm" onSubmit={handleSubmit}>
                <b id="error">{status}</b>
                <input
                    placeholder="first name"
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                ></input>
                <input
                    placeholder="last name"
                    onChange={(e) => setLastName(e.target.value)}
                    required
                ></input>
                <input
                    placeholder="email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    type="email"
                ></input>
                <input
                    placeholder="semester"
                    onChange={(e) => setSem(e.target.value)}
                    required
                    type="number"
                ></input>
                <input
                    placeholder="branch"
                    onChange={(e) => setBranch(e.target.value)}
                    required
                    type="string"
                ></input>
                <input
                    placeholder="password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    type="password"
                ></input>
                <button class="button"><span>SignUp</span></button>
                <p>Already Registered? <button class="button" onClick={navigateLogin}><span>Login</span></button></p>
            </form>
            <button class="button" onClick={clickContactUs}><span>Contact Us</span></button>
        </div>
    );
};

export default SignUp;