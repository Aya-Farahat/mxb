import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const DiscoverMore = () => {
  const { t } = useTranslation();

  return (
    <div
      style={{
        backgroundImage: "url('/images/Frame7.png')",
        position: "relative",
        backgroundSize: "cover",
        backgroundPosition: "center",
        overflow: "hidden",
      }}
    >
      <div className="container" style={{ padding: "200px 0 50px" }}>
        <div className="d-flex flex-lg-row align-items-start justify-content-evenly">
          {/* النص */}
          <motion.div
            className="mb-4 mb-lg-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2
              className="fw-bold"
              style={{
                fontFamily: "'IBM Plex Serif', serif",
                fontWeight: 700,
                fontSize: "36px",
                lineHeight: "136%",
                letterSpacing: "6px",
              }}
            >
              {t("discover.title", "Discover More")}
            </h2>

            <h3
              className="fw-normal mb-3"
              style={{
                fontFamily: "'IBM Plex Serif', serif",
                fontWeight: 700,
                fontSize: "36px",
                lineHeight: "136%",
                letterSpacing: "14%",
                color: "#193050",
              }}
            >
              {t("discover.subtitle", "About Our Projects")}
            </h3>

            <p
              className="text-secondary mb-4"
              style={{
                fontSize: "20px",
                lineHeight: "136%",
                letterSpacing: "3px",
                maxWidth: "450px",
              }}
            >
              {t(
                "discover.description",
                "A forward-thinking developments that embody Saudi Vision 2030 – blending sustainability, innovation, and architectural excellence."
              )}
            </p>

            <a
              href="#"
              className="btn btn-link px-0"
              style={{
                color: "#3c6e9e",
                fontWeight: "bold",
                fontSize: "1.1rem",
              }}
            >
              {t("discover.seeMore", "See more")}
              <span className="ms-2">
                <svg width="20" height="20" fill="#3c6e9e" viewBox="0 0 20 20">
                  <circle cx="10" cy="10" r="10" opacity="0.2" />
                  <path
                    d="M7 10h6m0 0l-2-2m2 2l-2 2"
                    stroke="#3c6e9e"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
              </span>
            </a>

            <div
              className="position-absolute d-none d-lg-block"
              style={{ left: "-100px", bottom: "0px" }}
            >
              <img
                src="/images/discsub.png"
                alt="discover img"
                className=" img-fluid mt-4"
                style={{ width: "500px", height: "auto", objectFit: "cover" }}
              />
            </div>
          </motion.div>

          {/* الصور */}
          <motion.div
            className="d-none d-lg-flex ps-lg-4"
            style={{ gap: "1rem", flexShrink: 0 }}
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* العمود الأول */}
            <div className="d-flex flex-column">
              <img
                src="/images/Discover/disc1.png"
                alt="Al Olaya"
                className="img-fluid rounded shadow-sm mb-3"
                style={{
                  width: "180px",
                  height: "250px",
                  objectFit: "cover",
                }}
              />
              <img
                src="/images/Discover/disc2.png"
                alt="Al Olaya"
                className="img-fluid rounded"
                style={{
                  width: "180px",
                  height: "250px",
                  objectFit: "cover",
                }}
              />
            </div>

            {/* العمود الثاني */}
            <div className="d-flex flex-column" style={{ marginTop: "100px" }}>
              <img
                src="/images/Discover/disc4.png"
                alt="Al Olaya"
                className="img-fluid rounded shadow-sm mb-3"
                style={{
                  width: "180px",
                  height: "250px",
                  objectFit: "cover",
                }}
              />
              <img
                src="/images/Discover/disc3.png"
                alt="Al Olaya"
                className="img-fluid rounded shadow-sm mb-3"
                style={{
                  width: "180px",
                  height: "250px",
                  objectFit: "cover",
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default DiscoverMore;
