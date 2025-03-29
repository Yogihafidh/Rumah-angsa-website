import { PencilSquareIcon } from "@heroicons/react/24/solid";
import { format, formatDistance, isPast, isToday, parseISO } from "date-fns";
import DeleteReservation from "@/app/_components/DeleteReservation";
import Image from "next/image";
import Link from "next/link";

export const formatDistanceFromNow = (dateStr) =>
  formatDistance(parseISO(dateStr), new Date(), {
    addSuffix: true,
  }).replace("about ", "");

function ReservationCard({ booking, onDelete }) {
  const {
    id,
    guestId,
    startDate,
    endDate,
    numNights,
    totalPrice,
    numGuests,
    status,
    created_at,
    cabins: { name, image },
  } = booking;

  return (
    <div className="flex md:flex-row flex-col border h-100 md:h-fit border-gray-300 rounded-2xl overflow-hidden hover:shadow-md">
      <div className="relative md:w-1/4 w-full h-1/4 md:h-auto md:aspect-auto">
        <Image
          src={image}
          alt={`Cabin ${name}`}
          fill
          className="object-cover border-r "
        />
      </div>

      <div className="flex-grow px-6 py-3 flex flex-col">
        <div className="mb-8 sm:mb-0 sm:flex items-center justify-between">
          <h3 className="text-xl font-bold">
            {numNights} malam di kabin {name}
          </h3>
          {isPast(new Date(startDate)) ? (
            <span className="bg-yellow-600 text-yellow-100 h-7 px-3 uppercase text-xs font-bold flex items-center rounded-sm">
              Sebelum
            </span>
          ) : (
            <span className="bg-green-600 text-green-100 h-7 px-3 uppercase text-xs font-bold flex items-center rounded-sm">
              Segera
            </span>
          )}
        </div>

        <p className="text-sm sm:text-lg text-gray-500">
          {format(new Date(startDate), "EEE, MMM dd yyyy")} (
          {isToday(new Date(startDate))
            ? "Hari ini"
            : formatDistanceFromNow(startDate)}
          ) &mdash; {format(new Date(endDate), "EEE, MMM dd yyyy")}
        </p>

        <div className="flex lg:flex-row flex-col gap-2 lg:gap-5 mt-auto items-baseline">
          <p className="text-xl font-semibold">Rp{totalPrice}K</p>
          <p className="lg:block hidden">&bull;</p>
          <p className="text-lg">{numGuests} Tamu</p>
          <p className="md:ml-auto text-left text-sm text-gray-500">
            Booking pada {format(new Date(created_at), "EEE, MMM dd yyyy, p")}
          </p>
        </div>
      </div>

      <div className="flex grow md:flex-col border md:border-l mt-5 md:mt-0 border-gray-300 w-full md:w-[100px]">
        {!isPast(startDate) ? (
          <>
            <Link
              href={`/account/reservations/edit/${id}`}
              className="group flex items-center gap-2 uppercase text-xs font-bold text-gray-500 md:border-b border-r border-gray-300 flex-grow px-3 hover:bg-gray-300 transition-colors hover:text-primary-900"
            >
              <PencilSquareIcon className="h-5 w-5" />
              <span className="mt-1">Edit</span>
            </Link>
            <DeleteReservation onDelete={onDelete} bookingId={id} />
          </>
        ) : null}
      </div>
    </div>
  );
}

export default ReservationCard;
