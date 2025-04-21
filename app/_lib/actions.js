"use server"; // always only called on the server
import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./auth";
import { supabase } from "./supabase";
import { getBookings, getGuest } from "./data-service";
import { redirect } from "next/navigation";
import { bookingSchema } from "./schemas";

export async function createGuest(formData) {
  const fullName = formData.get("fullName");
  const email = formData.get("email");
  const guestData = {
    fullName: fullName,
    email: email,
  };

  const existingGuest = await getGuest(email);

  // If user doesn't exist, create a new one
  if (!existingGuest) {
    const { error: createGuestError } = await supabase
      .from("guests")
      .insert([guestData]);

    if (createGuestError) {
      console.error(error);
      throw new Error("Guest could not be created");
    }
  }

  // Sign in user menggunakan NextAuth setelah guest dibuat
  await signIn("email", { email });

  redirect("/account/reservations");
}

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

// With bind function, form data will send as a second argument because the first argument is already binded, which is bookingData
export async function createBooking(bookingData, formData) {
  const session = await auth();
  if (!session) throw new Error("You must be logged in");
  const newBookingData = {
    guestId: session.user.guestId,
    ...bookingData,
    numGuests: Number(formData.get("numGuests")),
    observations: formData.get("observations").slice(0, 1000),
    extrasPrice: 0,
    totalPrice: bookingData.cabinPrice,
    isPaid: false,
    hasBreakfast: formData.get("breakfast") === "on" ? true : false,
    status: "unconfirmed",
  };

  // Validasi dengan zod
  const data = bookingSchema.safeParse(newBookingData);
  if (!data.success) {
    throw new Error("Booking data is invalid", data.error.format());
  } else {
    console.log("Validated booking:", data.data);
  }

  const { error: createError } = await supabase
    .from("bookings")
    .insert([data.data]);
  if (createError) {
    throw new Error("Booking could not be created");
  }

  revalidatePath(`/cabins/${bookingData.cabinId}`);
  redirect("/cabins/thankyou");
}

export async function deleteBooking(bookingId) {
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
