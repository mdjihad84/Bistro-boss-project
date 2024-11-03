
import SectionTitle from "../../Components/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import img1 from "../../assets/home/slide1.jpg";
import img2 from "../../assets/home/slide2.jpg";
import img3 from "../../assets/home/slide3.jpg";
import img4 from "../../assets/home/slide4.jpg";
import img5 from "../../assets/home/slide5.jpg";

const Category = () => {
  return (
    <div className="">
      <SectionTitle
        subtitle={"From 11:00am to 10:00pm"}
        title={"special menu"}/>

      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper">
          
        <SwiperSlide className="mb-16">
          <img src={img1} alt="" />
          <h1 className="text-white text-[12px] md:text-2xl lg:text-2xl text-center -mt-[1.5rem] md:-mt-16 font-semibold">
            Salads
          </h1>
        </SwiperSlide>

        <SwiperSlide>
          <img src={img2} alt="" />
          <h1 className="text-white text-[12px] md:text-2xl lg:text-2xl text-center -mt-[1.5rem] md:-mt-16 font-semibold">
            Pizza
          </h1>
        </SwiperSlide>

        <SwiperSlide>
          <img src={img3} alt="" />
          <h1 className="text-white text-[12px] md:text-2xl lg:text-2xl text-center -mt-[1.5rem] md:-mt-16 font-semibold">
            Soups
          </h1>
        </SwiperSlide>

        <SwiperSlide>
          <img src={img4} alt="" />
          <h1 className="text-white text-[12px] md:text-2xl lg:text-2xl text-center -mt-[1.5rem] md:-mt-16 font-semibold">
            Cake
          </h1>
        </SwiperSlide>

        <SwiperSlide>
          <img src={img1} alt="" />
          <h1 className="text-white text-[12px] md:text-2xl lg:text-2xl text-center -mt-[1.5rem] md:-mt-16 font-semibold">
            Salad
          </h1>
        </SwiperSlide>

        <SwiperSlide>
          <img src={img3} alt="" />
          <h1 className="text-white text-[12px] md:text-2xl lg:text-2xl text-center -mt-[1.5rem] md:-mt-16 font-semibold">
            Soups
          </h1>
        </SwiperSlide>

        <SwiperSlide>
          <img src={img1} alt="" />
          <h1 className="text-white text-[12px] md:text-2xl lg:text-2xl text-center -mt-[1.5rem] md:-mt-16 font-semibold">
            Salad
          </h1>
        </SwiperSlide>

        <SwiperSlide>
          <img src={img2} alt="" />
          <h1 className="text-white text-[12px] md:text-2xl lg:text-2xl text-center -mt-[1.5rem] md:-mt-16 font-semibold">
            Pizza
          </h1>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default Category;
