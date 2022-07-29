import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import IndividualProduct from '../individualproduct/IndividualProduct';


import './Product.css';

const Product = () => {
    const [product, setproduct] = useState([])
    useEffect(()=>{
fetch('http://localhost:5000/booking')
.then(res => res.json())
.then(data => setproduct(data))
    },[])


    return (
        <div className='mt-5 mb-5'>
             <h1 className='text-center fw-bold mb-5'>OUR Inventories Collections</h1>
            <div className="service-container">
                <div className="container">
            <div class="row row-cols-1 row-cols-lg-3 g-4">
                {
                    product.map(product => <IndividualProduct
                        key={product._id}
                        product={product}
                    ></IndividualProduct>
                    
                    )
                    
                }
                </div>
                </div>
            </div>
           
  </div>
    )}     


export default Product;