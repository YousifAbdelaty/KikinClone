import { motion } from "framer-motion";

const AnimHeader = () => {
  return (
    <motion.h1
      initial="initial"
      whileHover="hovered"
      className="  overflow-hidden  relative text-[13vw] lg:leading-[8vw] lg:text-[10vw]  text-center  tracking-tight leading-[12vw] font-Roboto font-[1000] uppercase "
    >
      <div>
        {"financing".split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
            }}
            key={i}
            transition={{
              duration: 0.25,
              ease: "easeInOut",
              delay: 0.05 * i,
            }}
            className="bg-clip-text text-transparent bg-gradient-to-r from-neongreen via-emerald-500 to-green-800  inline-block"
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute  inset-0">
        {"financing".split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            key={i}
            transition={{
              duration: 0.25,
              ease: "easeInOut",
              delay: 0.05 * i,
            }}
            className="bg-clip-text text-transparent bg-gradient-to-r from-neongreen via-emerald-500 to-green-800  inline-block"
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.h1>
  );
};
export default AnimHeader;
