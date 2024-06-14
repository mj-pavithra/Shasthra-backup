import React from "react";
import SignupForm from "../Forms/SignupForm";
import "../Styles/SignUpPage.css";

const SignUpPage: React.FC = () => {
  return (
    <div className="signup-page">
      <h1>Sign Up</h1>
      <SignupForm />
    </div>
  );
};

export default SignUpPage;