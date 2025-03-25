import SignInButton from "../_components/SignInButton";

export const metadata = {
  title: "Login",
};

export default function Page() {
  return (
    <div className="grid place-items-center ">
      <div
        className="flex flex-col gap-10 mt-10 items-center border border-gray-200 rounded-2xl shadow-sm py-10 px-10 w-150 
    "
      >
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold">Selamat Datang Kembali</h2>
          <p>Silakan masukkan detail Anda untuk masuk</p>
        </div>

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
