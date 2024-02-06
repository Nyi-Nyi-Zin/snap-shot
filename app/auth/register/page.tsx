import AuthForm from "@/components/auth/auth-form";
import React from "react";

function Register() {
  return (
    <AuthForm
      formTitle="Register new account"
      footerHref="/auth/login"
      footerLabel="Already have an account?"
      showProvider
    >
      <h2>Register form</h2>
    </AuthForm>
  );
}

export default Register;
