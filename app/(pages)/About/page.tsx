"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type Props = {};

const AboutPage = (props: Props) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 },
  };
  return (
    <section className="flex items-center mx-auto w-full h-[100vh] px-8 bg-gradient-to-t from-green-300 to-green-50">
      <div className="relative mx-10 px-20 w-full grid grid-cols-2">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mx-auto w-full flex flex-col justify-center text-left px-10"
        >
          <motion.h1 variants={item} className="text-6xl font-bold">
            About US
          </motion.h1>
          <motion.h3 variants={item} className="text-2xl font-bold">
            What is US? US is what?
          </motion.h3>
          <motion.div
            initial={{ opacity: 0, width: "0%" }}
            animate={{ opacity: 1, width: "100%" }}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
            className="rounded-lg w-full bg-black h-[5px] mt-4"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1, ease: "easeInOut" }}
            className="mt-4 font-medium text-lg"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            officiis ex dolorem consequatur unde, voluptates quasi, a molestias
            nemo suscipit error magnam, minima veniam quisquam laudantium harum
            deserunt rerum excepturi!
          </motion.p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.3, ease: "easeInOut" }}
          className="flex justify-center items-center w-full"
        >
          <Image
            src="https://images.unsplash.com/photo-1725504914698-c3e97f0e9ca4?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="logo"
            width={500}
            height={500}
            className="rounded-lg shadow-black shadow-md"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPage;
