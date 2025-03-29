import { auth } from "../_lib/auth";
import { getBookedDatesByCabinId, getSettings } from "../_lib/data-service";
import DateSelector from "./DateSelector";
import LoginMessage from "./LoginMessage";
import ReservationForm from "./ReservationForm";

async function Reservation({ cabin }) {
  const session = await auth();
  // Fatching multiple data with promises
  const [settings, bookedDates = {}] = await Promise.all([
    getSettings(),
    getBookedDatesByCabinId(cabin.id),
  ]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-0 border rounded-2xl border-gray-500 min-h-[400px] overflow-hidden">
      <DateSelector
        settings={settings}
        bookedDates={bookedDates}
        cabin={cabin}
      />
      {session?.user ? (
        <ReservationForm
          cabin={cabin}
          user={session?.user}
          settings={settings}
        />
      ) : (
        <LoginMessage />
      )}
    </div>
  );
}

export default Reservation;
