import { CiLocationOn } from "react-icons/ci";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Image from "../assest/j1.jpeg";
import Image2 from "../assest/zomin1.jpg";
import { Link } from "react-scroll";

export default function Home() {
  const forHref = "#";

  return (
    <div className="bg-white">
      <div
        className="relative isolate px-6 pt-14 lg:px-8 max-lg:pt-40 flex items-center justify-center "
        id="home"
      >
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="flex flex-row max-lg:flex-col">
          <div className="float-right mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 max-lg:hidden -translate-y-24">
            <motion.div
              variants={fadeIn("down", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="w-[450px] h-[250px] border my-5  rounded-lg"
            >
              <img
                src={Image2}
                alt="image1"
                className="w-full h-full object-cover rounded-lg"
              />
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.6 }}
              className="w-[450px] h-[250px] border my-5 mx-12  rounded-lg"
            >
              <img
                src={Image}
                alt="image2"
                className="w-full h-full object-cover  rounded-lg"
              />
            </motion.div>
          </div>
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="text-center">
              <motion.h1
                variants={fadeIn("up", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.7 }}
                className="text-4xl font-bold text-[#393e46] sm:text-6xl pacifico tracking-wide"
              >
                Jizzakh
              </motion.h1>
              <motion.div
                variants={fadeIn("up", 0.5)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.7 }}
                className="sm:mb-8 sm:flex sm:justify-center"
              >
                <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 flex justify-center items-center my-12 cursor-pointer">
                  See in location
                  <a
                    href={forHref}
                    className="font-semibold text-indigo-600 flex justify-center items-center"
                  >
                    <span
                      className="absolute inset-0 mx-1"
                      aria-hidden="true"
                    />
                    <CiLocationOn />
                    <span
                      aria-hidden="true"
                      className="flex justify-center items-center"
                    >
                      &rarr;
                    </span>
                  </a>
                </div>
              </motion.div>
              <motion.p
                variants={fadeIn("up", 0.6)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.7 }}
                className="mt-6 text-lg leading-8 text-gray-600"
              >
                Habibi come to Jizzakh. In this website you can find more
                information about Jizzakh. Jizzakh is a city located in central
                Uzbekistan, known for its historical landmarks and beautiful
                landscapes. With a rich culture and vibrant community, Jizzakh
                offers visitors a unique experience of traditional Uzbekistan.
              </motion.p>
              <motion.div
                variants={fadeIn("up", 0.7)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.7 }}
                className="mt-10 flex items-center justify-center gap-x-6"
              >
                <Link
                  smooth={true}
                  spy={true}
                  to="destinations"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Best Places
                </Link>
                <Link
                  to="highlights"
                  smooth={true}
                  spy={true}
                  className="text-sm font-semibold leading-6 text-gray-900 cursor-pointer"
                >
                  Pictures <span aria-hidden="true">→</span>
                </Link>
              </motion.div>
            </div>
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
    </div>
  );
}
