import Navbar from "./Navbar";
import Hero from "./Hero";

function HomePage() {
  return (
    <div
      className="mb-5 "
      style={{
        maxHeight: "100vh ",
        backgroundImage: `url('/images/Hero section background 1.png')`,
        backgroundSize: "cover",
        objectFit: "cover",
      }}
    >
      <Navbar />
      <Hero />
    </div>
  );
}

export default HomePage;
