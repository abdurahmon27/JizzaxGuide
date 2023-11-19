import React from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useState, useEffect } from "react";
import data from "../data/data";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { FaArrowCircleRight } from "react-icons/fa";

function Destinations() {
  const [Destinations] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = Destinations.length - 1;

    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, Destinations]);
  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);

    return () => clearInterval(slider);
  });
  return (
    <>
      <div
        className=" z-40 relative isolate px-6 pt-14 lg:px-8"
        id="destinations"
      >
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

        <div className="mx-auto w-full h-full flex items-center justify-center max-lg:-translate-y-1">
          <div className="flex items-center justify-center mx-auto max-lg:flex-col max-lg:translate-y-20">
            <div className="max-lg:flex">
              <motion.button
                variants={fadeIn("right", 0.5)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.7 }}
                className="text-[50px] flex items-center justify-center border border-white rounded-full w-[80px] h-[80px] my-5 ml-5 shadow-lg text-indigo-600 hover:border-indigo-300"
                onClick={() => setIndex(index - 1)}
              >
                <FiChevronLeft />
              </motion.button>
              <motion.button
                variants={fadeIn("left", 0.5)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.7 }}
                className="hidden text-[50px] items-center justify-center border border-white rounded-full w-[80px] h-[80px] my-5 ml-5 shadow-lg text-indigo-600 max-lg:flex hover:border-indigo-300"
                onClick={() => setIndex(index + 1)}
              >
                <FiChevronRight />
              </motion.button>
            </div>
            <div className="w-[800px] h-[500px] mx-aut flex justify-center items-center max-lg:flex-col max-lg:w-[300px]">
              {data.map((data, dataIndex) => {
                const { id, image, title, describe, link } = data;
                let position = "nextSlide";
                if (dataIndex === index) {
                  position = "activeSlide";
                }
                if (
                  dataIndex === index - 1 ||
                  (index === 0 && dataIndex === Destinations.length - 1)
                ) {
                  position = "lastSlide";
                }
                return (

                  <motion.div
                    variants={fadeIn("down", 0.5)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: true, amount: 0.7 }}
                    className=" z-40 absolute flex w-[800px] h-[500px] mx-auto justify-center items-center max-lg:flex-col max-lg:w-[350px] max-lg:h-[300px]"
                    key={id}
                  >
                    <div
                      className={` ${position} w-[350px] h-[200px] float-left m-5 flex items-center justify-center max-lg:w-[300px]`}
                    >
                      <img
                        src={image}
                        alt={title}
                        className="object-cover rounded-md w-full h-full"
                      />
                    </div>
                    {/* <div className="max-lg:w-full max-lg:h-auto h-[13rem] border-l max-lg:border-l-transparent max-lg:border-b border-indigo-600 mr-5 lg:my-auto max-lg:mx-auto"> </div> */}
                    <div className="max-lg:py-3 lg:px-3 my-auto mx-auto">
                      <article key={id} className={position}>
                        <div className="slider-text">
                          <h3 className="text-[32px] pacifico text-[#393e46]">{title}</h3>
                          <p className="text-gray-600 italic">{describe}</p>
                          <a
                            href={link}
                            className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 flex justify-center items-center my-12"
                          >
                            <span className="font-semibold text-indigo-600 flex justify-center items-center">
                              Learn More{" "}
                              <FaArrowCircleRight className="mx-3 -rotate-45" />
                            </span>
                          </a>
                        </div>
                      </article>
                    </div>
                  </motion.div>
                );
              })}
            </div>
            <motion.button
              variants={fadeIn("left", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="text-[50px] flex items-center justify-center border border-white rounded-full w-[80px] h-[80px] my-5 ml-5 shadow-lg text-indigo-600 max-lg:hidden hover:border-indigo-300"
              onClick={() => setIndex(index + 1)}
            >
              <FiChevronRight />
            </motion.button>
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
}

export default Destinations;
