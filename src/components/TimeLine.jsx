import React from "react";


const TimeLine = () => {
  return (
    <div className="border-t-2 border-b-2 border-primary rounded-lg m-4 mt-3">
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        <li>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic">Vision</time>
            <div className="text-lg font-black">Our Vision</div>
            <p className="p-2">
              To create a sustainable future where waste is transformed into
              valuable resources, fostering a circular economy that benefits
              communities and the environment.
            </p>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end md:mb-10">
            <time className="font-mono italic">Mission</time>
            <div className="text-lg font-black">Our Mission</div>
            <p className="p-2">
              We aim to create a special place where we empower communities,
              raise public awareness, and give trash or second-hand objects a
              new purpose.
            </p>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic">About</time>
            <div className="text-lg font-black">About Of Ours</div>
            <p className="p-2">
              Transforming waste into resources tackles environmental issues and
              creates economic opportunities. A comprehensive approach includes
              a marketplace for upcycled products, an educational blog, and a
              guide for crafting handmade items from waste. The marketplace
              fosters a circular economy by enabling trade in recycled goods.
              The blog shares success stories, DIY tutorials, and expert
              insights to promote sustainability. The crafting guide inspires
              creativity, encouraging people to repurpose materials. Combined
              with planning, public engagement, and innovation, this initiative
              drives environmental impact and unlocks the economic potential of
              waste transformation.
            </p>
          </div>

          <hr />
        </li>
        
      </ul>
    </div>
  );
};

export default TimeLine;
