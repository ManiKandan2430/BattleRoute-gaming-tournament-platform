import React, { useState } from "react";
import Hyperspeed from "../components/ui/HyperSpeed";
import { Link, useNavigate } from "react-router-dom";
import customFetch from "../utilits/customFetch";
import { toast } from "react-toastify";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const {fetchUser} = useAuth()
  const handleSubmit = async (e) => {
    try {
      setLoading(true);
      e.preventDefault();
      const formData = new FormData(e.target);
      const data = Object.fromEntries(formData.entries());
      const response = await customFetch.post("/auth/login", data);
      console.log(response.data);
      if (response?.data?.success) {
        setTimeout(() => {
          toast.success("login successful", { className: "toast-success" });
          fetchUser();
          navigate("/");
        }, 1000);
      }
    } catch (err) {
      console.log(err);
      toast.error(err?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <main className="w-full md:h-screen">
      <div className="absolute text-center w-full h-[100px] top-15 md:top-6">
        <h1 className="text-4xl">Battle Route</h1>
        <span className="relative text-neutral-500 top-2">
          Logging in isn’t just authentication — it’s the first step of your
          journey into a fast-paced, futuristic battle realm
        </span>
      </div>
      <section className="login max-[768px]:mt-[25%]">
        <h1 className="mt-35">Login</h1>
        <form action="" onSubmit={handleSubmit} className="">
          <label htmlFor="">username</label>
          <input id="name" type="text" placeholder="username" name="email" />
          <label id="password" htmlFor="">
            password
          </label>
          <input type="text" placeholder="password" name="password" />
          <div className="flex justify-between mt-8">
            <button className="link">
              <Link to="/register">Create a new account?</Link>
            </button>
            <button className="btn">Login</button>
          </div>
        </form>
      </section>
      <section className="">
        <div className="">
          <Hyperspeed
            effectOptions={{
              onSpeedUp: () => {},
              onSlowDown: () => {},
              distortion: "deepDistortion",
              length: 400,
              roadWidth: 18,
              islandWidth: 2,
              lanesPerRoad: 3,
              fov: 90,
              fovSpeedUp: 150,
              speedUp: 2,
              carLightsFade: 0.4,
              totalSideLightSticks: 50,
              lightPairsPerRoadWay: 50,
              shoulderLinesWidthPercentage: 0.05,
              brokenLinesWidthPercentage: 0.1,
              brokenLinesLengthPercentage: 0.5,
              lightStickWidth: [0.12, 0.5],
              lightStickHeight: [1.3, 1.7],
              movingAwaySpeed: [60, 80],
              movingCloserSpeed: [-120, -160],
              carLightsLength: [400 * 0.05, 400 * 0.15],
              carLightsRadius: [0.05, 0.14],
              carWidthPercentage: [0.3, 0.5],
              carShiftX: [-0.2, 0.2],
              carFloorSeparation: [0.05, 1],
              colors: {
                roadColor: 0x080808,
                islandColor: 0x0a0a0a,
                background: 0x000000,
                shoulderLines: 0x131318,
                brokenLines: 0x131318,
                leftCars: [0xff322f, 0xa33010, 0xa81508],
                rightCars: [0xfdfdf0, 0xf3dea0, 0xe2bb88],
                sticks: 0xfdfdf0,
              },
            }}
          />
        </div>
      </section>
    </main>
  );
};

export default Login;
