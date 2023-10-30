"use client";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-2 items-start">
      <h1>Hello!</h1>
      <p>Welcome to Homepage!</p>
      <Link href="/profile" className="p-2 bg-gray-800 hover:bg-gray-900 border border-white rounded-sm">
        Profile
      </Link>
    </div>
  );
}
