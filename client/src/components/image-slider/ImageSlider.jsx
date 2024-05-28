import style from "./ImageSlider.module.css";
import { useState, useEffect } from "react";

import image1 from "../../assets/imgs/landing-image1.jpg";
import image2 from "../../assets/imgs/landing-image2.jpg";
import image3 from "../../assets/imgs/landing-image3.jpg";
import image4 from "../../assets/imgs/landing-image4.jpg";

const ImageSlider = () => {
  const IMAGES = [image1, image2, image3, image4];
  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImgIndex((prev) => (prev === 0 ? IMAGES.length - 1 : prev - 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={style.slider}>
      {IMAGES.map((url, index) => (
        <div
          key={index}
          className={`style.img_slider ${index === imgIndex ? "active" : ""}`}
          style={{ backgroundImage: `url(${url})` }}
        />
      ))}
      <img src={IMAGES[0]} />
    </div>
  );
};
export default ImageSlider;
