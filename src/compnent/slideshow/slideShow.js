import "./style.css";
import { useEffect, useState } from "react";
import a from "../../Assets/image/a.jpg";
import b from "../../Assets/image/b.png";
export const SlideShow = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const images = [
    {
      src: a,
      alt: "Image 1 description",
      heading: "Heading  xjnm,c zl .,1",
      text: "Description lczmd.,dlczmlllllllllllllllllllllllllllllllllllllllllll1",
    },
    {
      src: b,
      alt: "Image 2 description",
      heading: "Heading 2",
      text: "Description 2",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prevSlide) => (prevSlide + 1) % 2);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="App">
      <div className="image-container active">
        {images[activeSlide] && ( // Render only the active image
          <div key={activeSlide} className="slide-active">
            <img src={images[activeSlide].src} alt={images[activeSlide].alt} />
            <div className="text-overlay">
              <h2>{images[activeSlide].heading}</h2>
              <p>{images[activeSlide].text}</p>
            </div>
          </div>
        )}
      </div>
    </div>
    // <div>
    //   <img />
    // </div>
  );
};
