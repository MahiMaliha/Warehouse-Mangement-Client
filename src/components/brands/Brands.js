import React from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import './Brands.css'
const Brands = () => {
  return (
    <div className='banner'>
    <Container>
  <Row>
    <Col sm={12} md={6} lg={2}>
      <img src='https://demo2wpopal.b-cdn.net/technocy/wp-content/uploads/2021/09/brand_01.svg' className='img-fluid'></img>
   
</Col>
    <Col sm={12} md={2} lg={2}>
    <img src='https://demo2wpopal.b-cdn.net/technocy/wp-content/uploads/2021/09/brand_02.svg' className='img-fluid'></img>
    </Col>
    <Col sm={12} md={2} lg={2}>
    <img src='https://demo2wpopal.b-cdn.net/technocy/wp-content/uploads/2021/09/brand_03.svg' className='img-fluid'></img>
    </Col>
    <Col sm={12} md={2} lg={2}>
    <img src='https://demo2wpopal.b-cdn.net/technocy/wp-content/uploads/2021/09/brand_04.svg' className='img-fluid'></img>
    </Col>
    <Col sm={12} md={2} lg={2}>
    <img src='https://demo2wpopal.b-cdn.net/technocy/wp-content/uploads/2021/09/brand_05.svg' className='img-fluid'></img>
    </Col>
    <Col sm={12} md={2} lg={2}>
    <img src='https://demo2wpopal.b-cdn.net/technocy/wp-content/uploads/2021/09/brand_06.svg' className='img-fluid'></img>
    </Col>
  
  </Row>
 
</Container>
    </div>
  );
};

export default Brands;

