import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Form from "../../Components/Form/Form";
import "./Login.css";
import Logo from "../../Components/Logo/Logo";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../State";
import useAuth from "../../Hooks/useAuth";

const LOGIN_URL = "/api/login";

function Login() {
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const { loginSuccess } = bindActionCreators(actionCreators, dispatch);

    // STATES
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const [inputError, setInputError] = useState(false);

    // HANDLE AUTHENTICATION & NAVIGATION
    useAuth("AUTH");

    // HANDLERS
    const handleLogin = (e) => {
        e.preventDefault();

        if (email === "") {
            setInputError(true);
            setEmailError("Email input cannot be empty");
        }

        if (password === "") {
            setInputError(true);
            setPasswordError("Password input cannot be empty");
        }
        if (inputError === false) {
            let loginBody = JSON.stringify({ email, password });
            axios
                .post(LOGIN_URL, loginBody, {
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
                .then((response) => {
                    if (response.data.success) {
                        localStorage.setItem("authToken", response.data.token);
                        clearFields();

                        loginSuccess(response.data);

                        // Navigate to the desired page
                        navigate("/inventory", { replace: true });
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    };

    const clearFields = () => {
        setEmail("");
        setEmailError("");
        setPassword("");
        setPasswordError("");
    };

    return (
        <div className="w-[100vw] h-[100vh] "style={{ backgroundColor: "#2484ED" }}>
    

            <div className="flex flex-row justify-center items-center flex-wrap">
                <div className="w-[30vw] h-[100vh]" >
                <p className="text-lg  font-bold text-white  text-center pt-10">
                Garrison Engineering & Robotics Society
</p>
                    <Form
                        formHead={<Logo />}
                        formFoot={{
                            name: "Don't have an account? Sign up",
                            link: "/signup",
                        }}
                        formData={{
                            inputs: [
                                {
                                    key: "email",
                                    type: "email",
                                    name: "email",
                                    placeholder: "Enter your email address",
                                    handler: (e) => setEmail(e.target.value),
                                    error: emailError,
                                },
                                {
                                    key: "password",
                                    type: "password",
                                    name: "password",
                                    placeholder: "Enter your password",
                                    handler: (e) => setPassword(e.target.value),
                                    error: passwordError,
                                },
                            ],
                        }}
                        formButton={"Log in"}
                        handlers={{
                            formHandler: handleLogin,
                        }}
                    />
                         <p className="text-lg text-white text-center mb-12 px-10 py-14">
        Made with ❤️ by Karimullah <br></br>
        ©2023 7Up's Studio All Rights Reserved
</p>
                </div>
            </div>
        </div>
    );
}

export default Login;
