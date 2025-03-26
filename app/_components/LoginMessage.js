import Link from "next/link";

function LoginMessage() {
  return (
    <div className="grid bg-primary-500 text-white my-2 mx-2 rounded-xl">
      <p className="text-center text-xl py-12 self-center">
        Please{" "}
        <Link href="/login" className="underline ">
          login
        </Link>{" "}
        to reserve this
        <br /> cabin right now
      </p>
    </div>
  );
}

export default LoginMessage;
