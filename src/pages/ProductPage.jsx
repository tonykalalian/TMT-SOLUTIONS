import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEdit } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ProductCard = styled.div`
  .card-body {
    padding: 1rem;
  }

  .title {
    max-width: 70ch;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .description {
    max-height: 3em;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

const ProductPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="album py-5 bg-body-tertiary">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
          {products.map((product) => (
            <div key={product.id} className="col">
              <ProductCard>
                <div className="card shadow-sm">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="bd-placeholder-img card-img-top"
                    width="100%"
                    height="225"
                  />
                  <div className="card-body">
                    <h5 className="card-title title">{product.title}</h5>
                    <p className="card-text description">
                      {product.description}
                    </p>
                    <p className="card-text">${product.price}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <Link
                          to={`/product/${product.id}`}
                          className="btn btn-sm btn-outline-secondary"
                        >
                          <FontAwesomeIcon icon={faEye} /> View
                        </Link>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          <FontAwesomeIcon icon={faEdit} /> Edit
                        </button>
                      </div>
                      <small className="text-body-secondary">
                        {product.rating.rate} ({product.rating.count} reviews)
                      </small>
                    </div>
                  </div>
                </div>
              </ProductCard>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
