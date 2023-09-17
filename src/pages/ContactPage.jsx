import React from "react";
import styled from "styled-components";

const ContactContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
  background-color: #eeeeee;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

const ContactHeader = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #007bff;
`;

const ContactText = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
`;

const LocationMap = styled.iframe`
  width: 100%;
  height: 500px;
  border: none;
  border-radius: 5px;
`;

const AddressContainer = styled.div`
  margin: 2rem 0;
`;

const AddressHeader = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #007bff;
`;

const AddressText = styled.p`
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

const EmailText = styled.p`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const PhoneText = styled.p`
  font-size: 1.2rem;
`;

const ContactPage = () => {
  return (
    <ContactContainer>
      <div className="container">
        <div className="row">
          <div className="col">
            <ContactHeader>Contact Us</ContactHeader>
            <ContactText>We'd love to hear from you!</ContactText>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <LocationMap
              title="Location Map"
              loading="lazy"
              allowFullScreen
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12795.419567639427!2d35.840445768220036!3d34.38638734921568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1521f7bf6b7d6b23%3A0xa65ea15c43d6a415!2zUG91bGUgZOKAmW9yIERhaHIgRWwtQcOvbg!5e0!3m2!1sen!2slb!4v1694967267866!5m2!1sen!2slb"
            />
          </div>
          <div className="col-lg-6">
            <AddressContainer>
              <AddressHeader>Our Office Address:</AddressHeader>
              <AddressText>Koura, Lebanon</AddressText>
            </AddressContainer>
            <EmailText>Email: tkalalian@gmail.com</EmailText>
            <PhoneText>Phone: +961 70 539 108</PhoneText>
          </div>
        </div>
      </div>
    </ContactContainer>
  );
};

export default ContactPage;
