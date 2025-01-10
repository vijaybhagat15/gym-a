import React from "react";
function Trainers() {
  return (
    <section className="bg-gradient-to-b from-[#394d22] to-[#f4d35e] text-white font-sans py-6 px-6  border-b-2 border-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold  mb-8 font-serif">Meet Our Trainers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Trainer 1 */}
          <div className="   text-xl p-1 rounded-lg shadow-lg border-2 border-transparent  hover:scale-105 transition-transform">
            <img src="\imeges\t1.jpg" alt="Trainer 1" className="w-full h-64 object-cover rounded-3xl mb-4" />
            <h3 className="text-xl font-semibold mb-2   font-serif">John Doe</h3>
            <p className=" font-sans">Certified personal trainer with 5 years of experience in strength training.</p>
          </div>

          {/* Trainer 2 */}
          <div className="   text-xl p-1 rounded-lg shadow-lg border-2 border-transparent  hover:scale-105 transition-transform">
            <img src="https://www.clientel3.com/wp-content/uploads/2022/06/BecomePersonalTrainer-1024x683-1.jpg" alt="Trainer 2" className="w-full h-64 object-cover rounded-3xl mb-4" />
            <h3 className="text-xl font-semibold mb-2   font-serif">Jane Smith</h3>
            <p className=" font-sans">Specialized in yoga and flexibility training to improve mobility.</p>
          </div>

          {/* Trainer 3 */}
          <div className="  text-xl p-1 rounded-lg shadow-lg border-2 border-transparent hover:scale-105 transition-transform">
            <img src="https://az505806.vo.msecnd.net/cms/d58f1744-7071-415c-9d58-81f22ace4ad2/94e034fd-9635-4e7a-b591-57127fcfc4bc.jpg" alt="Trainer 3" className="w-full h-64 object-cover rounded-3xl mb-4" />
            <h3 className="text-xl font-semibold mb-2   font-serif">Mark Lee</h3>
            <p className=" font-sans">Certified nutritionist and strength training expert.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Trainers;
