import React from 'react';
import Article from '../article/Article';
import Banner from '../banner/Banner';
import HomeReviews from '../homereviews/HomeReviews';
import Product from '../products/Product';
import HomeProducts from '../homeproducts/HomeProducts';
import Brands from '../brands/Brands';
const Home = () => {
    
    return (
        <div>
           <Banner></Banner>
           <HomeProducts></HomeProducts>
        <Brands></Brands>
        
        </div>
    );
};

export default Home;