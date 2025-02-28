// import React from "react";
// import Carousel from "../components/Carousel";
// import Feedback from "../components/Feedback";
// import Divider from "../components/Divider";
// import AboutCard from "../components/AboutCard";
// import ProductSample from "../components/ProductSample";
// import { motion } from "motion/react";
// import PostSample from "../components/PostSample";

// const HomePage = () => {
//   return (
//     <>
//       {/* carousel  */}
//       <Carousel />

//       <PostSample />
//       {/* ProductSample */}
//       <Divider title="Product Sample" />
//       <ProductSample />

//       {/* line effect  */}
//       <Divider title="About" />
//       {/* About   */}
//       <AboutCard />

//       {/* line effect  */}
//       <Divider title="Customer Feedback" />
//       {/* customer Feedback  */}
//       <Feedback />
//     </>
//   );
// };

// export default HomePage;



import { ReactLenis } from 'lenis/react';
import Carousel from "../components/Carousel";
import Feedback from "../components/Feedback";
import Divider from "../components/Divider";
import AboutCard from "../components/AboutCard";
import ProductSample from "../components/ProductSample";
import { motion } from "motion/react";
import PostSample from "../components/PostSample";
export default function index() {
  return (
    <ReactLenis root>
      <main>
        <article>
          <section className="text-white  h-screen  w-full bg-slate-950  grid place-content-center sticky top-0">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>


            {/* carousel  */}     <Carousel />

          </section>

          <section className="bg-gray-300 text-black grid place-content-center h-screen sticky top-0 rounded-tr-2xl rounded-tl-2xl overflow-hidden">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

            {/* ProductSample */}
            <Divider title="Product Sample" />
            <ProductSample />
          </section>

          <section className="bg-gray-300 text-black grid place-content-center h-screen sticky top-0 rounded-tr-2xl rounded-tl-2xl overflow-hidden">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

            {/* ProductSample */}
            <Divider title="Product Sample" />
            <ProductSample />
          </section>

          <section className="bg-gray-300 text-black grid place-content-center h-screen sticky top-0 rounded-tr-2xl rounded-tl-2xl overflow-hidden">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

            {/* line effect  */}
            <Divider title="About" />
            {/* About   */}
            <AboutCard />
          </section>
          <section className="text-primary  h-screen  w-full bg-slate-950  grid place-content-center sticky top-0">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
            {/* line effect  */}
            <Divider title="Customer Feedback" />
            {/* customer Feedback  */}
            <Feedback />
          </section>
        </article>
      </main>
    </ReactLenis>
  );
}
