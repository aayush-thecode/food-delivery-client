import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="relative tracking-wider min-h-[520px] w-full font-serif mt-1">
      <div className="absolute inset-0 h-full">
        <Image
          src="/hero/hero-food.jpeg"
          height={1500}
          width={1500}
          className="w-full h-full object-cover"
          alt="hero cover image"
        />
      </div>
      <div className="absolute inset-0 bg-black/45">
        {/* Content */}
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 z-50 px-4 w-full sm:w-4/5 md:w-3/4 lg:w-2/3 xl:w-1/2">
          <div className="tracking-wider text-center">
            <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white">
              Hot and Delicious Food, Delivered to Your Doorstep
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mt-3 text-white">
              Order from the best local restaurants with fast delivery to your door
            </p>
          </div>
          <div className="flex justify-center mt-4">
            <button className="px-5 py-3 bg-orange-400 font-bold uppercase text-white rounded-md cursor-pointer hover:bg-orange-500 transition-all hover:text-white-800">
              Find Food
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
