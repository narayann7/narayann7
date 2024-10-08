import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import baseAssets from "../assets/base_assets";

import userData from "@/data/user_data";
import SizedBox from "./commons/SizedBox";

export default function Backpack() {
  return (
    <div className="max-size flex col justify-center px-root">
      <div className="base-text  text-transparent font-semibold bg-clip-text bg-gradient-to-r from-amber-300 from-5% to-orange-400 to-70%   text-5xl">
        My Backpack
      </div>
      <SizedBox height={"20px"} />
      <div className="text-des">{userData.descriptions.backPackDetails[0]}</div>
      <SizedBox height={"20px"} />

      <div className="w-full h-max-content">{SampleSlider()}</div>
    </div>
  );
}

function BackpackItem({ image, name }: { image: string; name: string }) {
  name = name.toLowerCase();
  return (
    <div className=" h-[38px] max-w-fit min-w-[50px] row items-center justify-center bg-secondaryBackground px-[18px] rounded-[50px] border-solid border-[1.5px] border-borderColor">
      <img className="w-[18px] h-[18px]" src={image} alt={name} />
      <SizedBox width={"10px"} />
      <div className="base-text text-[15px] tracking-[1px]">{name}</div>
    </div>
  );
}

function SampleSlider() {
  return (
    <Swiper
      modules={[Autoplay]}
      loop={true}
      autoplay={{
        delay: 0,
      }}
      slidesPerView={8}
      breakpoints={{
        0: {
          slidesPerView: 2,
        },
        640: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 4,
        },
        1024: {
          slidesPerView: 5,
        },

        1280: {
          slidesPerView: 6,
        },
        1366: {
          slidesPerView: 7,
        },
        1536: {
          slidesPerView: 8,
        },
      }}
      freeMode={true}
      speed={1000}
      spaceBetween={10}
    >
      <SwiperSlide>
        <BackpackItem image={baseAssets.icons.lpIcon} name={"Compass"} />
      </SwiperSlide>
      <SwiperSlide>
        <BackpackItem image={baseAssets.icons.lpIcon} name={"Compass"} />
      </SwiperSlide>
      <SwiperSlide>
        <BackpackItem image={baseAssets.icons.lpIcon} name={"Compass"} />
      </SwiperSlide>
      <SwiperSlide>
        <BackpackItem image={baseAssets.icons.lpIcon} name={"Compass"} />
      </SwiperSlide>

      <SwiperSlide>
        <BackpackItem image={baseAssets.icons.lpIcon} name={"Compass"} />
      </SwiperSlide>

      <SwiperSlide>
        <BackpackItem image={baseAssets.icons.lpIcon} name={"Compass"} />
      </SwiperSlide>

      <SwiperSlide>
        <BackpackItem image={baseAssets.icons.lpIcon} name={"Compass"} />
      </SwiperSlide>
      <SwiperSlide>
        <BackpackItem image={baseAssets.icons.lpIcon} name={"Compass"} />
      </SwiperSlide>
      <SwiperSlide>
        <BackpackItem image={baseAssets.icons.lpIcon} name={"Compass"} />
      </SwiperSlide>
      <SwiperSlide>
        <BackpackItem image={baseAssets.icons.lpIcon} name={"Compass"} />
      </SwiperSlide>

      <SwiperSlide>
        <BackpackItem image={baseAssets.icons.lpIcon} name={"Compass"} />
      </SwiperSlide>

      <SwiperSlide>
        <BackpackItem image={baseAssets.icons.lpIcon} name={"Compass"} />
      </SwiperSlide>
    </Swiper>
  );
}
