import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const Hero = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  const glassStyle = {
    background: "#3f3d3d1a",
    backdropFilter: "blur(8px)",
    WebkitBackdropFilter: "blur(8px)",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    borderRadius: "10px",
    width: "fit-content",
    padding: "8px 12px",
  };

  const getXDirection = () => (isArabic ? 100 : -100); // RTL أو LTR

  return (
    <div
      className={`d-flex flex-column container justify-content-center ${
        isArabic ? "text-end align-items-end" : "text-start align-items-start"
      }`}
      style={{
        minHeight: "calc(100vh - 60px)",
      }}
    >
      {/* العنوان */}
      <motion.h1
        className="fw-bold fs-1 text-dark"
        style={{ letterSpacing: "6px", marginBottom :"-6px" }}
        initial={{ opacity: 0, x: getXDirection() }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        {t("hero.line1")}
      </motion.h1>

      {/* العنصر الأول */}
      <motion.p
        className="text-light fs-4"
        style={glassStyle}
        initial={{ opacity: 0, x: getXDirection() }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {t("hero.line2")}
      </motion.p>

      {/* العنصر الثاني */}
      <motion.div
        style={{ ...glassStyle, marginTop: "-10px" }}
        initial={{ opacity: 0, x: getXDirection() }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <p className=" text-light fs-4 m-0">{t("hero.line3")}</p>
        <h2 className="fw-bold my-3 text-light m-0">
          <span className="d-inline-block fs-4 me-2">
            {t("hero.line4with")}
          </span>
          <span className="d-inline-block">{t("hero.line4integrity")}</span>
        </h2>
      </motion.div>
    </div>
  );
};

export default Hero;
