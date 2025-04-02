"use client";
import { useUser } from "@/context/userContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";  // Import useEffect

// Higher Order Component (HOC) for route protection
const authRouteProtect = (WrappedComponent) => {
  return (props) => {
    const { user, loading } = useUser();
    const router = useRouter();

    useEffect(() => {
      if (user) {
        router.push("/");
      }
    }, [user, router]); // Runs when `user` or `router` changes

    if (loading) {
      return <p>Loading...</p>;
    }

    // If a user exists, don't render anything while redirecting
    if (user) {
      return null;
    }

    return <WrappedComponent {...props} />;
  };
};

export default authRouteProtect;
