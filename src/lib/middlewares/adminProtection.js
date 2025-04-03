"use client";
import { useEffect } from "react";
import { useUser } from "@/context/userContext";
import { useRouter } from "next/navigation";

// Higher Order Component (HOC) for admin route protection
const withAdminAuth = (WrappedComponent) => {
  return (props) => {
    const { user, loading } = useUser();
    const router = useRouter();

    useEffect(() => {
      if (!loading) {
        if (!user) {
          router.push("/login");
        } else if (!user.isAdmin) {
          router.push("/");
        }
      }
    }, [user, loading, router]);

    // Show loading state while checking user authentication
    if (loading) {
      return <p>Loading...</p>;
    }

    // Prevent rendering if user is being redirected
    if (!user || !user.isAdmin) {
      return null;
    }

    // If user is an admin, render the wrapped component
    return <WrappedComponent {...props} />;
  };
};

export default withAdminAuth;
