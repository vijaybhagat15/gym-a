import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Slide1() {
  return (
    <div className="sm:bg-gradient-to-bl bg-gradient-to-r from-[#283618] to-[#f4d35e] h-screen grid grid-cols-1 md:grid-cols-2 items-center font-sans px-2 md:px-4">
      {/* Left Section: Image Slider with Gradient Background */}
      <motion.div
        className="hidden md:flex justify-center items-center relative"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-gradient-radial from-[#000000] via-[#283618] to-transparent opacity-80 rounded-lg"></div>
        <div
          className="relative w-full max-w-md h-96 flex items-center justify-center z-10"
          style={{ height: "500px", width: "400px" }}
        >
          <motion.img
            src="https://www.seekpng.com/png/full/239-2393218_gym-png.png"
            className="absolute w-full h-full object-contain transition-opacity duration-1000 ease-in-out"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2 }}
          />
        </div>
      </motion.div>

      {/* Right Section: Text Content */}
      <motion.div
        className="flex items-center justify-center min-h-screen"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="text-white px-8">
          <motion.p
            className="font-bold text-xl font-serif"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Gym T1
          </motion.p>
          <motion.h1
            className="sm:text-4xl text-2xl font-extrabold mt-2 text-accent font-serif"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            GET EXCLUSIVE
            <br />
            GYM GUIDANCE
          </motion.h1>
          <motion.p
            className="mt-4 text-lg leading-relaxed text-white font-sans"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Achieve your fitness goals with Gym T1! Explore top-quality
            supplements and connect with expert trainers.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <Link
              to="/products"
              className="mt-6 px-6 py-3 bg-orange-500 text-white font-bold text-lg rounded-xl hover:bg-orange-600 inline-block text-center font-sans"
            >
              SHOP NOW
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default Slide1;