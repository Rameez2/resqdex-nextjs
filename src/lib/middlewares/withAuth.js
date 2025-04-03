"use client";
import { useUser } from "@/context/userContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";  // Import useEffect

const withAuth = (WrappedComponent) => {
  return (props) => {
    const { user, loading } = useUser();
    const router = useRouter();

    useEffect(() => {
      if (!loading) {
        if (!user) {
          router.push("/login");
        } else if (user.role === "Organization" && user.status === "Apply") {
          router.push("/org-form");
        }
      }
    }, [user, loading, router]); // Runs when user or loading state changes

    if (loading) {
      return <p>Loading...</p>;
    }

    if (!user) {
      return null; // Prevent rendering while redirecting
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
