import Link from "next/link";

import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, googleSignIn, googleSignOut }: any = UserAuth();
  console.log({ user });
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

  return (
    <nav className="px-10 py-5 shadow-[inset_0_-1px_0_0_#333]">
      <div className="flex justify-between items-center">
        <Link href="/">Home</Link>
        {!user ? (
          <ul className="flex items-center gap-4">
            <li className="cursor-pointer" onClick={handleSignIn}>
              Login
            </li>
            <li>
              <Link href="/register">Register</Link>
            </li>
          </ul>
        ) : (
          <div className="flex items-center gap-4 text-sm">
            <p>Welcome, {user?.displayName}</p>
            <button onClick={handleSignOut} className="px-4 py-2 bg-gray-900 hover:bg-gray-950 rounded-sm outline-none border border-white/50">
              Sign out
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
