import React, { useState } from "react";
import { json } from "react-router-dom";

const ProductDisplay = ({ item }) => {
  const { name, id, price, seller, ratingCount, quantity, img, address } = item;
  const [prequantity, setQuantity] = useState(quantity);
  const [coupon, setCoupon] = useState("");
  const [size, setSize] = useState("Select Size");
  const [color, setColor] = useState("Select Color");
  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };
  const handleColorChange = (e) => {
    setColor(e.target.value);
  };
  const handleDecreases = () => {
    if (prequantity > 1) {
      setQuantity(prequantity - 1);
    }
  };
  const handleIncrease = () => {
    setQuantity(prequantity + 1);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const product = {
      id: id,
      img: img,
      name: name,
      price: price,
      quantity: prequantity,
      size: size,
      color: color,
      coupon: coupon,
      address: address
    };
    // console.log(product)
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingProductIndex = existingCart.findIndex(
      (item) => item.id === id
    );
    if (existingProductIndex !== -1) {
      existingCart[existingProductIndex].quantity == prequantity;
    } else {
      existingCart.push(product);
    }
    localStorage.setItem("cart", JSON.stringify(existingCart));

    setQuantity(1);
    setSize("Select Size");
    setColor("Select Color");
    setCoupon("");
  };
  return (
    <div>
      <div>
        <h4>{name}</h4>
        <p className="rating">
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <span>{ratingCount} review</span>
        </p>
        <h4>${price}/Piece</h4>
        <h6>{seller}</h6>
        <h6>{address}</h6>
        <ul>
          <li>Size:24cm</li>
          <li>Material:copper</li>
          <li>Contact no:6355051444</li>
        </ul>
      </div>
      <form onSubmit={handleSubmit}>
        <button type="submit" className="lab-btn bg-primary">
          <span>Contact</span>
        </button>
      </form>

      
    </div>
  );
};

export default ProductDisplay;
