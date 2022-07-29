import React from 'react';
import { Carousel, Row, Col } from 'react-bootstrap';
import  './Banner.css';
const Banner = () => {
    return (
        <div>
            <Carousel style={{ backgroundColor: "rgb(8, 25, 82)",height:"600px" }} className="py-5 banner-style">
                <Carousel.Item interval={1000}>
                    <Row xs={1} md={2}>
                        <Col className="d-flex justify-content-center align-items-center ">
                            <div className="text-white">
                                <h3>Power and Beauty</h3>
                                <p>Free Library’s $1M auto archives are moving to Philly’s <br /> world-famous car museum and to a Hershey attraction.</p>
                             
                            </div>
                        </Col>
                        <Col>
                            <img
                                className="d-block w-100"
                                src='https://demo2wpopal.b-cdn.net/technocy/wp-content/uploads/2021/07/rev_home06.png'
                                alt="First slide"
                            />
                           
                        </Col>
                       
                    </Row>

                </Carousel.Item>
                <Carousel.Item interval={500}>
                <Row  xs={1} md={2}>
                        <Col className="d-flex justify-content-center align-items-center">
                            <div className="text-white">
                            <h3>Power and Beauty</h3>
                                <p>Free Library’s $1M auto archives are moving to Philly’s <br /> world-famous car museum and to a Hershey attraction.</p>
                            </div>
                        </Col>
                        <Col>
                            <img
                                className="d-block banner-2"
                                src="https://demo2wpopal.b-cdn.net/technocy/wp-content/uploads/2021/07/rev_home4.png"
                                alt="First slide"
                            />
                        </Col>

                    </Row>
                </Carousel.Item>
                {/* <Carousel.Item>
                <Row  xs={1} md={2}>
                        <Col className="d-flex justify-content-center align-items-center">
                            <div className="text-white">
                            <h3>Power and Beauty</h3>
                                <p>Free Library’s $1M auto archives are moving to Philly’s <br /> world-famous car museum and to a Hershey attraction.</p>
                            </div>
                        </Col>
                        <Col>
                            <img
                                className="d-block w-100"
                                src='https://i.pinimg.com/originals/22/0d/bf/220dbf930ed85073cb94f621baaa6c7b.jpg'
                                alt="First slide"
                            />
                        </Col>

                    </Row>
                </Carousel.Item> */}
            </Carousel>
            {/* <div>
                <div >
                    <div className="card-group container service-style">

                        <div className="card p-5 buy">

                            <i className="fas fa-car-alt icon "></i>
                           
                            <div className="card-body">
                                <h3 className="card-title">Buy and Sale Vehiclese</h3>
                                <p className="card-text">We buy and sale barand new car and also used car of any brand</p>
                            </div>


                            
                        </div>
                        <div className="card rental p-5 ">
                            <i className="fas fa-bus-alt icon"></i>
                            <div className="card-body">
                                <h3 className="card-title">Vehicles Rental Service</h3>
                                <p className="card-text">We buy and sale barand new car and also used car of any brand</p>
                               
                            </div>
                          
                        </div>
                        <div className="card service p-5">
                            <i className="fas fa-truck icon"></i>
                            <div className="card-body">
                                <h3 className="card-title">Vehicles Servicing</h3>
                                <p className="card-text">We buy and sale barand new car and also used car of any brand</p>
                             
                            </div>

                        </div>
                    </div>

                </div>
            </div> */}
        </div>
    );
};

export default Banner;