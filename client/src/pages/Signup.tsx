import React from "react";
import signupImg from "../assets/signup.webp";
import Template from "../components/Login/Template";

const Signup: React.FC = () => {
  return (
    <Template
      title="Start Your Mental Health Journey Today"
      description1="Join a community focused on self-care and emotional well-being."
      description2="Access tools to support your mental health every step of the way."
      image={signupImg}
      formType="signup"
    />
  );
};

export default Signup;
