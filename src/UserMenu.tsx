import { useContext } from "react";
import { UserContext } from "./App";
import { supaClient } from "./supa-client";

export default function UserMenu() {
  const { profile } = useContext(UserContext);

  return (
    <>
      <div className="text-xs text-gray-400">
        <h2> {profile?.username} </h2>
        <button
          onClick={() => supaClient.auth.signOut()}
          className="mr-4 text-xl font-semibold text-grey-400 hover:text-blue-600 hover:underline"
        >
          Logout
        </button>
      </div>
    </>
  );
}