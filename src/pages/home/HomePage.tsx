import React from "react";
import HomeCarousel from "../../component/carousel/HomeCarousel";
export interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <div>
      <HomeCarousel />
    </div>
  );
};

export default HomePage;
