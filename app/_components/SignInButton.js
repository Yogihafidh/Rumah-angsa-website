import Image from "next/image";
import { signInAction } from "../_lib/actions";

function SignInButton() {
  return (
    // Using form because this server component, not client component, so we dont use interactivity like event onClick
    <form action={signInAction} className="w-full flex items-center">
      <button className="w-full flex items-center justify-center gap-6 text-lg border border-gray-400 bg-gray-100 hover:bg-gray-300 rounded-lg px-10 py-4 font-medium cursor-pointer">
        <Image
          src="https://authjs.dev/img/providers/google.svg"
          alt="Google logo"
          height="26"
          width="26"
          unoptimized
        />
        <span>Continue with Google</span>
      </button>
    </form>
  );
}

export default SignInButton;
