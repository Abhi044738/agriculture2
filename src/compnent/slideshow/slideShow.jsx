import "./style.css";
import { useEffect, useState } from "react";
import a from "../../Assets/image/a.jpg";
import b from "../../Assets/image/b.jpg";
import c from "../../Assets/image/c.jpg";
import d from "../../Assets/image/d.jpg";

export const SlideShow = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const images = [
    {
      src: a,
      alt: "Image 1",
    },
    {
      src: b,
      alt: "Image 2 ",
    },
    {
      src: c,
      alt: "Image 2 ",
    },
    {
      src: d,
      alt: "Image 2 ",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prevSlide) => (prevSlide + 1) % 4);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="App">
      <div className="image-container active">
        {images[activeSlide] && ( // Render only the active image
          <div key={activeSlide} className="slide-active">
            <img src={images[activeSlide].src} alt={images[activeSlide].alt} />
          </div>
        )}
      </div>
    </div>
  );
};
