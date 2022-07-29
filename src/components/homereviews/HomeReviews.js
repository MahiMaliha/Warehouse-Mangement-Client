import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import IndividualReview from '../individualreview/IndividualReview';



import './HomeReviews.css';

const HomeReviews = () => {
    const [reviews] = useReviews();
    const navigate = useNavigate();
 // Handle Navigate Route:
 const handleRoute = () => {
    navigate('/reviews');
}
    return (
        <div className='mt-5 mb-5'>
            <h1 className="text-center mb-5 fw-bold menu-heading">What Other Says About Us</h1>
            <div className="service-container">
                <div className="container">
            <div class="row row-cols-1 row-cols-lg-3 g-4">
                {
                    reviews.slice(0,3).map(review => <IndividualReview
                        key={review._id}
                        review={review}
                    ></IndividualReview>)
                }
                </div>
                <Button onClick={handleRoute} className='bg-dark px-5 pe-5 mt-2'>Show All</Button>
                </div>
            </div>
  </div>
    )}     


export default HomeReviews;