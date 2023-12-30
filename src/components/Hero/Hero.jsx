import React from "react";

import Image1 from "../../assets/hero/women.png";
import Image2 from "../../assets/hero/shopping.png";
import Image3 from "../../assets/hero/sale.png";
import Slider from "react-slick";

const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "Upto 50% off on all Men's Wear",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit illo molestiae praesentium maiores excepturi dignissimos debitis nostrum alias eveniet ullam!",
  },
  {
    id: 2,
    img: Image2,
    title: "Upto 30% off on all Women's Wear",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit illo molestiae praesentium maiores excepturi dignissimos debitis nostrum alias eveniet ullam!",
  },
  {
    id: 3,
    img: Image3,
    title: "Upto 70% off on all Products",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit illo molestiae praesentium maiores excepturi dignissimos debitis nostrum alias eveniet ullam!",
  },
];
const Hero = () => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200">
      {/* Background pattern */}
      <div className="h-[700px] w-[700px] bg-primary/40 absolute right-0 -top-1/2 rounded-3xl rotate-45 -z-11"></div>
      {/* hero section */}
      <div className="container pb-8  sm:pb-0 ">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div key={data.id}>
              <div className=" p-[10px] grid grid-cols-1 sm:grid-cols-2">
                {/* text-content-section */}
                <div
                  data-aos="zoom-out"
                  data-aos-duration="500"
                  data-aos-once="true"
                  className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 sm:text-left order-2 sm:order-1"
                >
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold relative z-10">
                    {data.title}
                  </h1>
                  <p
                    className="text-sm"
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="100"
                  >
                    {data.description}
                  </p>
                  <div
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="300"
                  >
                    <button
                      className="
                  bg-gradient-to-r
                  from-primary
                  to-secondary
                  transition-all
                  hover:scale-105
                  duration-200
                  text-white
                  py-2
                  px-4
                  rounded-full"
                    >
                      Order Now
                    </button>
                  </div>
                </div>
                {/* {image-section} */}
                <div
                  className="order-1 sm:order-2"
                  data-aos="zoom-in"
                  data-aos-duration="500"
                  data-aos-once="true"
                >
                  <div className="relative z-10">
                    <img
                      src={data.img}
                      alt=""
                      className="w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto "
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
