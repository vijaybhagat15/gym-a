
function Equipment() {
  return (
    <section className=" pt-6 px-6 bg-gradient-to-b from-[#394d22] to-[#f4d35e] text-white  border-b-2 border-white">
      {/* Content */}
      <div className="  container mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#fefae0] font-serif mb-8">
          Our Top Gym Equipment
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Dumbbell Set */}
          <div>
            <div
              className="relative bg-cover bg-center rounded-3xl shadow-lg overflow-hidden h-72 group border-2 border-gray-400  hover:scale-105 transition-transform flex flex-col justify-between"
              style={{
                backgroundImage:
                  'url(https://cdn.shopify.com/s/files/1/0444/1256/7702/products/Adjustable-Dumbbells-Workout-Strength-Training_2048x2048.jpg?v=16025805)',
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-0 transition"></div>

            </div>
            <h3 className=" z-10 text-xl hover:scale-110 font-serif  pt-2">
              Dumbbell Set
            </h3>
          </div>

          {/* Treadmill */}
          <div>
            <div
              className="relative bg-cover bg-center rounded-3xl shadow-lg overflow-hidden h-72 group border-2 border-gray-400  hover:scale-105 transition-transform flex flex-col justify-between"
              style={{
                backgroundImage:
                  'url(https://johnsonfitness.id/wp-content/uploads/2021/02/1-endurance-series-treadmill-TOUCHXL-T-ES-F-scaled.jpg)',
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-0 transition"></div>

            </div>
            <h3 className=" z-10 text-xl  hover:scale-110 font-serif  pt-4 mb-4">
              Treadmill
            </h3>
          </div>

          {/* Chest Press Machine */}
          <div>
            <div
              className="relative bg-cover bg-center rounded-3xl shadow-lg overflow-hidden h-72 group border-4 border-gray-400  hover:scale-105 transition-transform flex flex-col justify-between"
              style={{
                backgroundImage:
                  'url(https://www.eliteexerciseequipment.com/wp-content/uploads/2018/12/PPS-200_chestpress2.jpg)',
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-0 transition"></div>

            </div>
            <h3 className=" z-10 text-xl hover:scale-110 font-serif  pt-4">
              Chest Press Machine
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Equipment;
