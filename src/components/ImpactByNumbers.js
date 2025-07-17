import { useTranslation } from "react-i18next";
import "bootstrap/dist/css/bootstrap.min.css";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const stats = [
  {
    img: "/images/number1.png",
    label: "impact.stat1",
    value: 25,
    display: "+25",
    sub: "",
  },
  {
    img: "/images/number2.png",
    label: "impact.stat2",
    value: 50,
    display: "+50K",
    sub: "sqm",
  },
  {
    img: "/images/number3.png",
    label: "impact.stat3",
    value: 3,
    display: "+3M",
    sub: "sqm",
  },
  {
    img: "/images/number4.png",
    label: "impact.stat4",
    value: 8,
    display: "8",
    sub: "",
  },
];

const ImpactByNumbers = () => {
  const { t } = useTranslation();
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div className="container py-5" ref={ref}>
      <div className="mb-4">
        <h1 className="fw-bold display-5 mb-2">{t("impact.title")}</h1>
        <p className="fs-5 text-secondary" style={{ letterSpacing: "3px" }}>
          {t("impact.description")}
        </p>
      </div>
      <div className="row justify-content-center">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            className="col-md-3 col-6 mb-4"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
          >
            <div className="overflow-hidden bg-white shadow-sm rounded-3">
              <div className="position-relative" style={{ height: "170px" }}>
                <img
                  src={stat.img}
                  alt=""
                  className="w-100 h-100"
                  style={{
                    objectFit: "cover",
                    filter: "brightness(0.7)",
                  }}
                />
                <div
                  className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                  style={{ zIndex: 2 }}
                >
                  <p
                    className="fs-5 text-white text-center mb-0"
                    style={{ textShadow: "0 1px 6px #000" }}
                  >
                    {t(stat.label)}
                  </p>
                </div>
              </div>
              <div className="px-3 py-3 text-center">
                <span
                  className="fw-bold display-5"
                  style={{
                    background: "linear-gradient(90deg, #699cc1, #3c6e9e)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {inView ? (
                    <CountUp
                      end={stat.value}
                      duration={2}
                      suffix={stat.display.replace(stat.value, "")}
                    />
                  ) : (
                    stat.display
                  )}
                </span>
                {stat.sub && (
                  <span
                    className="text-muted ms-1"
                    style={{ fontSize: "1rem" }}
                  >
                    {stat.sub}
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ImpactByNumbers;
