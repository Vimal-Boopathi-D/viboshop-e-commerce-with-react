import React from 'react'
import { Link } from 'react-router-dom';
import img01 from '../assets/images/category/01.jpg';
import img02 from '../assets/images/category/02.jpg';
import img03 from '../assets/images/category/03.jpg';
import img04 from '../assets/images/category/04.jpg';
import img05 from '../assets/images/category/05.jpg';
import img06 from '../assets/images/category/06.jpg';
const subTitle = "Choose Any Products";
const title = "Buy Everything with Us";
const btnText = "Get Started Now";

const categoryList = [
{
imgUrl: img01,
imgAlt: 'category rajibraj91 rajibraj',
iconName: 'icofont-brand-windows',
title: 'DSLR Camera',
},
{
imgUrl: img02,
imgAlt: 'category rajibraj91 rajibraj',
iconName: 'icofont-brand-windows',
title: 'Shoes',
},
{
imgUrl: img03,
imgAlt: 'category rajibraj91 rajibraj',
iconName: 'icofont-brand-windows',
title: 'Photography',
},
{
imgUrl: img04,
imgAlt: 'category rajibraj91 rajibraj',
iconName: 'icofont-brand-windows',
title: 'Formal Dress',
},
{
imgUrl: img05,
imgAlt: 'category rajibraj91 rajibraj',
iconName: 'icofont-brand-windows',
title: 'Colorful Bags',
},
{
imgUrl: img06,
imgAlt: 'category rajibraj91 rajibraj',
iconName: 'icofont-brand-windows',
title: 'Home Decor',
},
]
const HomeCategory = () => {
  return (
    <div className='category-section style-4 padding-tb'>
        <div className='container'>
             {/* Section header */}
            <div className='section-header text-center'>
                <span className='subtitle'>{subTitle}</span>
                <h2 className='title'>{title}</h2>
            </div>
            {/* Section card */}
            <div className='section-wrapper'>
                <div className='row g-4 justify-content-center row-cols-md-3 row-cols-sm-2 row-cols-1'>
                    {
                        categoryList.map((val, i) => ( 
                            <div key={i}>
                                <Link to="/shop" className='category-item'>
                                <div className='category-inner'>
                                    {/*image thunbnail */}
                                    <div className='category-thumb'>
                                        <img src={val.imgUrl} alt={val.imgAlt} />
                                    </div>
                                    {/* content */}
                                    <div className='category-content'>
                                        <div className='cate-icon'>
                                            <i className={val.iconName}></i>
                                        </div>
                                        <Link to="/shop"><h6>{val.title}</h6></Link>
                                    </div>
                                </div>
                                </Link>
                            </div>                           
                        ))
                    }
                </div>
                <div className='text-center mt-5'>
                    <Link to='/shop' className='lab-btn'><span>{btnText}</span></Link>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default HomeCategory