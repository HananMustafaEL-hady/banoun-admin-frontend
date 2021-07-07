import { Formik, Form } from "formik";
import { Link } from "react-router-dom";
import { useState } from "react";
import { withRouter } from "react-router-dom";

import InputField from "./../molecules/inputEdit";

import { Button, Icons } from "./../atoms";
import * as Yup from "yup";
import { login } from "../../services/auth";
import { connect } from "react-redux";
import { Get_User } from "../../redux/actions/types";

const FormFieldLogin = ({ history, dispatch }) => {
  const [alertMessage, setAlertMessage] = useState("");
  const validate = Yup.object({
    // email: Yup.string()
    //   .max(15, "لابد ان تكون 15 حرف على الاقل")
    //   .required("مطلوب"),
    password: Yup.string()
      .min(6, "لابد ان يكون 6 ارقام على الاقل")
      .required("مطلوب"),
  });

  const onSubmit = async (values) => {
    console.log(values);
    const res = await login(values);
    console.log(res);
    if (res.isError) {
      setAlertMessage(res.errorMessage);
      setTimeout(() => {
        setAlertMessage("");
      }, 2000);
    } else {
      sessionStorage.setItem("token", res.data.token);

      // if(res.data.type == "User"){

      //   await dispatch({
      //     type: Get_User,
      //     payload: res.data.data
      //   });
      // }
      // else{
      //   await dispatch({
      //     type: "Get_Profile_Spec",
      //     payload: res.data.data
      //   });
      // }
      history.push("/");
    }
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={validate}
      onSubmit={(values) => onSubmit(values)}
    >
      {(formik) => (
        <Form
          action="#"
          className="text-center content-center justify-center md:mx-10 "
        >
          <h2 className="my-10 lg:my-7 text-lg md:text-xl lg:text-2xl">
            تسجيل الدخول
          </h2>
          {alertMessage !== "" && (
            <div class="flex items-center bg-red-500 border-l-4 border-red-700 py-2 px-3 shadow-md mb-2 w-9/12 justify-self-center align-self-center mx-8">
              <div class="text-white max-w-xs ">{alertMessage}</div>
            </div>
          )}
          <InputField
            className=""
            SpecificStyle="flex mb-6  md:relative md:right-20 "
            iconsProps={{ icon: "text-gray-500 fas fa-user " }}
            textFieldProps={{
              name: "email",
              placeholder: "البريد الالكتروني",
              type: "email",
            }}
          />

          <InputField
            SpecificStyle="flex  md:relative md:right-20 "
            iconsProps={{ icon: "text-gray-500 fas fa-lock " }}
            textFieldProps={{
              name: "password",
              placeholder: "الرقم السرى",
              type: "password",
            }}
          />

          <Button stylee="bg-silver-tree  text-white my-4" type="submit">
            تسجيل الدخول
          </Button>

          <br></br>
        </Form>
      )}
    </Formik>
  );
};

const mapDispatchToProps = (dispatch) => dispatch;

export default withRouter(connect(mapDispatchToProps)(FormFieldLogin));
