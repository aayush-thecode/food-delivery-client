'use client'

import React from 'react'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IImage } from '@/interface/food-interface';

const Slider = dynamic(() => import('react-slick'), {
  ssr: false

});

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
    <div className="h-[550px] w-[550px] overflow-hidden">
      <Slider className="h-full" {...settings}>
        {images?.map((image, index) => {


          return (
            <div key={index} className="h-[550px] w-[550px]">
              <Image
                src={image.path}
                width={1000}
                height={1000}
                alt="Food detail image"
                className="w-full h-full object-cover"
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default ImageSlider;
