import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import { Marginer } from "../../components/marginer";
import { OurSerivce } from "../../components/ourService";
import { SectionTitle } from "../../components/sectionTitle";

import Service1Img from "../../assets/pictures/canopy.jpeg";
import Service2Img from "../../assets/pictures/vaninterior.png";
import Service3Img from "../../assets/pictures/machine.jpeg";

const ServicesContainer = styled(Element)`
  width: 100%;
  min-height: 1100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
  img {
    border-radius: 6%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
`;

export function ServicesSection(props) {
  return (
    <ServicesContainer name="servicesSection">
      <SectionTitle>Best Vehicle Conversions</SectionTitle>
      <Marginer direction="vertical" margin="3em" />
      <OurSerivce
        title="Fully integrated services"
        description="We convert any vehicle, from Food Trucks, Tow-trucks, to Bakkie conversions"
        imgUrl={Service1Img}
      />
      <OurSerivce
        title="Quality is our priority"
        description="We fit racking solutions to a wide range of vans and commercial
        vehicles including LCVs, MCVs and pick-up trucks. No matter which business sector
         you operate within, or what you drive, we have a van racking system to suit your business,
          whether for a single van or a fleet of vehicles"
        imgUrl={Service2Img}
        isReversed
      />
      <OurSerivce
        title="Specialised and Utility Vehicle"
        description="Individually crafted utility vehicles including: mobile office; mobile workshop; 
        tool vans; mobile showroom and mobile service and maintenance"
        imgUrl={Service3Img}
      />
    </ServicesContainer>
  );
}
