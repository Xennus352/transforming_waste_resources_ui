import React from "react";
import LoginForm from "../form/LoginForm";
import { ModalBox } from "./ModalBox";
import RegisterForm from "../form/RegisterForm";
import AddBlogForm from "../app_comp/blog/AddBlogForm";
import AdminAddBlogForm from "../admin_comp/blog/AdminAddBlogForm";
import { CommentModalBox } from "./CommentModalBox";
import Comment from "../form/Comment";
import Product from "../form/Product";

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
        <RegisterForm />
      </ModalBox>

      {/* for user post blog modal  */}
      <ModalBox title={"Creating Post"} id={"create-post-form"}>
        <AddBlogForm />
      </ModalBox>

      {/* for comment modal  */}
      <CommentModalBox title={"Comments!"} id={"comment"}>
        <Comment />
      </CommentModalBox>

      {/* for product create modal  */}
      <CommentModalBox title={"Create Product!"} id={"product"}>
        <Product />
      </CommentModalBox>

      {/* for admin post blog modal  */}
      <ModalBox title={"Creating Blog"} id={"create-blog-form"}>
        <AddBlogForm />
      </ModalBox>

      {/* for admin post handmade modal  */}
      <ModalBox title={"Creating Blog"} id={"create-handmade-form"}>
        <AdminAddBlogForm />
      </ModalBox>
    </div>
  );
};

export default ModalContainer;
