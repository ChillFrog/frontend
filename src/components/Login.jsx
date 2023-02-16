import React from "react";
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import sharedVideo from "../assets/share.mp4";
import { useNavigate } from "react-router-dom";
import { client } from "../client";
import jwt_decode from "jwt-decode";

function Login() {
  const user = false;
  const navigate = useNavigate();
  const responseGoogle = (response) => {
    const decoded = jwt_decode(response.credential);
    localStorage.setItem("user", JSON.stringify(decoded));
    const { name, sub, picture } = decoded;
    const doc = {
      _id: sub,
      _type: "user",
      userName: name,
      image: picture,
    };
    console.log("SUCCESS");
    client.createIfNotExists(doc).then(() => {
      navigate("/", { replace: true });
    });
  };
  return (
    <div className="flex justify-center items-center flex-col h-screen">
      <div className="relative w-full h-full">
        <video
          src={sharedVideo}
          loop
          controls={false}
          muted
          autoPlay
          className="w-full h-full object-cover"
        ></video>
      </div>
      <div className="absolute flex flex-col justify-center items-center top-0 right-0 bottom-0 left-0 bg-blackOverlay ">
        {user ? (
          <div>Logged In</div>
        ) : (
          <GoogleLogin onSuccess={responseGoogle} onError={responseGoogle} />
        )}
      </div>
    </div>
  );
}

export default Login;
