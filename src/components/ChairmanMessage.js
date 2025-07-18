import { FaQuoteLeft } from "react-icons/fa";
import { motion } from "framer-motion";

const ChairmanMessage = () => {
  return (
    <motion.section
      className="py-5 bg-white position-relative text-dark"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container">
        <div className="heading ms-3">
          <h5
            className="fs-5 mb-2"
            style={{ color: "#6a788d", letterSpacing: "3px" }}
          >
            Message from the
          </h5>
          <h2
            className="fw-semibold mb-4"
            style={{ color: "#223d5f", letterSpacing: "9px" }}
          >
            Chairman
          </h2>
        </div>

        <div className="position-relative">
          {/* Large screen icon (left) */}
          <FaQuoteLeft
            className="position-absolute d-none d-sm-block"
            style={{
              top: 0,
              left: 0,
              fontSize: "2rem",
              color: "#6ea0c7",
              transform: "translate(-100%, 0)",
            }}
          />
          {/* Small screen icon (right, mirrored) */}
          <FaQuoteLeft
            className="position-absolute d-block d-sm-none"
            style={{
              top: -85,
              right: 0,
              fontSize: "3rem",
              color: "#6ea0c7",
              transform: "scaleX(-1) translate(100%, 0)",
            }}
          />

          <motion.p
            className="ps-sm-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
            style={{
              fontFamily: "Vazirmatn, sans-serif",
              fontWeight: 300,
              fontSize: "20px",
              lineHeight: "169%",
              letterSpacing: "0.14em",
              color: "#65748A",
            }}
          >
            Our goal is to create <strong>long-term value</strong> for our
            shareholders by making <strong>sustainable investments</strong> in
            diverse asset classes while adhering to
            <strong>Islamic principles</strong>. We believe that our success is
            not only measured by financial gains but also by the positive impact
            we make on the communities we operate in. At MXB, we are committed
            to creating a <strong>better future</strong> for all stakeholders
            and contributing to the growth and development of our people,
            communities, and nation.
          </motion.p>
        </div>

        <div className="mt-4 ms-3">
          <p className="fw-semibold mb-0">Mrs. Nada Mohammed Alsubaeai,</p>
          <p className="text-muted small">Chairman, MXB Investment Company</p>
        </div>
      </div>
    </motion.section>
  );
};

export default ChairmanMessage;
