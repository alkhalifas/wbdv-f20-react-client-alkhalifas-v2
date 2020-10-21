import React from "react";

const Login = () =>
    <div>
        <div className="container">

            <h1>Sign In</h1>
            <form>

                <div className="form-group row">
                    <label className="col-sm-2 col-form-label" htmlFor="username">
                        Username </label>
                    <div className="col-sm-10">
                        <input className="form-control wbdv-field wbdv-username" id="username"
                               placeholder="Sarah Connor"/>
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-sm-2 col-form-label" htmlFor="password">
                        Password </label>
                    <div className="col-sm-10">
                        <input className="form-control wbdv-field wbdv-password" id="password"
                               placeholder="Terminator123" type="password"/>
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-sm-2 col-form-label"></label>
                    <div className="col-sm-10">
                        <a className="btn btn-primary btn-block wbdv-button wbdv-login"
                           href="../profile/profile.template.client.html">Sign in</a>
                        <div className="row">
                            <div className="col-6 wbdv-link wbdv-forgot-password">
                                <a href="#">Forgot Password?</a>
                            </div>
                            <div className="col-6 wbdv-link wbdv-register">
                                <a className="float-right"
                                   href="../register/register.template.client.html">Register</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-sm-2 col-form-label"></label>
                    <div className="col-sm-10">
                        <div className="row">
                            <div className="col-6">
                                <a href="../index.html">Cancel</a>
                            </div>

                        </div>
                    </div>
                </div>

            </form>
        </div>

    </div>

export default Login