import React, { useContext }  from 'react'
import ProductCard from '../product/productCard'
import { CgMouse } from 'react-icons/cg'
import { Context } from '../index.js'

const products =[
 {
  name: "Paper Bag",
  images:[{url:"https://cdn.pixabay.com/photo/2018/11/24/22/34/bag-3836460_640.jpg"}],
  price:"₹200",
  id:"Aryaman",
},
{
  name: "Smartcraft Bamboo Coffee Cup",
  images:[{url:"https://m.media-amazon.com/images/I/31xtKpIk1BL.jpg"}],
  price:"₹149",
  id:"Aryaman",
},
{
  name: "Bamboo Brush",
  images:[{url:"https://images.pexels.com/photos/7262938/pexels-photo-7262938.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}],
  price:"₹200",
  id:"Aryaman",
},
{
  name: "Paper straws",
  images:[{url:"https://images.pexels.com/photos/3018819/pexels-photo-3018819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}],
  price:"₹200",
  id:"Aryaman",
},
{
  name: "Wooden Comb",
  images:[{url:"https://images.unsplash.com/photo-1590159763121-7c9fd312190d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdvZGRlbiUyMGNvbWJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"}],
  price:"₹200",
  id:"Aryaman",
},
{
  name: "GUNEE Ecofriendly Handicraft Cane Bar Stool Mudda Chair",
  images:[{url:"https://m.media-amazon.com/images/I/916XUiUB65L._SX522_.jpg"}],
  price:"₹200",
  id:"Aryaman",
},
{
  name: "Hero Lectro Clix 26T SS Single Speed Electric Cycle",
  images:[{url:"https://m.media-amazon.com/images/I/814S6OTdWTL._SX679_.jpg"}],
  price:"₹200",
  id:"Aryaman",
},
{
  name: "PRAKRUTIK Garbage Bags Biodegradable",
  images:[{url:"https://m.media-amazon.com/images/I/81GKnoixdNL._SX522_.jpg"}],
  price:"₹200",
  id:"Aryaman",
}
]

const Shopping = () => {
  const{isAuthenticated} = useContext(Context);
  
 
  return (
    <>
    
          <metadata title="ECOMMERCE" />

          <div className="banner">
            <p>Welcome to Ecohub Ecommerce</p>
            <h1>FIND AMAZING PRODUCTS BELOW</h1>

            <a href="#container">
              <button>
                Scroll <CgMouse />
              </button>
            </a>
          </div>

          <h2 className="homeHeading">Featured Products</h2>

          <div className="container" id="container">
            {products &&
              products.map((product) => (
                <ProductCard isAuthenticated={isAuthenticated} key={product._id} product={product} />
              ))}
          </div>
        
        
    
    
     



<section className="footer">

<div className="box-container">

   <div className="box">
       {/* <a href="#" className="logo"><i className="fas fa-seedling"></i>Ecohub</a> */}
       <p style={{fontFamily:"cursive" }}>This is our Ecohub Ecommerce for a safe and environmental friendly shopping.
        Make sure to buys some things from here and start using it in your day to day life by replacing other harmful products.
       </p>
   </div>

   <div className="box">
       <h3 className="share">Follow us</h3>
       <a href="#">facebook</a>
       <a href="#">twitter</a>
       <a href="#">instagram</a>
  
   </div>

   

</div>

<h1 className="credit">created by <span>Team BitNova</span> | all rights reserved. &copy; </h1>

</section>

</>
  )
}

export default Shopping
