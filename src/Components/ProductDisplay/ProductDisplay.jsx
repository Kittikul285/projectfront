import React, { useContext, useState } from 'react';
import './ProductDisplay.css';
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from '../../Context/ShopContext';

function ProductDisplay(props) {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  const [selectedSize, setSelectedSize] = useState(null);

  const handleSizeClick = (size) => {
    setSelectedSize(size);
    
    if (selectedSize === size) {
      // If the same size is clicked again, deselect it
      setSelectedSize(null);
    } else {
      setSelectedSize(size);
      console.log("Selected size:", size);
    }
  };

  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
        <div className="productdisplay-img">
          <img className='productdisplay-main-img' src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
          <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="porductdisplay-right-prices">
          <div className="productdisplay-right-price-old">${product.old_price}</div>
          <div className="productdisplay-right-price-new">${product.new_price}</div>
        </div>
        <div className="productdisplay-right-description">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores dolorum ut amet fugit sit consectetur corporis rerum aspernatur perferendis possimus optio eaque vero itaque sunt suscipit quas saepe, inventore eum?
        </div>
        <div className="prooductdisplay-right-size">
          <h1>เลือกขนาด</h1>
          <div className="productdisplay-right-size">
            <div onClick={() => handleSizeClick("S")} className={`size-option ${selectedSize === "S" ? "selected" : ""}`}>S</div>
            <div onClick={() => handleSizeClick("M")} className={`size-option ${selectedSize === "M" ? "selected" : ""}`}>M</div>
            <div onClick={() => handleSizeClick("L")} className={`size-option ${selectedSize === "L" ? "selected" : ""}`}>L</div>
            <div onClick={() => handleSizeClick("XL")} className={`size-option ${selectedSize === "XL" ? "selected" : ""}`}>XL</div>
            <div onClick={() => handleSizeClick("2XL")} className={`size-option ${selectedSize === "2XL" ? "selected" : ""}`}>2XL</div>
          </div>
        </div>
        
        <button onClick={() => { addToCart(product.id, selectedSize) }}>Add To Cart</button>
        <p className="productdisplay-right-category"><span>Category :</span> ผู้หญิง, T-Shirt, Crop Top</p>
        <p className="productdisplay-right-category"><span>Tags :</span>Modern, Letest</p>
      </div>
    </div>
  );
}

export default ProductDisplay;

