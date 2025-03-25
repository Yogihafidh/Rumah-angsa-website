import Link from "next/link";

export default function Page() {
  return (
    <div className="h-full flex items-center flex-col justify-center text-center space-y-3 ">
      <h1 className="text-3xl font-semibold">
        Terima kasih atas reservasi anda
      </h1>

      <Link
        href="/account/reservations"
        className="underline text-xl text-primary-500 inline-block"
      >
        Kelola reservasi anda &rarr;
      </Link>
    </div>
  );
}
