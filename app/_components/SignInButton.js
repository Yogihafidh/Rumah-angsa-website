import Image from "next/image";
import { signInAction } from "../_lib/actions";

function SignInButton() {
  return (
    // Using form because this server component, not client component, so we dont use interactivity like event onClick
    <form action={signInAction}>
      <button className="flex items-center gap-6 text-lg border border-primary-300 px-10 py-4 font-medium cursor-pointer">
        <Image
          src="https://authjs.dev/img/providers/google.svg"
          alt="Google logo"
          height="24"
          width="24"
          unoptimized
        />
        <span>Continue with Google</span>
      </button>
    </form>
  );
}

export default SignInButton;
