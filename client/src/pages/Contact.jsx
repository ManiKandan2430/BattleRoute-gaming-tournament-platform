import { useState } from "react";
import { IoMdStarOutline,IoMdStar } from "react-icons/io";

const Contact = () => {
  const [rating, setRating] = useState(0);

  const handleClick = (index) => {
    setRating(index + 1);
  };
  return (
    <div id="contact" className="w-full overflow-hidden mt-10">
      <div className="md:flex justify-between items-center">
        <section className="md:w-[50%] w-full">
          <h1 className="w-full text-center text-xl">Contact Me</h1>
          <div className="contact">
            <form
              className="flex flex-col"
              action=""
            >
              <label htmlFor="">Name</label>
              <input type="text" id="name" placeholder="Enter your name" />
              <label htmlFor="">Email</label>
              <input type="text" id="name" placeholder="Enter your name" />
              <label htmlFor="">What can i help you?</label>
              <textarea
                className="bg-gray-900/70"
                rows="4"
                cols="50"
                name=""
                id=""
              ></textarea>
              <button type="submit" className="">
                submit
              </button>
            </form>
          </div>
        </section>
        <section className="md:w-[50%] w-full mt-8 md:mt-0">
          <h1 className="w-full text-center text-xl">Your Feed Back</h1>
          <div className="feedback">
            <form
              action=""
              className="flex flex-col"
            >
              <label htmlFor="">Name</label>
              <input type="text" id="name" placeholder="Enter your name" />
              <label htmlFor="">Ratings</label>
              <div className="star flex gap-5 my-4 py-2 text-2xl cursor-pointer">
                {[...Array(5)].map((_, index) => (
                  <span key={index} onClick={() => handleClick(index)}>
                    {index < rating ? (
                      <IoMdStar className="text-yellow-400 transition-all" />
                    ) : (
                      <IoMdStarOutline className="text-gray-400 transition-all" />
                    )}
                  </span>
                ))}
              </div>
              <label htmlFor="">Your valueable feedback</label>
              <textarea
                className="bg-gray-900/70"
                rows="4"
                cols="50"
                name=""
                id=""
              ></textarea>
              <button type="submit" className="">
                submit
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
