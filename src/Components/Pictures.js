import React from "react";
import HighlightsData from "../data/dataForHighlights";
// import { motion } from "framer-motion";
// import { fadeIn } from "../variants";

const Pictures = () => {
  return (
    <>
      <div className="relative isolate px-6 pt-14 lg:px-8" id="highlights">
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
        {/*main for Highlights */}
        <div className="mx-auto w-full h-full flex items-center justify-center flex-col py-20 pt-14">
          <h1 className="my-10 text-4xl tracking-tight text-indigo-600 open-sans sm:text-6xl">
            Pictures
          </h1>
          <div className="grid grid-cols-3 w-[1000px] max-lg:w-auto h-auto max-lg:grid-cols-1">
            {HighlightsData.map((HighlightsData) => {
              const { id, image } = HighlightsData;
              return (
                <div
                  className="grid grid-cols-3 max-lg:flex-col max-lg:grid-row-1"
                  key={id}
                >
                  <div className="w-[300px] h-[200px] rounded-lg mx-1 my-1">
                    <img
                      className="w-full h-full object-cover rounded-lg"
                      src={image}
                      alt={id}
                    />
                  </div>
                </div>
              );
            })}
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

export default Pictures;
