import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

type AuthFooterProps = {
  footerHerf: string;
  footerLabel: string;
};

function AuthFooter({ footerHerf, footerLabel }: AuthFooterProps) {
  return (
      <Button variant={"link"} asChild className="w-full">
      <Link href={footerHerf} className="text-right">
        {footerLabel}
      </Link>
    </Button>
  );
}

export default AuthFooter;
