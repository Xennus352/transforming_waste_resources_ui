import React from "react";
import FeedbackForm from "./FeedbackForm";
import OurInfo from "./OurInfo";
import recycleSign from "../assets/recycle-sign.png";
import { useForm } from "react-hook-form";
import { useGetCurrentUser } from "../react-query/user";
import { useCreateFeedback } from "../react-query/feedback";
import { Send } from "lucide-react";
import { motion } from "motion/react";

const Feedback = () => {
  // get current user
  const { data: user } = useGetCurrentUser();

  const { mutate: createFeedback } = useCreateFeedback();

  //form control
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => createFeedback(data);

  return (
    <div>
      {/* container          */}
      <div className="  m-2  w-full p-1 ">
        {/* left  */}
        {/* <div className="hidden md:block lg:block xl:block">
          <div className="w-full flex items-center justify-center">
            <OurInfo />
          </div>
        </div> */}
        {/* right  */}
        {/* <div className="w-full">
          <FeedbackForm />
        </div> */}

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
          }}
        >
          <h2 className="text-2xl font-bold tracking-wider text-center first-letter:uppercase leading-loose">
            Contact to us
          </h2>
          <div
            className=" w-full md:grid md:grid-cols-3 p-4 
            gap-6 flex flex-col justify-center 
            bg-opacity-50 backdrop-blur-lg rounded-lg"
          >
            <div className="">
              {/* left side  */}
              <div className="md:flex md:justify-center">
                <img
                  className=" object-cover w-full rounded-full sm:rounded-md md:rounded-sm hover:rounded-xl hover:shadow-xl hover:cursor-pointer m-1"
                  src={user? user?.picture : recycleSign}
                  alt="profilePic"
                />
              </div>
            </div>
            {/* mid side  */}
            <div className="border rounded-lg  col-span-2 p-4">
              <div>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="flex flex-col gap-4"
                >
                  <input
                    defaultValue={user ? user?.email : ""}
                    {...register("email")}
                    type="text"
                    className="input input-primary"
                    placeholder="Email"
                  />

                  <input
                    {...register("username")}
                    defaultValue={user ? user?.username : ""}
                    type="text"
                    className="input input-primary"
                    placeholder="Username"
                  />

                  <input
                    type="text"
                    className="input input-primary"
                    placeholder="Phone number"
                    {...register("phone")}
                  />
                  <textarea
                    className="textarea textarea-primary h-44"
                    placeholder="Description"
                    {...register("description")}
                  ></textarea>
                  <button className="btn btn-primary">
                    Sent <Send />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Feedback;
