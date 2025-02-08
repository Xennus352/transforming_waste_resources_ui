import React from "react";

const OurInfo = () => {
  return (
    <div>
      <h2 className="font-bold text-xl">GetIn Touch With Us</h2>

      <div>
        <h2>Call Us Now</h2>
        <p className="underline">(+95)123456789</p>
      </div>

      {/* container */}
      <div className="flex items-center justify-evenly m-2 p-2 gap-3">
        {/* left  */}
        <div>
          <h1 className="text-xl font-bold">Address</h1>

          <p>Myanmar, Bago , Taungoo</p>
          <p>Basic Computer Education High Private School Taungoo</p>
        </div>

        {/* right  */}
        <div>
          <h1 className="text-xl font-bold">Email Address</h1>
          <p className="underline">xennus.dev@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default OurInfo;
