import SubmitButton from "@/app/_components/SubmitButton";
import { updateBooking } from "@/app/_lib/actions";
import { getBooking, getCabin } from "@/app/_lib/data-service";

export default async function Page({ params }) {
  const { bookingId } = await params; // get booking id from url
  const { numGuests, observations, cabinId } = await getBooking(bookingId);
  const { maxCapacity } = await getCabin(cabinId);

  return (
    <div>
      <h2 className="font-semibold text-2xl mb-7">
        Edit Reservation #{bookingId}
      </h2>

      <form
        action={updateBooking}
        className="border border-gray-300 rounded-2xl py-8 px-12 text-lg flex gap-6 flex-col"
      >
        <input type="hidden" name="bookingId" value={bookingId} />

        <div className="space-y-2">
          <label htmlFor="numGuests">Berapa banyak tamu?</label>
          <select
            name="numGuests"
            id="numGuests"
            defaultValue={numGuests}
            className="px-5 py-3 w-full shadow-sm rounded-lg border border-gray-200"
            required
          >
            <option value="" key="">
              Pilih berapa banyak tamu
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
            Ada hal lain yang perlu kami ketahui tentang reservasi Anda?
          </label>
          <textarea
            defaultValue={observations}
            name="observations"
            className="px-5 py-3 border h-full border-gray-200  w-full shadow-sm rounded-lg"
          />
        </div>

        <div className="flex justify-end items-center gap-6">
          <SubmitButton pendingLabel="Updating...">
            Update Reservation
          </SubmitButton>
        </div>
      </form>
    </div>
  );
}
