import React from "react";
import styled from "styled-components";

const ServiceContainer = styled.div`
  padding: 50px 0;
  background-color: #f8f9fa;
`;

const ServiceTitle = styled.h1`
  text-align: center;
  margin-bottom: 50px;
`;

const ServiceCard = styled.div`
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
  }
`;

const ServiceImage = styled.img`
  max-width: 100%;
  height: auto;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

const ServiceCardContent = styled.div`
  padding: 20px;
`;

const ServiceTitleCard = styled.h5`
  font-size: 1.25rem;
  margin-bottom: 20px;
`;

const ServiceDescription = styled.p`
  font-size: 1rem;
  color: #555;
`;

const ServicesPage = () => {
  return (
    <ServiceContainer>
      <ServiceTitle>Our Services</ServiceTitle>
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4">
            <ServiceCard>
              <ServiceImage
                src="https://mediaandmore.co.uk/wp-content/uploads/2020/06/web-development-banner.jpg"
                alt="Desktop Development"
              />
              <ServiceCardContent>
                <ServiceTitleCard>Desktop Development</ServiceTitleCard>
                <ServiceDescription>
                  Our desktop development services include creating powerful and
                  feature-rich software applications for Windows and macOS
                  platforms. We use the latest technologies to build custom
                  desktop solutions tailored to your specific business needs.
                </ServiceDescription>
              </ServiceCardContent>
            </ServiceCard>
          </div>

          <div className="col-md-4 mb-4">
            <ServiceCard>
              <ServiceImage
                src="https://saigontechnology.com/assets/media/Blog/typical-process-for-a-successful-mobile-development.jpeg"
                alt="Mobile App Development"
              />
              <ServiceCardContent>
                <ServiceTitleCard>Mobile App Development</ServiceTitleCard>
                <ServiceDescription>
                  Our app development services focus on creating engaging and
                  user-friendly mobile applications for iOS and Android. We
                  leverage the latest mobile technologies to turn your app ideas
                  into reality.
                </ServiceDescription>
              </ServiceCardContent>
            </ServiceCard>
          </div>

          <div className="col-md-4 mb-4">
            <ServiceCard>
              <ServiceImage
                src="https://www.shiksha.com/online-courses/articles/wp-content/uploads/sites/11/2021/12/Programming-vs-Web-Development.jpg"
                alt="Web Development"
              />
              <ServiceCardContent>
                <ServiceTitleCard>Web Development</ServiceTitleCard>
                <ServiceDescription>
                  Our web development services encompass designing and building
                  cutting-edge websites and web applications. We create
                  responsive and interactive web solutions that enhance your
                  online presence and user engagement.
                </ServiceDescription>
              </ServiceCardContent>
            </ServiceCard>
          </div>

          <div className="col-md-4 mb-4">
            <ServiceCard>
              <ServiceImage
                src="https://img.etimg.com/thumb/width-1200,height-900,imgsize-1081374,resizemode-75,msid-102779650/jobs/mid-career/how-to-make-a-career-in-digital-marketing.jpg"
                alt="Digital Marketing"
              />
              <ServiceCardContent>
                <ServiceTitleCard>Digital Marketing</ServiceTitleCard>
                <ServiceDescription>
                  Our digital marketing services help businesses increase their
                  online visibility and reach their target audience effectively.
                  We offer strategies in SEO, social media, and more.
                </ServiceDescription>
              </ServiceCardContent>
            </ServiceCard>
          </div>

          <div className="col-md-4 mb-4">
            <ServiceCard>
              <ServiceImage
                src="https://www.cpapracticeadvisor.com/wp-content/uploads/sites/2/2023/03/artificial-intelligence.jpg"
                alt="Machine Learning"
              />
              <ServiceCardContent>
                <ServiceTitleCard>Machine Learning</ServiceTitleCard>
                <ServiceDescription>
                  Our machine learning solutions leverage data and artificial
                  intelligence to drive business insights and automate
                  processes. We offer custom ML models tailored to your needs.
                </ServiceDescription>
              </ServiceCardContent>
            </ServiceCard>
          </div>

          <div className="col-md-4 mb-4">
            <ServiceCard>
              <ServiceImage
                src="https://img.freepik.com/free-vector/cloud-services-isometric-composition-with-big-cloud-computing-infrastructure-elements-connected-with-dashed-lines-vector-illustration_1284-30495.jpg?w=2000"
                alt="Cloud Solutions"
              />
              <ServiceCardContent>
                <ServiceTitleCard>Cloud Solutions</ServiceTitleCard>
                <ServiceDescription>
                  Our cloud solutions provide scalable and secure cloud
                  infrastructure for your applications and data. We offer
                  migration, management, and optimization services.
                </ServiceDescription>
              </ServiceCardContent>
            </ServiceCard>
          </div>
        </div>
      </div>
    </ServiceContainer>
  );
};

export default ServicesPage;
