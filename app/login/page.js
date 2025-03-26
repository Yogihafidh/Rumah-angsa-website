import SignInButton from "../_components/SignInButton";
import SubmitButton from "../_components/SubmitButton";
import { signIn } from "../_lib/auth";

export const metadata = {
  title: "Login",
};

export default function Page() {
  return (
    <div className="grid place-items-center ">
      <div
        className="flex flex-col gap-10 mt-10 items-center border border-gray-200 rounded-2xl shadow-sm py-10 px-10 w-130 
    "
      >
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold">Selamat Datang Kembali</h2>
          <p>Silakan masukkan detail Anda untuk masuk</p>
        </div>

        <form
          action={async (formData) => {
            "use server";
            const data = Object.fromEntries(formData); // Ubah FormData menjadi objek
            await signIn("credentials", {
              ...data,
              redirect: "/account/reservations",
            });
          }}
          className="text-lg flex gap-5 flex-col w-full"
        >
          <div className="space-y-4">
            <label htmlFor="fullName">Nama Lengkap</label>
            <input
              placeholder="Yogi Example"
              name="fullName"
              type="text"
              className="px-5 py-3 w-full rounded-lg border-2 border-gray-300"
            />
          </div>

          <div className="space-y-4 mb-5">
            <label htmlFor="email">Email</label>
            <input
              placeholder="yogiexample@gmail.com"
              type="email"
              name="email"
              className="px-5 py-3 w-full rounded-lg border-2 border-gray-300"
            />
          </div>

          <SubmitButton pendingLabel="Sign in...">Sign In</SubmitButton>
        </form>

        <div className="flex items-center gap-4 w-full">
          <hr className="w-full border-gray-300" />
          <p>OR</p>
          <hr className="w-full border-gray-300" />
        </div>

        <SignInButton />
      </div>
    </div>
  );
}
