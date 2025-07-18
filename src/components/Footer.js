import { FaLinkedin, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      className="text-light pt-4 position-relative"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      style={{
        backgroundImage: "url('/images/footerbg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        overflow: "hidden",
      }}
    >
      {/* طبقة الفلتر الأزرق */}
      <div
        className="position-absolute w-100 h-100 top-0 start-0"
        style={{
          backgroundColor: "#1c4172b0",
          backdropFilter: "blur(2px)",
          WebkitBackdropFilter: "blur(2px)",
          zIndex: 1,
        }}
      />

      <div
        className="container p-4 position-relative "
        style={{
          background: "rgba(77, 92, 123, 0.4)",
          backdropFilter: "blur(7px)",
          WebkitBackdropFilter: "blur(12px)",
          zIndex: 2,
          marginTop: "100px",
        }}
      >
        <div className="row justify-content-around align-items-start text-light gy-4">
          {/* Logo */}
          <div className="col-12 col-md-4 text-center text-md-start">
            <motion.img
              src="/images/logo-removebg-preview.png"
              alt="Logo"
              className="mb-2"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              style={{ width: "260px", transition: "0.3s ease" }}
            />
          </div>

          {/* Site Links */}
          <div className="col-6 col-md-2">
            <h6 className="fw-bold mb-3 text-white">Site Links</h6>
            <ul className="list-unstyled">
              {["Home", "Investments", "Real Estate", "Careers", "About"].map(
                (item, idx) => (
                  <li key={idx}>
                    <a href="#" className="text-white text-decoration-none">
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Policies */}
          <div className="col-6 col-md-2">
            <h6 className="fw-bold mb-3 text-white">Policies & Legal</h6>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="col-12 col-md-3 text-center text-md-start">
            <h6 className="fw-bold mb-3 text-white">Get In Touch</h6>
            <div className="d-flex justify-content-center justify-content-md-start gap-4 fs-3">
              <motion.a
                href="#"
                className="text-white"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaLinkedin />
              </motion.a>
              <motion.a
                href="#"
                className="text-white"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaWhatsapp />
              </motion.a>
              <motion.a
                href="#"
                className="text-white"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaInstagram />
              </motion.a>
            </div>
          </div>
        </div>

        <hr
          className="mt-4"
          style={{ borderColor: "rgba(255, 255, 255, 0.3)" }}
        />
        <p
          className="text-center text-white-50 mb-0"
          style={{ fontSize: "0.9rem", letterSpacing: "3px" }}
        >
          © 2025 MXB | All Rights Reserved
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
