import React from "react";
import loginImg from "../assets/login.webp";
import Template from "../components/Login/Template";

const Login: React.FC = () => {
  return (
    <Template
      title="Welcome Back to Your Journey"
      description1="Take a step towards better mental well-being."
      description2="Empowering you to manage stress, anxiety, and more."
      image={loginImg}
      formType="login"
    />
  );
};

export default Login;
