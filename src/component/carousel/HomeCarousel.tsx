import React from "react";
import { Carousel } from "antd";
import { contentStyle } from "./carousel";
import pic1 from "../../assets/images/store_cover1.png";
import pic2 from "../../assets/images/store_cover2.png";
import pic3 from "../../assets/images/store_cover3.png";
import pic4 from "../../assets/images/store_cover4.jpg";
export interface HomeCarouselProps {}

const HomeCarousel: React.FC<HomeCarouselProps> = () => {
  return (
    <div>
      <Carousel autoplay>
        <div>
          <img src={pic1} style={contentStyle}></img>
        </div>
        <div>
          <img src={pic2} style={contentStyle}></img>
        </div>
        <div>
          <img src={pic3} style={contentStyle}></img>
        </div>
        <div>
          <img src={pic4} style={contentStyle}></img>
        </div>
      </Carousel>
    </div>
  );
};

export default HomeCarousel;
