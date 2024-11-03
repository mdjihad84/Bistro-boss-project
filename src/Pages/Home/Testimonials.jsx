import React from 'react';
import Slider from 'react-slick';
import SectionTitle from "../../Components/SectionTitle";
import TestimonialsImg from "../../assets/Home/Group.png"; // Adjust the path as necessary
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css'; 

// Custom Arrow Component
const NextArrow = (props) => {
    const { onClick } = props;
    return (
        <div  className="absolute right-0 z-10 p-2 cursor-pointer text-[#CD9003] hover:text-[#e77c40] text-[24px] sm:text-[30px] lg:text-[36px] mt-[-260px] sm:mt-[100px] md:mt-[-110px] lg:mt-[-135px]">
            <i className="fa-solid fa-chevron-right" onClick={onClick}></i>
        </div>
    );
};

const PrevArrow = (props) => {
    const { onClick } = props;
    return (
        <div className="absolute left-0 z-10 p-2 cursor-pointer text-[#CD9003] hover:text-[#e77c40] text-[30px] lg:mt-[100px] mt-[60px]">
            <i className="fa-solid fa-chevron-left" onClick={onClick}></i>
        </div>
    );
};

// Testimonials Carousel Component
const TestimonialsCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return (
        <Slider {...settings}>
            <div className="">
                <div className="flex justify-center space-x-1 text-[#e77c40] mb-4">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                </div>
                <div className="mt-2">
                    <img 
                        src={TestimonialsImg} 
                        className="mx-auto max-w-[400px] md:max-w-[600px]" 
                        alt="Group-img" 
                    />
                    <p className="mx-auto w-full max-w-[920px] text-center mt-4 px-4">
                        Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humor and the like). It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                    </p>
                    <h3 className="text-center text-[#CD9003] text-3xl mt-4">JANE DOE</h3>
                </div>
            </div>
            <div className="">
                <div className="flex justify-center space-x-1 text-[#e77c40] mb-4">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                </div>
                <div className="mt-2">
                    <img 
                        src={TestimonialsImg} 
                        className="mx-auto max-w-[400px] md:max-w-[600px]" 
                        alt="Group-img" 
                    />
                    <p className="mx-auto w-full max-w-[920px] text-center mt-4 px-4">
                        Another testimonial content here. This can include quotes or experiences.
                    </p>
                    <h3 className="text-center text-[#CD9003] text-3xl mt-4">JOHN SMITH</h3>
                </div>
            </div>
            {/* Repeat the above block for additional testimonials */}
        </Slider>
    );
};

// Main Testimonials Component
const Testimonials = () => {
    return (
        <div className="py-10 relative"> {/* Add relative positioning for absolute arrows */}
            <div>
                <SectionTitle subtitle={"---What Our Clients Say---"} title={"TESTIMONIALS"} />
            </div>
            <div className="container mx-auto">
                <TestimonialsCarousel />
            </div>
        </div>
    );
};

export default Testimonials;
