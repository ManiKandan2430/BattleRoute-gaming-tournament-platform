import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!loading && !user) {
      if (
        location.pathname === "/dashboard" ||
        location.pathname.startsWith("/dashboard/")
      ) {
        toast.error("Login to access the dashboard", {
          className: "toast-error",
        });
      }

      navigate("/", { replace: true });
    }
  }, [user, loading, navigate]);

  if (loading) return <div>Loading...</div>;

  if (!user) return null;

  return <>{children}</>;
};

export default ProtectedRoute;
