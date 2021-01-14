import React from "react";
import { Carousel, CarouselItem } from "react-bootstrap";
import pic_1 from '../../assets/images/1448056_1920x1080.jpg'; 
import pic_2 from '../../assets/images/carousal_image1_1920x1080.jpg'; 
import pic_3 from '../../assets/images/qwqw.jpg'; 


export interface CaroselProps {}

const Carosel: React.FC<CaroselProps> = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
        width='2560px'
        
          className="d-block w-100 "
          src={pic_1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
         width='2560px'
         
          className="d-block w-100 "
          src={pic_2}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
         width='2560px'
         
          className="d-block w-100 "
          src={pic_3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Carosel;
