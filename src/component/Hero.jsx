import { motion } from "framer-motion";

const variants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  initial2: {
    opacity: 0,
  },
  animate: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.35 * i,
    },
  }),
  show: (i) => ({
    opacity: 1,
    transition: {
      duration: 0.25,
      delay: 0.45 * i,
    },
  }),
};

const Hero = () => {
  return (
    <main className="flex  bg-main flex-col justify-between items-center  pt-20">
      <div className=" z-10 flex flex-col justify-between gap-6 items-center ">
        <div>
          <motion.h1
            variants={variants}
            custom={1}
            animate="animate"
            initial="initial"
            className="  overflow-hidden  text-[13vw] lg:leading-[8vw] lg:text-[10vw]  text-center  tracking-tight leading-[12vw] bg-clip-text text-transparent bg-gradient-to-r from-neongreen via-emerald-500 to-green-800 font-Roboto font-[1000] uppercase "
          >
            financing
          </motion.h1>
          <motion.h1
            variants={variants}
            custom={2}
            animate="animate"
            initial="initial"
            className="  overflow-hidden text-[13vw] lg:leading-[8vw] lg:text-[10vw]  text-center  tracking-tight leading-[11vw] bg-clip-text text-transparent bg-gradient-to-r from-neongreen via-emerald-500 to-green-800 font-Roboto font-[1000] uppercase "
          >
            the future
          </motion.h1>
        </div>
        <motion.div
          variants={variants}
          custom={3}
          animate="show"
          initial="initial2"
          className="flex flex-col  max-w-[69vw] lg:max-w-[38vw] items-center gap-3 font-sans"
        >
          <p className=" text-center text-offwhite font-[600] text-[16px] sm:text-[20px] leading-[140%]">
            Pay suppliers faster, manage invoices, and extend cash for longer.
            Get access to funding without giving up equity, so that you can
            focus on growing your company.
          </p>
          <a
            className="block border-[4px] text-main border-solid border-transparent px-6 sm:px-8 sm:py-4 py-3 bg-neongreen rounded-[10px]    uppercase text-center mt-2 font-[700] text-md"
            href="#"
            id=""
          >
            Get Funding
          </a>
        </motion.div>
      </div>
      <img
        src="https://cdn.prod.website-files.com/635273ea37c256ef2835d522/654a36b6f78e92b5209148af_Kikin_Illustrations_Scene_01_RGB%202.svg"
        className="  -mt-[40%] sm:-mt-[14%] max-w-none  sm:w-full"
        alt=""
      />
    </main>
  );
};
export default Hero;
