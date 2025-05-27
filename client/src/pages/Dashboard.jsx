import { Link, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
  const user = useAuth();

  return (
    <main>
      <section>
        <Outlet user={user} />
      </section>
    </main>
  );
};
export default Dashboard;
