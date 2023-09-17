import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobileAlt,
  faGlobe,
  faDesktop,
  faChartBar,
} from "@fortawesome/free-solid-svg-icons";

const AboutContainer = styled.div`
  text-align: center;
  background-color: #007bff;
  color: #fff;
  padding: 3rem 0;
`;

const AboutHeader = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const AboutText = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  max-width: 800px;
  margin: 0 auto;
`;

const AboutFeatures = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
`;

const AboutFeature = styled.div`
  text-align: center;
  padding: 2rem;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  margin: 1rem;
  width: 300px;

  h3 {
    font-size: 1.5rem;
    color: #007bff;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    color: #333;
  }
`;

const AboutPage = () => {
  return (
    <AboutContainer>
      <div className="container">
        <AboutHeader>About TMT-SOLUTIONS</AboutHeader>
        <AboutText>
          We are TMT-SOLUTIONS, a leading software company dedicated to
          providing innovative digital solutions to businesses of all sizes. Our
          mission is to empower your success in the digital age. Here's what we
          offer:
        </AboutText>
        <AboutFeatures>
          <AboutFeature>
            <FontAwesomeIcon icon={faMobileAlt} size="2x" />
            <h3>Mobile App Development</h3>
            <p>
              Transform your ideas into powerful and user-friendly mobile
              applications for iOS and Android.
            </p>
          </AboutFeature>
          <AboutFeature>
            <FontAwesomeIcon icon={faGlobe} size="2x" />
            <h3>Web Development</h3>
            <p>
              Craft cutting-edge websites and web applications that elevate your
              online presence and user engagement.
            </p>
          </AboutFeature>
          <AboutFeature>
            <FontAwesomeIcon icon={faDesktop} size="2x" />
            <h3>Desktop Software Automation</h3>
            <p>
              Leverage the latest technologies to build custom desktop solutions
              tailored to your business needs.
            </p>
          </AboutFeature>
          <AboutFeature>
            <FontAwesomeIcon icon={faChartBar} size="2x" />
            <h3>Digital Marketing</h3>
            <p>
              Enhance your online visibility and effectively reach your target
              audience with our proven digital marketing strategies.
            </p>
          </AboutFeature>
        </AboutFeatures>
      </div>
    </AboutContainer>
  );
};

export default AboutPage;
