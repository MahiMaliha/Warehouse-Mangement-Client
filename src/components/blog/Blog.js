import React from 'react';
import { Accordion, Carousel, Col, Container, Row } from 'react-bootstrap';
import './Blog.css'
const Blog = () => {
  return (
    <div className='banner'>
    <Container>
  <Row>
    <Col sm={12} md={6} lg={6}>
    <Accordion className='mt-5'>
  <Accordion.Item eventKey="0" className='mb-4'>
    <Accordion.Header>Q.1: Difference between javascript and nodejs
</Accordion.Header>
    <Accordion.Body>
     <h2>Javascript:</h2>
     <ul>
         <li>Javascript is used on the client side.</li>
         <li>It allows us to add HTML and work with the DOM.</li>
         <li>Javascript is mostly use in frontend.</li>
         <li>It is the progamming language by which we can write scripts in rhe webpage.</li>
     </ul>
     <br></br>
     <h2>Node Js:</h2>
     <ul>
         <li>Nodejs is a javscript runtime environment.</li>
         <li>.It is mosty used in server side.</li>
         <li>It is used in Backend.</li>
         <li>It cant add HTML tags.</li>
     </ul>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1" className='mb-4'>
    <Accordion.Header>Differences between sql and nosql databases.</Accordion.Header>
    <Accordion.Body>
    <h2>SQL:</h2>
     <ul>
         <li>Sql is relational database management system.</li>
         <li>It is not suitable for hierarchical data storage.</li>
         <li>It is Vertically scalable.</li>
     </ul>
     <br></br>
     <h2>NoSQL:</h2>
     <ul>
         <li>No-sql is distributed database system.</li>
         <li>It is very suitable for hierarchical data storage.</li>
         <li>It is horizontally scalable.</li>
         <li>It cant add HTML tags.</li>
     </ul>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header>What is the purpose of jwt and how does it works?</Accordion.Header>
    <Accordion.Body>
        <p>JWT is a json object which is used to share security information between client and server.
It is mainly used for authentication. After a user logging in to an application, the application will create a JWT and send it back to the user. The token tells the server what routes, services, and resources the user is allowed to access.</p>
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
</Col>
    <Col sm={12} md={6} lg={6}>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj4HVbCmXTraw04GF-BQHGwuH5pOFVytLShDCKyvX4ehp6dFm3DnJErbd9RUs7P5aOYs8&usqp=CAU' className='img-fluid w-100 mt-2'></img>
    </Col>
  </Row>
 
</Container>
    </div>
  );
};

export default Blog;
