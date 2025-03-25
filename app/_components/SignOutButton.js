import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/solid";
import { signOutAction } from "../_lib/actions";

function SignOutButton() {
  return (
    <form action={signOutAction}>
      <button className="py-3 px-5  transition-colors flex items-center gap-4 font-semibold w-full cursor-pointer hover:text-red-500">
        <ArrowRightOnRectangleIcon className="h-5 w-5" />
        <span>Sign out</span>
      </button>
    </form>
  );
}

export default SignOutButton;
