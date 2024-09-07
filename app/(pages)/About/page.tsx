"use client";

import { motion } from "framer-motion";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="flex flex-col w-screen h-screen justify-center items-center bg-gradient-to-b from-green-50 to-[#fbffbd]">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative mb-4 container mx-auto px-4"
      >
        <h1 className="text-6xl font-bold text-center">About US</h1>
        <h3 className="text-2xl font-bold text-center">
          What is US? US is what?
        </h3>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-6 w-full max-w-6xl grid grid-cols-2 gap-10"
      >
        <div className="flex justify-center items-center bg-teal-100 w-full h-[60vh]">
          <div className="border-2 border-black rounded-md w-[200px] h-[400px]"></div>
        </div>
        <div className="bg-black w-full h-[60vh]"></div>
      </motion.div>
    </div>
  );
};

export default page;
