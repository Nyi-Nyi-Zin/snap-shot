import AuthForm from "@/components/auth/auth-form";
import React from "react";

function Login() {
  return (
    <AuthForm
      formTitle="Login to your account"
      footerLabel="Don't have an account?"
      footerHref="/auth/register"
      showProvider
    >
      <h2>Login Form</h2>
    </AuthForm>
  );
}

export default Login;
