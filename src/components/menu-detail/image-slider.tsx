'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IImage } from '@/interface/food-interface';

const Slider = dynamic(() => import('react-slick'), { ssr: false });

interface IProps {
  images: IImage[];
}

const ImageSlider: React.FC<IProps> = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    swipeToSlide: true,
  };

  return (
    <div className="w-full max-w-[400px] sm:max-w-[500px] md:max-w-[600px] aspect-[4/3] mx-auto relative rounded-2xl overflow-hidden">
      <Slider {...settings}>
        {images?.map((image, index) => (
          <div key={index} className="relative w-full h-[300px] sm:h-[400px] md:h-[450px]">
            <Image
              src={image.path}
              alt={`Food image ${index + 1}`}
              fill
              className="object-cover w-full h-full rounded-2xl"
              sizes="(max-width: 800px) 100vw, 600px"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
