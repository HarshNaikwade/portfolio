import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Error 404!</h1>
        <p className="text-xl text-gray-600 mb-4">
          Oi Mate! You are not supposed to be here.
        </p>
        <Button onClick={() => (window.location.href = "/")}>
          Click here to see more of me...
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
