import { auth } from "../_lib/auth";

export const metadata = {
  title: "Geust area",
};

export default async function page() {
  // Get session user information
  const session = await auth();
  return (
    <div className="font-semibold text-2xl text-accent-400 mb-7">
      Welcome, {session?.user?.name.split(" ").at(0)}
    </div>
  );
}
