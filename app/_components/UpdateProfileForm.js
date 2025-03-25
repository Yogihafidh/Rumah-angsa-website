"use client";
import { useState } from "react";
import Image from "next/image";
import { updateGuest } from "../_lib/actions";
import { useFormStatus } from "react-dom";
import SubmitButton from "./SubmitButton";

function UpdateProfileForm({ guest, children }) {
  const { fullName, email, nationality, nationalID, countryFlag } = guest;
  const [count, setCount] = useState();

  return (
    <form
      action={updateGuest}
      className="border border-gray-300 rounded-2xl py-8 px-12 text-lg flex gap-6 flex-col"
    >
      <div className="space-y-2">
        <label>Full name</label>
        <input
          defaultValue={fullName}
          name="fullName"
          disabled
          className="px-5 py-3 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-300"
        />
      </div>

      <div className="space-y-2">
        <label>Email address</label>
        <input
          defaultValue={email}
          name="email"
          disabled
          className="px-5 py-3 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-300"
        />
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label htmlFor="nationality">Where are you from?</label>
          {countryFlag && (
            <Image
              width={32}
              height={16}
              src={countryFlag}
              alt="Country flag"
              className="h-5 rounded-sm"
            />
          )}
        </div>

        {children}
      </div>

      <div className="space-y-2">
        <label htmlFor="nationalID">National ID number</label>
        <input
          defaultValue={nationalID}
          name="nationalID"
          className="px-5 py-3 w-full border border-gray-300 shadow-sm rounded-sm"
        />
      </div>

      <div className="flex justify-end items-center gap-6">
        <SubmitButton pendingLabel="Updating...">Update Profile</SubmitButton>
      </div>
    </form>
  );
}

export default UpdateProfileForm;
