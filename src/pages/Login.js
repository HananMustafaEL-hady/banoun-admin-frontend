import React from "react";
import { LeftSideLogin } from "../components/organism/LeftSideLogin";
import FormFieldLogin from "../components/organism/loginForm";
const Login = () => {
  return (
    <div className="grid md:grid-cols-1 lg:grid-cols-2 ">
      <FormFieldLogin />
      <LeftSideLogin />
    </div>
  );
};
export default Login;
