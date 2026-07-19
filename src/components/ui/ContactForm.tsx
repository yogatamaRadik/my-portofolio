"use client";

import { useActionState } from "react";
import { sendContactMessage } from "@/lib/actions";

const initialState = { success: false, message: "" };

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    sendContactMessage,
    initialState
  );

  return (
    <form action={formAction} className="mt-8 flex max-w-md flex-col gap-4">
      <div>
        <label
          htmlFor="name"
          className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
        >
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="mt-1 w-full rounded-lg border border-black/[.08] bg-transparent px-4 py-2 text-zinc-950 outline-none focus:border-zinc-950 dark:border-white/[.145] dark:text-zinc-50 dark:focus:border-zinc-50"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-1 w-full rounded-lg border border-black/[.08] bg-transparent px-4 py-2 text-zinc-950 outline-none focus:border-zinc-950 dark:border-white/[.145] dark:text-zinc-50 dark:focus:border-zinc-50"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className="mt-1 w-full resize-none rounded-lg border border-black/[.08] bg-transparent px-4 py-2 text-zinc-950 outline-none focus:border-zinc-950 dark:border-white/[.145] dark:text-zinc-50 dark:focus:border-zinc-50"
        />
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="rounded-full bg-zinc-950 px-5 py-2.5 text-sm font-medium text-white transition-all hover:scale-105 hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
      >
        {isPending ? "Sending..." : "Send message"}
      </button>

      {state.message && (
        <p
          className={`text-sm ${
            state.success
              ? "text-green-600 dark:text-green-400"
              : "text-red-600 dark:text-red-400"
          }`}
        >
          {state.message}
        </p>
      )}
    </form>
  );
}