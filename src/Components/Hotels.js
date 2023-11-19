import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Hotels = () => {
  const linksForHotels = "https://t.me/abdurahmon_27";
  return (
    <>
      <div className="relative isolate px-6 pt-14 lg:px-8" id="hotels">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff809c] to-[#00e1ff] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        {/*main for Hotels */}
        <div className="mx-auto py-[1rem] sm:py-48 lg:py-56 w-full h-full flex items-center justify-center">
          <div className="flex flex-wrap justify-between items-start">
            <motion.div
              className="timeline"
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
            >
              <h2 className="text-[3rem] text-[#393e46] pacifico">
                Hotels in Jizzakh
              </h2>
              <div className="timeline-items m-[2em] border-transparent border border-l-indigo-600 lg:mr-[3em]">
                <div className="timeline-item ">
                  <h3>Uzbekistan Grand Hotel</h3>
                  <a
                    href={linksForHotels}
                    className="w-[15rem] h-auto relative rounded-full py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 flex justify-center items-center"
                  >
                    <span className="font-semibold text-indigo-600 flex justify-center items-center">
                      Learn More
                      <FaArrowCircleRight className="mx-2 -rotate-45" />
                    </span>
                  </a>
                  <div className="location text-gray-500">
                    60$ for one night
                  </div>
                </div>
                <div className="timeline-item">
                  <h3>Umariyon Hotel</h3>
                  <a
                    href={linksForHotels}
                    className="w-[15rem] h-auto relative rounded-full py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 flex justify-center items-center"
                  >
                    <span className="font-semibold text-indigo-600 flex justify-center items-center">
                      Learn More
                      <FaArrowCircleRight className="mx-2 -rotate-45" />
                    </span>
                  </a>
                  <div className="location text-gray-500">
                    22$ for one night
                  </div>
                </div>
                <div className="timeline-item">
                  <h3>Hotel Grand Royal</h3>
                  <a
                    href={linksForHotels}
                    className="w-[15rem] h-auto relative rounded-full py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 flex justify-center items-center"
                  >
                    <span className="font-semibold text-indigo-600 flex justify-center items-center">
                      Learn More
                      <FaArrowCircleRight className="mx-2 -rotate-45" />
                    </span>
                  </a>
                  <div className="location text-gray-500">
                    40$ for one night
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="timeline"
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
            >
              <div className="timeline-items m-[2em] border-transparent border border-l-indigo-600">
                <div className="timeline-item">
                  <h3>Yahshigul Guesthouse</h3>
                  <a
                    href={linksForHotels}
                    className="w-[15rem] h-auto relative rounded-full py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 flex justify-center items-center"
                  >
                    <span className="font-semibold text-indigo-600 flex justify-center items-center">
                      Learn More
                      <FaArrowCircleRight className="mx-2 -rotate-45" />
                    </span>
                  </a>
                  <div className="location text-gray-500">
                    30$ for one night
                  </div>
                </div>
                <div className="timeline-item">
                  <h3>Hotel Buyuk</h3>
                  <a
                    href={linksForHotels}
                    className="w-[15rem] h-auto relative rounded-full py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 flex justify-center items-center"
                  >
                    <span className="font-semibold text-indigo-600 flex justify-center items-center">
                      Learn More
                      <FaArrowCircleRight className="mx-2 -rotate-45" />
                    </span>
                  </a>
                  <div className="location text-gray-500">
                    45$ for one night
                  </div>
                </div>
                <div className="timeline-item">
                  <h3>Yurt Camp Safari</h3>
                  <a
                    href={linksForHotels}
                    className="w-[15rem] h-auto relative rounded-full py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 flex justify-center items-center"
                  >
                    <span className="font-semibold text-indigo-600 flex justify-center items-center">
                      Learn More
                      <FaArrowCircleRight className="mx-2 -rotate-45" />
                    </span>
                  </a>
                  <div className="location text-gray-500">
                    32$ for one night
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff809c] to-[#00e1ff] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Hotels;
