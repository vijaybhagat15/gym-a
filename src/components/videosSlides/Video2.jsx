import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

function Video2() {
  // Create reference for the video
  const videoRef2 = useRef(null);

  useEffect(() => {
    // Attempt to autoplay the video on component mount
    if (videoRef2.current) {
      videoRef2.current
        .play()
        .catch((error) => console.error("Autoplay blocked: ", error.message));
    }
  }, []);

  return (
    <div className="sm:bg-gradient-to-r bg-gradient-to-r from-[#283618] to-[#f4d35e] h-screen grid grid-cols-1 md:grid-cols-2 items-center font-sans px-2 md:px-4">
      {/* Left Section: Text Content */}
      <motion.div
        className="items-center justify-center min-h-screen hidden md:flex"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="text-white px-8">
          <motion.p
            className="text-xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            GymT1
          </motion.p>
          <motion.h1
            className="sm:text-3xl text-2xl font-extrabold mt-2 text-accent font-serif"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            MASTER THE BENCH PRESS
          </motion.h1>
          <motion.p
            className="mt-4 text-lg leading-relaxed text-white font-sans"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Build upper body strength with the Bench Press! Learn proper form,
            tips, and the best supplements for explosive power.
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
              START
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Right Section: Video Slider with Gradient Background */}
      <motion.div
        className="justify-center items-center relative"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-gradient-radial from-[#000000] via-[#283618] to-transparent opacity-80 rounded-lg"></div>
        <div
          className="relative w-full max-w-md h-96 flex items-center justify-center z-10"
          style={{ height: "500px", width: "400px" }}
        >
          <motion.video
            ref={videoRef2}
            src="/videos/v2.mp4" // Replace with your video URL
            className="absolute w-full h-full object-contain transition-opacity duration-1000 ease-in-out rounded-lg"
            loop
            muted
            autoPlay
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2 }}
          />
        </div>
      </motion.div>
    </div>
  );
}

export default Video2;
