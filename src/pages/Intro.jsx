import Slide1 from "../components/slides/Slide1";
import Slide2 from "../components/slides/Slide2";
import Slide3 from "../components/slides/Slide3";
import { useState, useEffect } from "react";

const Intro = () => {
  // State to track the current slide index
  const [currentSlide, setCurrentSlide] = useState(0);

  // State to store a unique key for re-rendering
  const [key, setKey] = useState(() => Date.now()); // Initialize with a timestamp

  // Array of slides
  const slides = [<Slide1 key="slide1" />, <Slide2 key="slide2" />, <Slide3 key="slide3" />];

  // Function to navigate to the next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setKey(Date.now()); // Update the key to trigger re-render
  };

  // Function to navigate to the previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setKey(Date.now()); // Update the key to trigger re-render
  };

  // Re-initialize the key on page reload
  useEffect(() => {
    setKey(Date.now());
  }, []);

  return (
    <div key={key} className="intro-container relative w-full h-screen overflow-hidden  border-b-2 border-white">
      <div
        className="slides flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0 h-full">
            {slide}
          </div>
        ))}
      </div>
      {/* Navigation Buttons */}
      <button
        className="absolute sm:left-4 left-1 top-1/2 transform -translate-y-1/2 bg-transprent border-2 border-white font-bold text-white p-2 rounded-full"
        onClick={prevSlide}
      >
        &lt;
      </button>
      <button
        className="absolute sm:right-4  right-1 top-1/2 transform -translate-y-1/2 bg-transprent border-2 border-white font-bold text-white p-2 rounded-full"
        onClick={nextSlide}
      >
        &gt;
      </button>
    </div>
  );
};

export default Intro;
