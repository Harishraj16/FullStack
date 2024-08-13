import React, { useState } from "react";

export default function Password() {
    let  [Status, setStatus] = useState("");
    let [Password,setPassword] = useState("");

    const handleChangePassword = (e)=>{
        setPassword(e.target.value);
    }

    const Validate = ()=>{
        if(Password.length <1) setStatus("no password entered!");
        else if (Password.length < 8) {
            setStatus("weak");
        }
        else if(Password.length<12){
            setStatus("medium");
        }
        else {
            setStatus("strong");
        }
    }

    const inputStyle = {
        width: "50%",
        padding: "10px",
        marginTop: "10px",
        marginBottom: "10px",
        border: "2px solid #ccc",
        borderRadius: "5px",
        fontSize: "16px",
    };

    const containerStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
    };

    return (
        <div className="password" style={containerStyle}>
            <h1>Password Validator!</h1>
            <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                style={inputStyle}
                value={Password}
                onChange={handleChangePassword}
            />
            <button type="button" id="submit" name="submit" onClick={Validate}>
                Check
            </button>
            <p id="result">{Status}</p>
        </div>
    );
}
