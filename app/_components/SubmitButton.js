"use client";

import { useFormStatus } from "react-dom";

export default function SubmitButton({ pendingLabel, children }) {
  // Loading implemented
  const { pending } = useFormStatus(); // must be called in form element, when otherwise not in form use useTransition

  return (
    <button
      className="cursor-pointer bg-primary-500 text-white rounded-lg px-5 py-3  font-semibold hover:bg-primary-400 transition-all disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-500 disabled:border disabled:border-gray-300"
      disabled={pending}
    >
      {pending ? pendingLabel : children}
    </button>
  );
}
