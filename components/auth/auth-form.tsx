import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import ProviderLogin from "./provider-login";
import AuthFooter from "./auth-footer";

type AuthFormProps = {
  children: React.ReactNode;
  formTitle: string;
  showProvider: boolean;
  footerLabel: string;
  footerHref: string;
};

function AuthForm({
  children,
  footerHref,
  footerLabel,
  formTitle,
  showProvider,
}: AuthFormProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{formTitle}</CardTitle>
      </CardHeader>
      <CardContent>
        {children} {showProvider && <ProviderLogin />}
      </CardContent>
      <CardFooter>
        <AuthFooter footerHref={footerHref} footerLabel={footerLabel} />
      </CardFooter>
    </Card>
  );
}

export default AuthForm;
