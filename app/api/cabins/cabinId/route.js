import { getBookedDatesByCabinId, getCabin } from "@/app/_lib/data-service";

// Endpoint get cabinId data
export async function GET(request, { params }) {
  //   Get id from url
  const { cabinId } = params;

  //   Fatching Data
  try {
    const [cabin, bookedDates] = await Promise.all([
      getCabin(cabinId),
      getBookedDatesByCabinId(cabinId),
    ]);
    return Response.json(cabin, bookedDates);
  } catch {
    return Response({ message: "Cabin not found" });
  }
}
