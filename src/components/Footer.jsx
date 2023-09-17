import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  background-color: #f8f9fa;
  padding: 2rem 0;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Column = styled.div`
  flex: 1;
  min-width: 200px;
  h5 {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
  ul {
    list-style: none;
    padding: 0;
    li {
      margin-bottom: 0.5rem;
      a {
        color: #333;
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;

const SubscribeForm = styled.form`
  flex: 2;
  min-width: 300px;
  h5 {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
  p {
    color: #555;
  }
  .btn-primary {
    background-color: #007bff;
    &:hover {
      background-color: #0056b3;
    }
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <div className="container">
        <Container>
          <Column>
            <h5>OUR SOLUTIONS</h5>
            <ul>
              <li>
                <a href="/">Business solutions</a>
              </li>
              <li>
                <a href="/">Technology</a>
              </li>
              <li>
                <a href="/">Continuous evolution</a>
              </li>
            </ul>
          </Column>
          <Column>
            <h5>OUR CLIENTS</h5>
            <ul>
              <li>
                <a href="/">Banks</a>
              </li>
              <li>
                <a href="/">Energy and commodities trading</a>
              </li>
              <li>
                <a href="/">Clearing houses (CCPs)</a>
              </li>
              <li>
                <a href="/">Investment managers</a>
              </li>
              <li>
                <a href="/">Public agencies</a>
              </li>
            </ul>
          </Column>
          <Column>
            <h5>WHO WE ARE</h5>
            <ul>
              <li>
                <a href="/">About us</a>
              </li>
              <li>
                <a href="/">News</a>
              </li>
              <li>
                <a href="/">Awards</a>
              </li>
              <li>
                <a href="/">Events</a>
              </li>
              <li>
                <a href="/">Locations</a>
              </li>
            </ul>
          </Column>
          <SubscribeForm>
            <h5>Subscribe to our newsletter</h5>
            <p>Monthly digest of what's new and exciting from us.</p>
            <div className="d-flex flex-column flex-sm-row w-100 gap-2">
              <label htmlFor="newsletter1" className="visually-hidden">
                Email address
              </label>
              <input
                id="newsletter1"
                type="text"
                className="form-control"
                placeholder="Email address"
              />
              <button className="btn btn-primary" type="button">
                Subscribe
              </button>
            </div>
          </SubscribeForm>
        </Container>
      </div>
    </StyledFooter>
  );
};

export default Footer;
