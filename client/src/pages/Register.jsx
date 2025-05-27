import { useReducer, useState } from "react";
import Hyperspeed from "../components/ui/HyperSpeed";
import { Link, useNavigate } from "react-router-dom";
import {
  registerInitialState,
  registerReducer,
} from "../Reducers/registerReducer";
import customFetch from "../utilits/customFetch";
import { toast } from "react-toastify";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    contact: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(null);
  const navigate = useNavigate();
  // const [state, dispatch] = useReducer(registerReducer, registerInitialState);
  // const { loading, user, error } = state;
  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = async (e) => {
    try {
      setLoading(true);
      e.preventDefault();
      // dispatch({ type: "REGISTER_SUCCESS" });
      const response = await customFetch.post("/auth/register", form);
      console.log(response.data);
      if (response?.data?.success) {
        toast.success("Register successful", { className: "toast-success" });
        navigate("/login");
      }
      // dispatch({ type: "REGISTER_SUCCESS", payload: response.data.user });
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data || "server error", {
        className: "toast-error",
      });
      // dispatch({
      //   type: "REGISTER_ERROR",
      //   payload: error?.response?.data || "server error",
      // });
    } finally {
      setLoading(false);
    }
  };
  return (
    <main className="w-full md:h-screen">
      <div className="absolute text-center w-full h-[100px] top-6">
        <h1 className="text-4xl">Battle Route</h1>
        <span className="relative text-neutral-500 top-2">
          the first step of your journey into a fast-paced, futuristic battle
          realm
        </span>
      </div>
      <section className="login max-[768px]:mt-[40%] md:mt-30">
        <h1>Register</h1>
        <form onSubmit={handleSubmit} action="">
          <label htmlFor="">name</label>
          <input
            value={form.name}
            onChange={handleOnchange}
            id="name"
            name="name"
            type="text"
            placeholder="enter your name"
          />
          <label htmlFor="">email</label>
          <input
            value={form.email}
            onChange={handleOnchange}
            id="email"
            name="email"
            type="text"
            placeholder="enter your email"
          />
          <label htmlFor="">contact</label>
          <input
            value={form.contact}
            onChange={handleOnchange}
            id="contact"
            name="contact"
            type="text"
            placeholder="enter your contact"
          />
          <label htmlFor="">password</label>
          <input
            value={form.password}
            onChange={handleOnchange}
            id="password"
            name="password"
            type="text"
            placeholder="enter your password"
          />
          <div className="flex justify-between gap-2 mt-8">
            <button className="link">
              <Link to="/login">Already have a account?</Link>
            </button>
            <button className="btn text-sm">
              {loading ? "submitting..." : "Start journey"}
            </button>
          </div>
        </form>
      </section>
      <section className="">
        <div className="">
          <Hyperspeed
            id="register"
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

export default Register;
