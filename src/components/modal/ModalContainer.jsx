import React from "react";
import LoginForm from '../form/LoginForm'
import {ModalBox} from "./ModalBox";
import RegisterForm from "../form/RegisterForm";
import AddBlogForm from "../app_comp/blog/AddBlogForm";


const ModalContainer = () => {
  return (
    <div>
      {/* for login modal  */}
      <ModalBox title={"Login"} id={"login-form"}>
        <div className="m-2">
          <LoginForm />
        </div>
      </ModalBox>
      

      {/* for register modal  */}
      <ModalBox title={"Register"} id={"register-form"}>
        <RegisterForm/>
      </ModalBox>


      {/* for add blog modal  */}
      <ModalBox title={"Creating Post"} id={"create-post-form"}>
        <AddBlogForm/>
      </ModalBox>
    </div>
  );
};

export default ModalContainer;