import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "../HoverCardSlider.css";
import { motion } from "framer-motion";

const cardData = [
  {
    id: 1,
    title: "Modern amenities",
    main: "/images/Card1.png",
    hover: "/images/cardhover1.png",
  },
  {
    id: 2,
    title: "Latest technology",
    main: "/images/Card2.png",
    hover: "/images/cardhover2.png",
  },
  {
    id: 3,
    title: "Sustainable design",
    main: "/images/Card3.png",
    hover: "/images/cardhover3.png",
  },
  {
    id: 4,
    title: "Eco-friendly",
    main: "/images/Card4.png",
    hover: "/images/cardhover4.png",
  },
  {
    id: 5,
    title: "Smart planning",
    main: "/images/Card5.png",
    hover: "/images/cardhover5.png",
  },
];

const HoverCardSlider = () => {
  return (
    <div
      style={{
        backgroundImage: "url('/images/Frame9.png')",
        backgroundSize: "cover",
        padding: "100px 0",
      }}
    >
      <div className="hover-slider-container py-5 container">
        <h3 className="mb-3 fs-2 fw-bold">What Sets Us Apart</h3>
        <p className="text-muted">
          Committed to building purposeful infrastructure.
        </p>

        <Swiper
          slidesPerView={2}
          spaceBetween={20}
          pagination={{ clickable: true }}
          breakpoints={{
            576: { slidesPerView: 1 },
            768: { slidesPerView: 3 },
            992: { slidesPerView: 4 },
          }}
          modules={[Pagination]}
          className="hover-swiper"
        >
          {cardData.map((card) => (
            <SwiperSlide key={card.id}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: card.id * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="card-hover mt-5">
                  <img src={card.main} alt="main" className="main-img" />
                  <img src={card.hover} alt="hover" className="hover-img" />
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HoverCardSlider;
