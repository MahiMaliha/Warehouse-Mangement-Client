import React from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import './Article.css'
const Article = () => {
  return (
    <div className='article'>
    <Container>
  <Row>
    <Col sm={12} md={6} lg={6}>
      <h2 className='mt-3 mx-3 mb-2'>Article</h2>
      <ul>
          <li>ওরাল সার্জারি</li>
          <li>মুখের টিউমার অপারেশন</li>
          <li>আঁকা-বাঁকা দাঁতের চিকিৎসা – অধ্যাপক ডাঃ নাসির উদ্দিন।</li>
          <li>ডেন্টাল চিকিৎসা – অধ্যাপক ডাঃ নাসির উদ্দিন</li>
          <li>ঠোঁট কাটা ও তালু কাটার অপারেশন- অধ্যাপক ডাঃ নাসির উদ্দিন</li>
      </ul>
</Col>
    <Col sm={12} md={6} lg={6}>
      <img src='https://drnasiruddin.com/wp-content/uploads/2022/03/9-739x415.jpeg' className='img-fluid mt-2'></img>
    </Col>
  </Row>
 
</Container>
    </div>
  );
};

export default Article;
