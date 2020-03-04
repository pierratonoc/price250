import React from 'react'

function AddProduct() {
   return(
       <section className="login_part ">
           <div className="container">
               <div className="row align-center">
                   <div className="col-lg-12 col-md-12">
                       <div className="login_part_form">
                           <div className="login_part_form_iner align-center">
                               <h3>Add Product</h3>
                               <form className="row contact_form" action="#" method="post" noValidate="novalidate">
                                   <div className="col-md-12  p_star">
                                       <div className="col-md-6 form-group p_star">
                                           <input type="text" className="form-control" id="name" name="productname" placeholder="Product Name" />
                                       </div>
                                       <div className="col-md-6 form-group p_star">
                                           <select className="form-control" id="measurement" name="measurement" placeholder="Measurement">
                                               <option value="id">EAC</option>
                                               <option value="id">COMESA</option>
                                           </select>
                                       </div>
                                   </div>
                                  

                                   <div className="col-md-12 p_star">
                                       <div className="col-md-12 form-group p_star">

                                           <button type="submit" value="submit" className="btn_3">
                                               submit
                </button>

                                       </div>
                                   </div>


                                  
                               </form>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
       </section>
   )
}

export default AddProduct