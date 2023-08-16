import React, { useEffect, useRef } from "react";
import "./IconsCarousel.css";

function IconsCarousel({ imageSources }) {
  const sliderRef = useRef(null);

  useEffect(() => {
    const speed = 2;
    let animationFrameId;

    const moveSlider = () => {
      if (!sliderRef.current) return;

      const currentTranslateX = sliderRef.current.style.transform
        ? parseFloat(sliderRef.current.style.transform.replace(/[^-?\d.]/g, ""))
        : 0;
      const newTranslateX = currentTranslateX - speed;

      const slideWidth =
        sliderRef.current.children[0].offsetWidth * imageSources.length;
      if (-newTranslateX >= slideWidth) {
        sliderRef.current.style.transition = "none";
        sliderRef.current.style.transform = `translateX(0px)`;
        requestAnimationFrame(moveSlider);
        return;
      }

      sliderRef.current.style.transition = "transform 0s linear";
      sliderRef.current.style.transform = `translateX(${newTranslateX}px)`;
      animationFrameId = requestAnimationFrame(moveSlider);
    };

    animationFrameId = requestAnimationFrame(moveSlider);
    return () => cancelAnimationFrame(animationFrameId);
  }, [imageSources]);

  return (
    <div className="icon-carousel">
      <div className="carousel-slider" ref={sliderRef}>
        {[...imageSources, ...imageSources].map((src, index) => (
          <div key={index} className="carousel-slide">
            <img src={src} alt={`Carousel Slide ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default IconsCarousel;
