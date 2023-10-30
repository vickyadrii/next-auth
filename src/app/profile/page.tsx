"use client";

import { Metadata } from "next";
import { redirect } from "next/navigation";
import { UserAuth } from "../context/AuthContext";

export const metadata: Metadata = {
  title: "Profile page",
};

const Profile = () => {
  const { user }: any = UserAuth();

  if (!user) {
    redirect("/");
  }

  return (
    <div>
      <p>Profile</p>
    </div>
  );
};

export default Profile;
