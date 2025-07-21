import React from 'react'
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
  return (
    <div className='banner-section style-4'>
        <div className='container'>
            <div className='banner-content'>
                 {title}
            </div>
        </div>
    </div>
  )
}

export default Banner
