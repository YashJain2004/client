import React from "react";
import { Link, useNavigate} from "react-router-dom";
import ReactStars from 'react-rating-stars-component'

const ProductCard = ({ product , isAuthenticated }) => {
  const options = {
    value: product.ratings,
    readOnly: true,
    precision: 0.5,
  };
  console.log(isAuthenticated);
  const navigate = useNavigate();
  const handleBuyNowClick = () => {
  
    if (!isAuthenticated) {
      navigate("/login");
    }
  }

  return (
    <Link className="productCard" to={"#"}>
      <img src={product.images[0].url} alt={product.name} />
      <p>{product.name}</p>
      <div>
        <ReactStars {...options} />{" "}
        <span className="productCardSpan">
          {" "}
          ({product.numOfReviews} Reviews)
        </span>
      </div>
      <span>{`₹${product.price}`}</span>
      <button onClick ={handleBuyNowClick} style={{fontStyle:"oblique", border:"1px solid black"}}> Buy Now</button>
    </Link>
  );
};
export default ProductCard;