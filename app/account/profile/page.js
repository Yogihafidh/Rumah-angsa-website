import SelectCountry from "@/app/_components/SelectCountry";
import UpdateProfileForm from "@/app/_components/UpdateProfileForm";
import { auth } from "@/app/_lib/auth";
import { getGuest } from "@/app/_lib/data-service";

export const metadata = {
  title: "Update Profile",
};

export default async function Page() {
  // Get session user information
  const session = await auth();

  // Fatching data base on session
  const guest = await getGuest(session.user.email);

  return (
    <div>
      <h2 className="font-semibold text-2xl mb-4">Update profile anda</h2>

      <p className="text-lg mb-8 text-gray-500">
        Memberikan informasi berikut ini akan membuat proses check-in Anda lebih
        cepat dan lancar. Sampai jumpa lagi!
      </p>

      {/* passing server component into client component*/}
      <UpdateProfileForm guest={guest}>
        <SelectCountry
          name="nationality"
          id="nationality"
          className="px-5 py-3 border border-gray-300  w-full shadow-sm rounded-sm"
          defaultCountry={guest.nationality}
        />
      </UpdateProfileForm>
    </div>
  );
}
