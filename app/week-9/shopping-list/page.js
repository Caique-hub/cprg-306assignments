"use client";

import Link from "next/link";
import { useUserAuth } from "../contexts/AuthContext";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  async function handleLogin() {
    try {
      await gitHubSignIn();
    } catch (e) {
      console.error(e);
    }
  }

  async function handleLogout() {
    try {
      await firebaseSignOut();
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">Week 9</h1>

      {!user ? (
        <button onClick={handleLogin} className="px-4 py-2 border rounded">
          Login with GitHub
        </button>
      ) : (
        <div className="space-y-3">
          <p>
            Welcome, {user.displayName} ({user.email})
          </p>

          <button onClick={handleLogout} className="px-4 py-2 border rounded">
            Logout
          </button>

          <Link className="text-blue-600 underline" href="/week-9/shopping-list">
            Go to Shopping List
          </Link>
        </div>
      )}
    </main>
  );
}

