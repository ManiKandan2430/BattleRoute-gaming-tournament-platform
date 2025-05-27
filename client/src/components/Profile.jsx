import React, { useRef, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { FaRegEdit } from "react-icons/fa";
import { GiCrossedBones } from "react-icons/gi";
import { TiTick } from "react-icons/ti";
import customFetch from "../utilits/customFetch";
import { toast } from "react-toastify";

const Profile = () => {
  const { user } = useAuth();
  const [enableEdit, setEnableEdit] = useState(false);
  const [loading, setLoading] = useState(false);
  const [imageSrc, setImageSrc] = useState(
    "https://th.bing.com/th?q=New+User+Profile+Icon&w=120&h=120&c=1&rs=1&qlt=70&o=7&cb=1&dpr=1.3&pid=InlineBlock&rm=3&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247"
  );
  const [avatarFile, setAvatarFile] = useState(null);
  const formRef = useRef();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatarFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      setEnableEdit(false);
      const form = formRef.current;
      const formData = new FormData(form);
      if (avatarFile) {
        formData.append("avatar", avatarFile);
      }
      const data = Object.fromEntries(formData.entries());

      // Optional: Debug submitted data
      // for (let [key, value] of formData.entries()) {
      //   console.log(key, value);
      // }
      console.log(data);

      const response = await customFetch.put(
        `/users/update-user/${user?.id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response?.data?.success)
        toast.success("user updated successfully", {
          className: "toast-success",
        });
    } catch (error) {
      console.error("Update failed:", error);
      toast.error(error?.response?.data?.message, { className: "toast-error" });
    } finally {
      setLoading(false);
    }
  };

  const inputClass = enableEdit ? "cursor-auto" : "cursor-not-allowed";

  return (
    <div className="dashboard-page">
      {enableEdit ? (
        <div className="absolute right-[75%] md:right-12 top-18 md:top-10 flex gap-2 md:gap-5">
          <button
            onClick={() => setEnableEdit(false)}
            className="flex items-center gap-1 text-sm cursor-pointer z-10 ring px-3 py-1 rounded-md bg-red-600/50 hover:bg-red-600 active:bg-red-800 hover:shadow-md shadow-red-300 hover:scale-105 transition-all duration-300"
          >
            <GiCrossedBones />
            <p className="hidden md:flex">Cancel</p>
          </button>
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="flex items-center gap-1 text-sm cursor-pointer z-10 px-3 py-1 rounded-md ring bg-green-600/50 hover:bg-green-600 active:bg-green-800 hover:shadow-md shadow-green-600 hover:scale-105 transition-all duration-300"
          >
            <TiTick />
            <p className="hidden md:flex">{loading ? "Saving..." : "Save"}</p>
          </button>
        </div>
      ) : (
        <button
          onClick={() => setEnableEdit(true)}
          className="absolute right-[87%] md:right-14 top-17 md:top-10 text-2xl cursor-pointer z-10 hover:text-purple-600"
        >
          <FaRegEdit />
        </button>
      )}

      <section className="md:absolute left-3 md:left-8 rounded-lg top-5 md:ring ring-neutral-700 md:shadow-md shadow-pink-100/30 h-screen md:h-[470px] w-full md:w-[94%]">
        <h1>Player Profile</h1>

        <div className="absolute top-32 md:top-10 left-[40%] md:left-[12%]">
          <img
            width="80px"
            height="80px"
            src={user ? user?.avatar : imageSrc}
            alt="User profile picture preview"
            className="object-cover rounded-full border border-gray-300"
          />
          <div className="mt-4 bg-sky-500 text-center px-3 py-0.5 rounded-md cursor-pointer hover:bg-sky-600 active:bg-sky-800">
            <label htmlFor="upload" className="text-white cursor-pointer">
              Change
            </label>
            <input
              id="upload"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
              disabled={!enableEdit}
            />
          </div>
        </div>

        <div className="profile">
          <form ref={formRef} id="form">
            <div className="user">
              <div>
                <label>Username</label>
                <input
                  type="text"
                  name="name"
                  defaultValue={user?.name || ""}
                  className={inputClass}
                  disabled={!enableEdit}
                />
              </div>
              <div>
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  defaultValue={user?.email || ""}
                  className={inputClass}
                  disabled={!enableEdit}
                />
              </div>
              <div>
                <label>Contact</label>
                <input
                  type="text"
                  name="contact"
                  defaultValue={user?.contact || ""}
                  className={inputClass}
                  disabled={!enableEdit}
                />
              </div>
            </div>

            <div className="details">
              <div>
                <label>PlayerID</label>
                <input
                  type="text"
                  defaultValue={user?.playerID || "1234567890"}
                  name="playerID"
                  className="bg-gray-100"
                  disabled={!enableEdit}
                />
              </div>
              <div>
                <label>In-game Name</label>
                <input
                  type="text"
                  defaultValue={user?.ingamename || "HellFire"}
                  name="ingamename"
                  className="bg-gray-100"
                  disabled={!enableEdit}
                />
              </div>
              <div>
                <label>Region</label>
                <input
                  type="text"
                  defaultValue={user?.region || "South Asia"}
                  className="bg-gray-100"
                  name="region"
                  disabled={!enableEdit}
                />
              </div>
              <div>
                <label>Country</label>
                <input
                  type="text"
                  defaultValue={user?.country || "India"}
                  className="bg-gray-100"
                  name="country"
                  disabled={!enableEdit}
                />
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Profile;
