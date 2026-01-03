"use client";

import { useState } from "react";

export default function WaitlistClient() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Something went wrong.");

      setStatus("success");
      setMessage("You’re on the waitlist. 🎉");
      setEmail("");
    } catch (err: any) {
      setStatus("error");
      setMessage(err.message || "Error.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="mt-4 flex flex-col gap-3 sm:flex-row">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-zinc-200"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="rounded-xl bg-zinc-900 px-5 py-3 text-sm font-medium text-white hover:bg-zinc-800 disabled:opacity-60"
      >
        {status === "loading" ? "Joining..." : "Get Early Access"}
      </button>

      {message ? (
        <p
          className={`text-sm ${
            status === "success" ? "text-green-700" : status === "error" ? "text-red-600" : "text-zinc-600"
          }`}
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}
