'use client'

import { redirect } from "next/navigation";
import { UserAuth } from "../context/AuthContext";

const Profile = () => {
  const { user }: any = UserAuth();

  if(!user) {
    redirect('/')
  }
  return (
    <div>
      <p>Profile</p>
    </div>
  );
};

export default Profile;
