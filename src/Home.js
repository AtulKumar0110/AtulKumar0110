import React, { useState, useContext, useEffect } from "react";
import { auth, db, firestoredb } from "./base";
import { signOut } from "firebase/auth";
import { AuthContext } from "./AuthProvider";
import { collection, addDoc, getDoc, doc } from "firebase/firestore";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import { ref, onValue } from "firebase/database";

function Home() {
    const { currentUser } = useContext(AuthContext);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [sem, setSem] = useState("");
    const [branch, setBranch] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        if (currentUser) {
            const starCountRef = ref(db, "users/" + currentUser.uid);
            onValue(starCountRef, (snapshot) => {
                if (snapshot.exists()) {
                    var data = snapshot.val();
                    setUsername(data.firstName + " " + data.lastName);
                    setEmail(data.email);
                    if (data.email) {
                        const res = getDoc(doc(collection(firestoredb, 'users'),data.email)).then(snap => {
                            setSem(snap.data().Semester);
                            setBranch(snap.data().branch)
                        });
                    }
                }
            });

        }

    }, [currentUser]);



    const clickLogin = () => {
        if (currentUser) {
            signOut(auth);
        } else {
            navigate("/login");
        }
    };

    const clickSignup = () => {
        navigate("/signup");
    };

    const clickContactUs = () => {
        navigate("/contactus");
    };

    return (
        <div className="mainContainer">
            {currentUser && <p>Welcome, <b> {username}</b></p>}
            {currentUser && <p>You have registered in <b>{sem}</b> semester of <b>{branch}</b> branch</p>}
            <div className="buttons">
                <button class="button" onClick={clickLogin}><span>
                    {currentUser ? "Log Out" : "Login"}</span>
                </button>&nbsp;&nbsp;
                {!currentUser && <button class="button" onClick={clickSignup}><span>Sign Up</span></button>}
            </div><br/><br/>
            <button class="button" onClick={clickContactUs}><span>Contact Us</span></button>
        </div>
        
    );
}

export default Home;