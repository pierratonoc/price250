import React from 'react'

function LoginPage(){
    return(
        <section className="login_part ">
            <div className="container">
                <div className="row align-items-center center">
                    <div className="col-lg-12 col-md-12">
                        <div className="login_part_form">
                            <div className="login_part_form_iner">
                                <h3>Welcome Back ! <br />
                                    Please Sign in now</h3>
                                <form className="row contact_form" action="#" method="post" noValidate="novalidate">
                                    <div className="col-md-12 form-group p_star">
                                        <input type="text" className="form-control" name="name"  placeholder="Username" />
                                    </div>
                                    <div className="col-md-12 form-group p_star">
                                        <input type="password" className="form-control" name="password" placeholder="Password" />
                                    </div>
                                    <div className="col-md-12 form-group">
                                    
                                        <button type="submit" value="submit" className="btn_3">
                                            log in
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

export default LoginPage