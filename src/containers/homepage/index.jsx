import React from "react";
import styled from "styled-components";
import { Footer } from "../../components/footer";
import { Marginer } from "../../components/marginer";
import { MoreAboutSection } from "./moreAboutSection";
import { ReviewsSection } from "./reviewsSection";
import { ServicesSection } from "./servicesSection";
import { TopSection } from "./topSection";
import { ImageSlider }  from "../../components/imageSlider"
import { SliderData } from '../../components/imageSlider/SliderData.js';

const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const GalleryText = styled.h3`
  font-size: 34px;
  font-weight: 500;
  line-height: 1.4;
  margin: 0;
  text-align: center;
`;
const GalleryDescription = styled.p`
  color: #7a7a7a;
  font-size: 21px;
  text-align: center;
  max-width: 100%;
  margin-block: auto;
`;
export function Homepage(props) {
  return (
    <PageContainer>
      <TopSection />
      {/* <ServicesSection /> */}
      {/* <GalleryText>GET INSPIRED</GalleryText> */}
      {/* <GalleryDescription>We’ve converted hundreds of dream vehicles for our clients. 
        Explore these fully custom Peak vehicles and start dreaming.</GalleryDescription>
      <ImageSlider slides={SliderData} />  */}
      {/* <ReviewsSection /> */}
      {/* <MoreAboutSection /> */}
      {/* <Marginer direction="vertical" margin="8em" /> */}
      <Footer />
    </PageContainer>
  );
}
