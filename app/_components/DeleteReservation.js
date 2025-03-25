"use client";
import { TrashIcon } from "@heroicons/react/24/solid";
import { deleteBooking } from "../_lib/actions";
import { useTransition } from "react";
import SpinnerMini from "./SpinnerMini";

function DeleteReservation({ bookingId, onDelete }) {
  const [isPending, startTransition] = useTransition();

  function handleDelete() {
    // Loading indicator if you call server action on the button
    if (confirm("Apakah anda ingin menghapus reservasi ini?"))
      startTransition(() => onDelete(bookingId));
  }

  return (
    <button
      onClick={handleDelete}
      className="group flex items-center gap-2 uppercase text-gray-500 text-xs font-bold flex-grow px-3 hover:bg-red-600 transition-colors hover:text-white cursor-pointer"
    >
      {!isPending ? (
        <>
          <TrashIcon className="h-5 w-5  group-hover:text-white transition-colors" />
          <span className="mt-1">Delete</span>
        </>
      ) : (
        <span className="mx-auto">
          <SpinnerMini />
        </span>
      )}
    </button>
  );
}

export default DeleteReservation;
