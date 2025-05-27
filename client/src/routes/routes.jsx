import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import GameModel from "../components/GameModel";
import Tournaments from "../components/Tournaments";
import BestMoments from "../components/BestMoments";
import Winners from "../pages/Winners";
import Feedbacks from "../components/Feedbacks";
import Contact from "../pages/Contact";
import Hero from "../pages/Hero";
import Footer from "../pages/Footer";
import Profile from "../components/Profile";
import PlayerState from "../components/PlayerState";
import PlayerTropy from "../components/PlayerTropy";
import ProtectedRoute from "./ProtectedRoute";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: (
          <>
            <Hero />
            <GameModel />
            <Tournaments />
            <BestMoments />
            <Winners />
            <Feedbacks />
            <Contact />
            <Footer />
          </>
        ),
      },
      {
        path: "dashboard",
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        ),
        children: [
          {
            index: true,
            element: <Profile />,
          },
          {
            path: "status",
            element: <PlayerState />,
          },
          {
            path: "trophys",
            element: <PlayerTropy />,
          },
        ],
      },
    ],
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "login",
    element: <Login />,
  },
]);
