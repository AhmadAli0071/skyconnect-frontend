
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold mb-4 text-sky glow-text">404</h1>
        <p className="text-xl text-white mb-6">Oops! The page you're looking for doesn't exist.</p>
        <p className="text-white/60 mb-8">
          The page might have been moved or deleted, or perhaps you mistyped the address.
        </p>
        <Link 
          to="/" 
          className="px-6 py-3 rounded-md bg-sky text-white font-medium hover:bg-sky-dark transition-colors animate-glow"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
