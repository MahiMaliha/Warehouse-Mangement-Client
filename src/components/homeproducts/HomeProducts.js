import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import IndividualProduct from '../individualproduct/IndividualProduct';


import './HomeProducts.css';

const HomeProducts = () => {
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
<Link to='/inventories d-flex mx-auto'>
<Button className='btn-regular'>Manage Inventory</Button>
</Link>
           
  </div>
    )}     


export default HomeProducts;