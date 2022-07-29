import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import './Footer.css'
const Footer = () => {
    return (
        <div className='footer'>
    
<div className='footer-2nd'>
<Container>
  <Row>
    <Col sm={12} md={12} lg={3}>
        <h5 className='text-center mb-3'>About Us</h5>
        <p className='text-center'>Dr.Nasir Uddin is a famous dentist. He gives service mainly in Root caling theraphy, False teeth, dental crown</p>
    </Col>
    <Col sm={12} md={12} lg={3}>
        <h5 className='mb-3'>Patient Support</h5>
        <a href=''>Help & call</a>
        <br></br>
        <a href=''>Privacy Policy</a>
        <br></br>
        <a href=''>Cancellation appointment</a>
        <br></br>
        <a href=''>Appointment Schedule</a>
        <br></br>
        <a href=''>Get a Call</a>
        <br></br>
        <a href=''>Online Enquiry</a>
        <br></br>
        <a href=''>My Account</a>
    </Col>
    <Col sm={12} md={12} lg={3}>
<h5 className='mb-3'>Recent News</h5>
<b>Distraction Osteogenesis for Mandibular Elongation in Bangladesh, Presention</b>
<p>By Dr Nasir Uddin</p>
    </Col>
    <Col sm={12} md={12} lg={3}>
        <p>Enter your email and we’ll send you latest information plans.</p>
        <input type='text'></input>
        <button className='btn-footer'>Subscribe</button>
    </Col>
  </Row>
 
</Container>
</div>

        </div>
    );
};

export default Footer;