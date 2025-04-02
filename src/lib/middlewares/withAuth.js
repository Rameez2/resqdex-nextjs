"use client"
import { useUser } from "@/context/userContext";
import { useRouter } from "next/navigation";  // Import useRouter for redirecting

// Higher Order Component (HOC) for route protection
const withAuth = (WrappedComponent) => {
  return (props) => {
    const { user, loading } = useUser();  // Get user and loading from context
    const router = useRouter();  // Access Next.js router to redirect

    // If loading is true, do not render the component, we can show a loading state or nothing
    if (loading) {
      return <p>Loading...</p>;
    }

    // If no user is logged in, redirect to the login page
    if (!user) {
      router.push("/login");
    
      return null;  // Don't render anything if the user is redirected
    }

    // If user is logged in, render the wrapped component
    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
