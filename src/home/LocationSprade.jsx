import React from 'react'
import { Link } from 'react-router-dom'
const title = "Trusted by over 30,000 happy customers";

const desc = "Your favorite products, just a tap away. Download & start shopping now!";

const clientsList = [
{
imgUrl: '/src/assets/images/clients/avater.jpg',
imgAlt: 'education thumb rajibraj91 rajibraj',
text: 'Shoppers from USA',
},
{
imgUrl: '/src/assets/images/clients/avater.jpg',
imgAlt: 'education thumb rajibraj91 rajibraj',
text: 'Shoppers from Europe',
},
{
imgUrl: '/src/assets/images/clients/avater.jpg',
imgAlt: 'education thumb rajibraj91 rajibraj',
text: 'Shoppers from China',
},
{
imgUrl: '/src/assets/images/clients/avater.jpg',
imgAlt: 'education thumb rajibraj91 rajibraj',
text: 'Shoppers from Brazil',
},
{
imgUrl: '/src/assets/images/clients/avater.jpg',
imgAlt: 'education thumb rajibraj91 rajibraj',
text: 'Shoppers from Africa',
},
{
imgUrl: '/src/assets/images/clients/avater.jpg',
imgAlt: 'education thumb rajibraj91 rajibraj',
text: 'Shoppers from Australia',
},
{
imgUrl: '/src/assets/images/clients/avater.jpg',
imgAlt: 'education thumb rajibraj91 rajibraj',
text: 'Shoppers from Russia',
},
]
const LocationSprade = () => {
  return (
    <div className='clients-section style-2 padding-tb'>
      <div className='container'>
        <div className='section-header text-center'>
            <h2 className='title'>{title}</h2>
            <p>{desc}</p>
        </div>
        {/* main content */}
        <div className='section-wrapper'>
            <div className='clients'>
                {
                    clientsList.map((val,i)=>(
                        <div key={i} className='client-list'>
                           <Link to='/sign-up' className='client-content'>
                            <span>{val.text}</span>
                            </Link>
                            <div className='client-thumb'>
                                <img src={val.imgUrl} alt={val.imgAlt} />
                            </div>
                        </div> 
                    ))
                }
            </div>
        </div>
      </div>
    </div>
  )
}

export default LocationSprade
