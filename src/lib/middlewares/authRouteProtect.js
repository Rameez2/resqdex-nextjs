"use client";
import PageLoader from "@/components/skeletons/PageLoader";
import { useUser } from "@/context/userContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const authRouteProtect = (WrappedComponent) => {
  return (props) => {
    const { user, loading } = useUser();
    const router = useRouter();
    const [redirecting, setRedirecting] = useState(false);

    useEffect(() => {
      if (!loading && user) {
        setRedirecting(true);  // Set state before redirecting to avoid re-rendering issues
        router.push("/profile");
      }
    }, [user, loading, router]);

    if (loading || redirecting) {
      return <PageLoader/>;  // Prevent rendering during redirection
    }

    return <WrappedComponent {...props} />;
  };
};

export default authRouteProtect;
