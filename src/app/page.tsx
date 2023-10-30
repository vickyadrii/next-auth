import { Metadata } from "next";

export const metadata: Metadata = {
  title: "HomePage",
};

export default function Home() {
  return (
    <div className="flex flex-col gap-2 items-start">
      <h1>Hello!</h1>
      <p>Welcome to Homepage!</p>
    </div>
  );
}
