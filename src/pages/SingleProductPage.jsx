import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const ProductCard = styled.div`
  background-color: #f9f9f9;
  border-radius: 0.25rem;
  padding: 2rem;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 600px;
  width: 100%;
`;

const ProductImage = styled.img`
  max-width: 100%;
  max-height: 400px;
  width: auto;
  height: auto;
  border-radius: 0.25rem;
  margin-bottom: 1rem;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
`;

const ProductTitle = styled.h1`
  font-size: 1.75rem;
  margin-bottom: 1rem;
  color: #333;
`;

const ProductDescription = styled.p`
  font-size: 1.1rem;
  margin-bottom: 1rem;
  color: #555;
`;

const ProductPrice = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #007bff;
`;

const ProductCategory = styled.p`
  font-size: 1.1rem;
  margin-bottom: 1rem;
  color: #555;
`;

const ProductRating = styled.div`
  font-size: 1.25rem;
  color: #333;
`;

const BackButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  color: #007bff;
  text-align: left;
  margin-bottom: 1rem;

  &:hover {
    text-decoration: underline;
  }
`;

const SingleProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
      });
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <ProductContainer>
      <BackButton onClick={() => window.history.back()}>
        <FontAwesomeIcon icon={faArrowLeft} /> Back to Products
      </BackButton>
      <ProductCard>
        <ProductImage
          src={product.image}
          alt={product.title}
          className="bd-placeholder-img card-img-top"
        />
        <ProductTitle>{product.title}</ProductTitle>
        <ProductDescription>{product.description}</ProductDescription>
        <ProductPrice>${product.price}</ProductPrice>
        <ProductCategory>Category: {product.category}</ProductCategory>
        <ProductRating>
          Rating: {product.rating.rate} ({product.rating.count} reviews)
        </ProductRating>
      </ProductCard>
    </ProductContainer>
  );
};

export default SingleProductPage;
