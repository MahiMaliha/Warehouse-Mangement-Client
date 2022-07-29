import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './MyItem.css';
const MyItem = () => {
    const [product, setproduct] = useState([])
    const [user] = useAuthState(auth);
    useEffect(() => {


const getItems = async() =>{

  const email = user.email;
  const url = `http://localhost:5000/booking?email=${user.email}`;
  const {data} = await axios.get(url);
  setproduct(data);


}
getItems();

     
        // fetch(`http://localhost:5000/booking?email=${user.email}`)
        //     .then(res => res.json())
        //     .then(data => setproduct(data));
    }, [user])


    const handleDelete = id => {
      const proceed = window.confirm('Are you sure you want to delete?')
      if(proceed){
        console.log('deleting',id);
        const url = `http://localhost:5000/product/${id}`;
        fetch(url, {
          method: 'DELETE'
        })
        .then(res=>res.json())
        .then(data => {
          if(data.deletedCount > 0){
            console.log('deleted');
            const remaining = product.filter(products => products._id !== id);
            setproduct(remaining);
          }
        })
      }
      
    }


    return (
        <div className='bg-order text-dark pt-5 pb-5'>
            <h1 className="fw-bold mt-2 text-center mb-5">My items : {product.length}</h1>
        <div className="service-container  pt-4 pb-4">
          <div className="container">
         
      {product.map((pd, index) => (
        <div class="container">
        <div class="row">
          <div class="col-12 col-sm-12 col-md-4 col-lg-3">
           
         <table>
           <tr>
           <th className='pb-2 order-heading'>Item:</th>
           </tr>
           <tr>
          <td className='pb-4'>{pd.name}</td>
           </tr>
         </table>
          </div>
          <div class="col-12 col-sm-12 col-md-4 col-lg-3">
          <table>
           <tr>
           <th className='pb-2 order-heading'>Price:</th>
           </tr>
           <tr>
          <td className='pb-4'>{pd.price}</td>
           </tr>
         </table>
          </div>
          <div class="col-12 col-sm-12 col-md-4 col-lg-3">
          <table>
           <tr>
           <th className='pb-2 order-heading'>Stock</th>
           </tr>
           <tr>
          <td className='pb-4'>{pd.quantity}</td>
           </tr>
           
         </table>
          </div>
          <div class="col-12 col-sm-12 col-md-4 col-lg-3">
          <table>
           <tr>
           <th className='pb-2 order-heading'>Delete</th>
           </tr>
           <tr>
          <td className='pb-4'>
          <Button onClick={()=>handleDelete(pd._id)} className='btn btn-dark'><i class="fa-solid fa-delete-left"></i> Delete</Button>
          </td>
           </tr>
           
         </table>
          </div>
          
          
        </div>
      </div>


))}

</div>
</div>
</div>
    );
};

export default MyItem;
