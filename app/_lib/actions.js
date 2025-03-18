"use server"; // always only called on the server
import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./auth";
import { supabase } from "./supabase";
import { getBookings } from "./data-service";
import { redirect } from "next/navigation";

export async function updateGuest(formData) {
  // Check user authentication. User in invoking server action must be authorization
  const session = await auth();
  if (!session) throw new Error("You must be logged in");

  // Check nationalID input. Always treat all the inputs as unsafe
  const nationalID = formData.get("nationalID");
  const [nationality, countryFlag] = formData.get("nationality").split("%");
  if (!/^[a-zA-Z0-9]{6,12}$/.test(nationalID))
    throw new Error("Please provide a valid national ID");

  const updateData = { nationality, countryFlag, nationalID };
  const { data, error } = await supabase
    .from("guests")
    .update(updateData)
    .eq("id", session.user.guestId);

  if (error) throw new Error("Guest could not be updated");

  // Manually cache revalidation
  revalidatePath("/account/profile");
}

export async function deleteReservation(bookingId) {
  // Test Action Performance
  // await new Promise((res) => setTimeout(res, 2000)); // speed test
  // throw new Error(); // error test

  // Check user authentication. User in invoking server action must be authorization
  const session = await auth();
  if (!session) throw new Error("You must be logged in");

  // Verification guest Steps. Get all bookings for the current user, then get id for each booking data
  const guestBookings = await getBookings(session.user.guestId);
  const guestBookingsIds = guestBookings.map((booking) => booking.id);

  // Check if the user is allowed to delete the booking.
  if (!guestBookingsIds.includes(bookingId))
    throw new Error("Youb are not allowed to delete this booking");

  const { error } = await supabase
    .from("bookings")
    .delete()
    .eq("id", bookingId);

  if (error) {
    console.error(error);
    throw new Error("Booking could not be deleted");
  }

  revalidatePath("/account/reservation");
}

export async function updateBooking(formData) {
  // Get booking id from the form data
  const bookingId = Number(formData.get("bookingId"));

  // Check user authentication. User in invoking server action must be authorization
  const session = await auth();
  if (!session) throw new Error("You must be logged in");

  // Authorization. Verification guest Steps. Get all bookings for the current user, then get id for each booking data
  const guestBookings = await getBookings(session.user.guestId);
  const guestBookingsIds = guestBookings.map((booking) => booking.id);

  // Check if the user is allowed to delete the booking.
  if (!guestBookingsIds.includes(bookingId))
    throw new Error("Youb are not allowed to update this booking");

  // Building update data
  const updateData = {
    numGuests: Number(formData.get("numGuests")),
    observations: formData.get("observations").slice(0, 1000),
  };

  // Muatation
  const { error } = await supabase
    .from("bookings")
    .update(updateData)
    .eq("id", bookingId)
    .select()
    .single();

  // Error handling
  if (error) {
    throw new Error("Reservation could not be updated");
  }

  // Manually cache revalidation. Always revalidate before redirect
  revalidatePath(`/account/reservations/edit/${bookingId}`);
  revalidatePath("/account/reservations");

  // Manually redirecting path
  redirect("/account/reservations");
}

export async function signInAction() {
  await signIn("google", { redirectTo: "/account" });
}
export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}
