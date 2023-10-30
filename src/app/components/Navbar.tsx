import Link from "next/link";

import { UserAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";
import { redirect } from "next/navigation";

const Navbar = () => {
  const { user, googleSignIn, googleSignOut }: any = UserAuth();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  
  const handleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.error(error);
    }
  };

  const handleSignOut = async () => {
    try {
      await googleSignOut();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const checkAuth = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
      setIsLoading(false);
    };
    checkAuth();
  }, [user]);

  return (
    <nav className="px-10 py-5 shadow-[inset_0_-1px_0_0_#333]">
      <div className="flex justify-between items-center">
        <ul className="flex items-center gap-2">
          <li>
            <Link href="/">Home</Link>
          </li>
          {user && (
            <li>
              <Link href="/profile">Profile</Link>
            </li>
          )}
        </ul>
        {isLoading ? null : !user ? (
          <ul className="flex items-center gap-4">
            <li className="cursor-pointer" onClick={handleSignIn}>
              Login
            </li>
          </ul>
        ) : (
          <div className="flex items-center gap-4 text-sm">
            <p>Welcome, {user?.displayName}</p>
            <button
              onClick={handleSignOut}
              className="px-4 py-2 bg-gray-900 hover:bg-gray-950 rounded-sm outline-none border border-white/50"
            >
              Sign out
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
