import React from "react";
import { Link } from "react-router-dom";
import ReactStars from 'react-rating-stars-component'

const ProductCard = ({ product }) => {
  const options = {
    value: 2,
    readOnly: true,
    precision: 0.5,
    
  };
  // const navigate = useNavigate();
  // const handleBuy= () => {
  
  //   if (!isAuthenticated) {
  //     navigate("/login");
  //   }
  // }

  return (
    <Link className="productCard" to={"/login"}>
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
      <button style={{fontStyle:"oblique", border:"1px solid black"}}> Buy Now</button>
    </Link>
  );
};
export default ProductCard;