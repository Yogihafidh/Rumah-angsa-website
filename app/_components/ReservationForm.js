"use client";
import Image from "next/image";
import { useReservation } from "./ReservationContext";
import { differenceInDays } from "date-fns";
import { createBooking } from "../_lib/actions";
import SubmitButton from "./SubmitButton";

function ReservationForm({ cabin, user }) {
  const { range, resetRange } = useReservation();

  // Setup data for booking
  const { maxCapacity, regularPrice, discount, id } = cabin;
  const startDate = range?.from;
  const endDate = range?.to;
  const numNights = differenceInDays(endDate, startDate);
  const cabinPrice = numNights * (regularPrice - discount);

  const bookingData = {
    startDate,
    endDate,
    numNights,
    cabinPrice,
    cabinId: id,
  };

  const createBookingWithData = createBooking.bind(null, bookingData);

  return (
    <div className="border border-gray-100 shadow-md  rounded-2xl mx-3 my-3">
      <div className="bg-gray-100 rounded-xl mx-3 my-3 px-16 py-2 flex justify-between items-center">
        <p>Login sebagai</p>

        <div className="flex gap-4 items-center">
          <Image
            height={32}
            width={32}
            referrerPolicy="no-referrer"
            className="h-8 rounded-full"
            src={user.image}
            alt={user.name}
            unoptimized
          />
          <p>{user.name}</p>
        </div>
      </div>

      <form
        action={async (formData) => {
          await createBookingWithData(formData);
          resetRange();
        }}
        className="py-10 px-10 text-lg flex gap-5 flex-col"
      >
        <div className="space-y-2">
          <label htmlFor="numGuests">Berapa banyak tamu?</label>
          <select
            name="numGuests"
            id="numGuests"
            className="px-5 py-3 text-gray-500 w-full border border-gray-200 shadow-sm rounded-md"
            required
          >
            <option value="" key="">
              Pilih berapa banyak tamu...
            </option>
            {Array.from({ length: maxCapacity }, (_, i) => i + 1).map((x) => (
              <option value={x} key={x}>
                {x} tamu
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="observations">
            Apa yang perlu kami ketahui tentang reservasi anda?
          </label>
          <textarea
            name="observations"
            id="observations"
            className="px-5 py-3  text-gray-500 w-full shadow-sm border border-gray-200 rounded-md"
            placeholder="Ada hewan peliharaan, alergi, atau persyaratan khusus lainnya?"
          />
        </div>

        <div className="flex justify-end items-center gap-6">
          {!(startDate && endDate) ? (
            <p className=" text-base">Mulailah dengan memilih tanggal</p>
          ) : (
            <SubmitButton pendingLabel="Reserving...">
              Booking sekarang
            </SubmitButton>
          )}
        </div>
      </form>
    </div>
  );
}

export default ReservationForm;
