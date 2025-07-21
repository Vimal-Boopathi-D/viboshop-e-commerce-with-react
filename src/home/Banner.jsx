import React from 'react'
import { useState } from 'react';
import productData from '../products.json'
import { Link } from 'react-router-dom';
const title=(
    <h2>All Your <span>Favorite</span> Products In One Search</h2>
)
const desc="India’s Biggest Product Collection at One Place"
const bannerList = [
{
iconName: "icofont-users-alt-4",
text: "1.5 Million Customers",
},
{
iconName: "icofont-notification",
text: "More then 2000 Marchent",
},
{
iconName: "icofont-globe",
text: "Buy Anything Online",
},
];
const Banner = () => {
  const[searchInput, setSearchInput] = useState("");
  const[filteredProducts, setFilteredProducts] = useState("productData");
  //console.log(productData);
  //search functionality
  const handleSearch = (e) => {
    console.log(e.target.value)
    const searchTerm=e.target.value
    setSearchInput(searchTerm);
    //filter products based on search term
    const filtered = productData.filter((product) => {
      return product.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setFilteredProducts(filtered);
  }
  return (
    <div className='banner-section style-4'>
        <div className='container'>
            <div className='banner-content'>
                 {title}
                 <form action="">
                  <input type="text" id="search" placeholder='Search for products' value={searchInput}  onChange={handleSearch}/>
                  <button type='submit'>
                    <i className="icofont-ui-search"></i>
                  </button>
                 </form>
                 <p>{desc}</p>
                 <ul className='lab-ul'>
                  {
                    searchInput&& filteredProducts.map((product,i) => <li key={i}>
                      <Link to={`/shop/${product.id}`}>{product.name}</Link>
                    </li>)
                  }
                 </ul>
            </div>
        </div>
    </div>
  )
}

export default Banner
