import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

type AuthFooterProps = {
  footerHref: string;
  footerLabel: string;
};

function AuthFooter({ footerHref, footerLabel }: AuthFooterProps) {
  return (
    <Button variant={"link"}>
      <Link href={footerHref}>{footerLabel}</Link>
    </Button>
  );
}

export default AuthFooter;
