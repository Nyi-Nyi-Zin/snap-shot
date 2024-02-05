import NavLogo from "@/components/navigation/nav-logo";
import UserButton from "./user-button";
import { auth } from "@/server/auth";

async function AppNav() {
  const session = await auth();
  return (
    <nav className="flex items-center justify-between py-4">
      <NavLogo />
      <UserButton user={session?.user} expires={session?.expires!} />
    </nav>
  );
}

export default AppNav;
