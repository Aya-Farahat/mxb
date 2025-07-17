import React from "react";
import { motion } from "framer-motion";

function InvestmentPartners() {
  const partners = [
    { src: "/images/bank/albilad.png", alt: "Albilad Bank" },
    { src: "/images/bank/giash.jpeg", alt: "Giash" },
    { src: "/images/bank/jadwa-removebg-preview.png", alt: "Jadwa" },
    { src: "/images/bank/sudi.png", alt: "Sudi" },
    { src: "/images/bank/impalc.png", alt: "Impalc" },
  ];

  return (
    <div className="container py-5">
      <h3 className=" mb-5" style={{ color: "#65748A" }}>
        Our Investment Partners
      </h3>

      <div className="row justify-content-between g-4">
        {partners.map((partner, index) => (
          <motion.div
            key={index}
            className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex justify-content-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            <img
              src={partner.src}
              alt={partner.alt}
              className="img-fluid"
              style={{
                maxHeight: "100px",
                objectFit: "contain",
                padding: "10px",
              }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default InvestmentPartners;
