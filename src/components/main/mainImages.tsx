"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Thumbs, EffectFade } from "swiper/modules";
import CommonImage from "../image/Image";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import "swiper/css/thumbs";
import image1 from "public/images/main/image1.jpg";
import image2 from "public/images/main/image2.jpg";
import image3 from "public/images/main/image3.jpg";
import { useState } from "react";

export default function MainImages() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const images = [
    image1.src,
    image2.src,
    image3.src,
    image1.src,
    image2.src,
    image3.src,
    image1.src,
    image2.src,
    image3.src,
  ];

  return (
    <div className="rounded-lg overflow-hidden bg-foreground p-3 flex flex-col w-full aspect-[1/1.2] gap-3">
      <Swiper
        className="w-full h-fit shrink-0"
        modules={[Autoplay, Thumbs, EffectFade]}
        autoplay={{ delay: 3000, disableOnInteraction: true }}
        thumbs={{ swiper: thumbsSwiper }}
        spaceBetween={0}
        slidesPerView={1}
        effect={"fade"}
        loop
      >
        {images.map((item: string, index: number) => (
          <SwiperSlide key={`main_images_${index}`}>
            <CommonImage src={item} alt={`main wedding image ${index}`} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        className="thumbs_swiper w-full h-fit"
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[Thumbs]}
      >
        {images.map((item: string, index: number) => (
          <SwiperSlide key={`main_images_${index}`}>
            <CommonImage src={item} alt={`main wedding image ${index}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
