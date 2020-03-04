import React from 'react'

function RegisterPage() {
    return(
        <section className="login_part ">
            <div className="container">
                <div className="row align-items-center center">
                    <div className="col-lg-12 col-md-12">
                        <div className="login_part_form">
                            <div className="login_part_form_iner">
                                <h3>Want to create an account ?<br />
                                    Fill the form bellow</h3>
                                <form className="row contact_form" action="#" method="post" noValidate="novalidate">
                                    <div className="col-md-12  p_star">
                                        <div className="col-md-6 form-group p_star">
                                            <input type="text" className="form-control" id="name" name="firstname" placeholder="First Name" />
                                        </div>
                                        <div className="col-md-6 form-group p_star">
                                            <input type="text" className="form-control" id="othername" name="othername" placeholder="Other Name" />
                                        </div>
                                    </div>
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
                                            <input type="email" className="form-control" id="email" name="email" placeholder="Email" />
                                        </div>
                                        <div className="col-md-6 form-group p_star">
                                            <input type="phone" className="form-control" id="phone" name="phone" placeholder="Phone" />
                                        </div>
                                    </div>

                                    <div className="col-md-12 p_star">
                                        <div className="col-md-12 form-group p_star">
                                            <input type="text" className="form-control" id="username" name="username" placeholder="Username" />
                                        </div>


                                        <div className="col-md-12 form-group p_star">
                                            <input type="password" className="form-control" id="password" name="password" placeholder="Password" />
                                        </div>

                                        <div className="col-md-12 form-group p_star">
                                            <input type="password" className="form-control" id="confirmpwd" name="password_2" placeholder="Confirm Password" />
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

export default RegisterPage