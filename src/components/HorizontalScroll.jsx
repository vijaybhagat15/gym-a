import React from "react";

const InstagramStyleStories = () => {
  // Generate 50 items dynamically with images from i.pravatar.cc
  const items = Array.from({ length: 50 }, (_, index) => ({
    id: index + 1,
    image: `https://i.pravatar.cc/100?u=user${index + 1}`, // Unique user avatar
    title: `User ${index + 1}`, // Dynamic title
  }));

  return (
    <div className="flex justify-center bg-gray-200">
      <div className="flex overflow-x-auto space-x-4 p-1 scrollbar-hide">
        {items.map((item) => (
          <div key={item.id} className="flex flex-col items-center flex-shrink-0">
            {/* Gradient Border */}
            <div
              className="sm:w-[90px] sm:h-[90px] w-[50px] h-[50px] rounded-full bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-500 p-[2px]"
            >
              {/* Inner Circle */}
              <div className="rounded-full bg-white overflow-hidden w-full h-full">
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            {/* Title */}
            <p className="text-sm mt-1 text-gray-700">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstagramStyleStories;
