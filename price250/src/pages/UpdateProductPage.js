import React from 'react'

function UpdateProductPage() {
    return(
        <section className="login_part ">
            <div className="container">
                <div className="row align-items-center center">
                    <div className="col-lg-12 col-md-12">
                        <div className="login_part_form">
                            <div className="login_part_form_iner">
                                <h3>Update Product</h3>
                                <form className="row contact_form" action="#" method="post" noValidate="novalidate">
                                    <div className="col-md-12  p_star">
                                        <div className="col-md-6 form-group p_star">
                                            <input type="select" className="form-control" id="country" name="country" placeholder="Country" />
                                        </div>
                                        <div className="col-md-6 form-group p_star">
                                            <input type="select" className="form-control" id="city" name="city" placeholder="City" />
                                        </div>
                                    </div>

                                    <div className="col-md-12  p_star">
                                        <div className="col-md-6 form-group p_star">
                                            <input type="date" className="form-control" id="date" name="date" placeholder="Date and Time" />
                                        </div>
                                        <div className="col-md-6 form-group p_star">
                                            <input type="time" className="form-control" id="time" name="time" placeholder="Time" />
                                        </div>
                                    </div>

                                    <div className="col-md-12  p_star">
                                        <div className="col-md-6 form-group p_star">
                                            <input type="text" className="form-control" id="currency" name="currency" placeholder="Currency" />
                                        </div>
                                        <div className="col-md-6 form-group p_star">
                                            <input type="text" className="form-control" id="price" name="price" placeholder="Price" />
                                        </div>
                                    </div>

                                


                                    <div className="col-md-12 form-group">

                                        <button type="submit" value="submit" className="btn_3">
                                            register
                </button>

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

export default UpdateProductPage