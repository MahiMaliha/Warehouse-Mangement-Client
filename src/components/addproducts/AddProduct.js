import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './AddProduct.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AddProduct = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit, reset } = useForm();



    
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/booking',data)
        .then(res=>{
           if(res.data.insertedId){
               alert('Added Successfully');
               reset();
           }
        })
    };
    return (
        <div className='add-course container'>
            <h1 className='text-center fw-bold  mt-5 text-dark'>Please Add a Product !!!</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("email",)} placeholder="Email" defaultValue={user.email} readOnly />
      <input {...register("displayname",)} placeholder="Email" defaultValue={user.displayName} readOnly />
      <input {...register("name",)} placeholder="Product Name" />
      <input {...register("description",)} placeholder="Product Description"/>
      <input {...register("sold",)} placeholder="Product sold"/>
      <input type="number" {...register("price", )} placeholder="Product Price"/>
      
      <input type="number" {...register("quantity", )} placeholder="Product Quantity"/>
      <input {...register("supplier",)} placeholder="Supplier Name"/>
      <input {...register("img",)} placeholder="Product Image"/>
      <input type="submit" />
    </form> 
        </div>
    );
};

export default AddProduct;