import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const ManageItems = () => {
    const [product, setproduct] = useState([])
    const [user] = useAuthState(auth);
    useEffect(() => {
        fetch('http://localhost:5000/booking')
            .then(res => res.json())
            .then(data => setproduct(data));
    }, [])
    return (
      <div className='pt-5 pb-5'>
      <h1 className="fw-bold mt-2 text-center mb-5">Orders Placed : {product.length}</h1>
        <div className="service-container  pt-4 pb-4">
          <div className="container">
         
      {product.map((pd, index) => (
        <div class="container">
        <div class="row">
          <div class="col-12 col-sm-12 col-md-3 col-lg-3">
           
         <table>
           <tr>
           <th className='pb-2 order-heading'>Ordered By:</th>
           </tr>
           <tr>
          <td className='pb-4 text-dark'>{pd.name}</td>
           </tr>
         </table>
          </div>
          <div class="col-12 col-sm-12 col-md-3 col-lg-3">
          <table>
           <tr>
           <th className='pb-2 order-heading'>Car Name:</th>
           </tr>
           <tr>
          <td className='pb-4'>{pd.productName}</td>
           </tr>
         </table>
          </div>
          <div class="col-12 col-sm-12 col-md-3 col-lg-3">
          <table>
           <tr>
           <th className='pb-2 order-heading'>Delivery Address:</th>
           </tr>
           <tr>
          <td className='pb-4'>{pd.address}</td>
           </tr>
         </table>
          </div>
          <div class="col-12 col-sm-12 col-md-3 col-lg-3">
          
          <table>
           <tr>
           <th className='pb-2 order-heading'>Contact Info:</th>
           </tr>
           <tr>
          <td className='pb-4'>{pd.contact}</td>
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

export default ManageItems;