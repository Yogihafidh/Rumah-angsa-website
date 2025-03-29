import ReservationCard from "@/app/_components/ReservationCard";
import ReservationList from "@/app/_components/ReservationList";
import { auth } from "@/app/_lib/auth";
import { getBookings } from "@/app/_lib/data-service";
import Link from "next/link";

export const metadata = {
  title: "Reservations",
};

export default async function Page() {
  const session = await auth();
  const bookings = await getBookings(session.user.guestId);

  return (
    <div>
      <h2 className="font-semibold text-2xl md:text-left text-center  mb-7">
        Reservasing anda
      </h2>

      {bookings.length === 0 ? (
        <p className="text-lg">
          Anda tidak memiliki Reservasi. Segera check out kabin kita{" "}
          <Link className="underline text-primary-600" href="/cabins">
            Semua Kabin &rarr;
          </Link>
        </p>
      ) : (
        <ReservationList bookings={bookings} />
      )}
    </div>
  );
}
