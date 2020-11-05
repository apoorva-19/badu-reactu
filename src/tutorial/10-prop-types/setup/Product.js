import React from "react";
import PropTypes from "prop-types";
import defaultImage from "../../../assets/default-image.jpeg";

const Product = ({ image, name, price }) => {
  return (
    <article className="product">
      {/* <h4>single product</h4> */}
      <h4>{name}</h4>
      <img src={image.url} alt={name} />
      <p>${price}</p>
    </article>
  );
};

Product.prototype = {
  image: PropTypes.object.isRequired,
  price: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

Product.defaultProps = {
  name: "default name",
  price: 3.99,
  image: { url: defaultImage },
};

export default Product;
