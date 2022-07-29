import React from 'react';
import { useNavigate } from 'react-router';

const IndividualService = (props) => {
    const {id,name,desc,img,price} = props.service;
    const navigate = useNavigate();

    const navigateToServiceDetail = id =>{
        navigate(`/service/${id}`);
    }
    return (
        <div>
           <div class="col">
    <div class="card service-card h-100 w-100  p-2">
      <img src={img} class="card-img-top img-fluid  mx-auto image-service" alt="..."></img>
      <div class="card-body">
        <h5 class="card-title text-center ">{name}</h5>
         <p className='text-center'>{desc}</p>
        <h4 class="card-text fw-bold text-center"><i class="fa-solid fa-dollar-sign"></i> <b>{price}</b></h4>
      <button onClick={() => navigateToServiceDetail(id)} className='btn btn-primary text-white mx-4 mt-2 px-5 pe-5'>Details<i class="fa-solid fa-arrow-right"></i></button>
      </div>
      
  </div>
</div>
        </div>
    );
};

export default IndividualService;