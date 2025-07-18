import { motion } from "framer-motion";

const Hero = () => {
  const glassStyle = {
    background: "#3f3d3d39",
    backdropFilter: "blur(8px)",
    WebkitBackdropFilter: "blur(8px)",
    borderRadius: "5px",
    width: "fit-content",
    padding: "0px 5px",
  };

  return (
    <div
      className="container d-flex flex-column  justify-content-center text-start align-items-start"
      style={{
        minHeight: "calc(100vh - 60px)",
      }}
    >
      {/* العنوان */}
      <motion.h1
        className="fw-bold fs-1 text-dark"
        style={{ letterSpacing: "11px", marginBottom: "-6px" }}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        CREATING
      </motion.h1>

      {/* العنصر الأول */}
      <motion.p
        className="text-light fs-4"
        style={glassStyle}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        VALUE RESPONSIBILITY
      </motion.p>

      {/* العنصر الثاني */}
      <motion.div
        style={{ ...glassStyle, marginTop: "-10px" }}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <p className="text-light fs-4" style={{ marginBottom: "-20px" }}>
          INVESTING
        </p>
        <h2 className="fw-bold my-3 text-light" style={{ letterSpacing: "6px" }}>
          <span className="d-inline-block fs-4 me-2">WITH</span>
          <span className="d-inline-block">INTEGRITY</span>
        </h2>
      </motion.div>
    </div>
  );
};

export default Hero;
