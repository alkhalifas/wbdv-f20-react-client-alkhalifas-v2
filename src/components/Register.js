import React from "react";

const Register = () =>
    <div>
        <div className="container">

            <h1>Register</h1>
            <form>

                <div className="form-group row">
                    <label className="col-sm-2 col-form-label" htmlFor="usernameFld">
                        Username </label>
                    <div className="col-sm-10">
                        <input className="form-control wbdv-field wbdv-username" id="usernameFld"
                               placeholder="Sarah Connor"/>
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-sm-2 col-form-label" htmlFor="passwordFld">
                        Password</label>
                    <div className="col-sm-10">
                        <input className="form-control wbdv-field wbdv-password" id="passwordFld"
                               placeholder="Terminator123" type="password"/>
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-sm-2 col-form-label" htmlFor="verifyPasswordFld">
                        Verify Password</label>
                    <div className="col-sm-10">
                        <input className="form-control wbdv-field wbdv-password-verify"
                               id="verifyPasswordFld" placeholder="Terminator123" type="password"/>
                    </div>
                </div>


                <div className="form-group row">
                    <label className="col-sm-2 col-form-label"></label>
                    <div className="col-sm-10">
                        <a className="btn btn-primary btn-block wbdv-button wbdv-register"
                           href="../profile/profile.template.client.html" id="registerBtn">Register
                        </a>


                        <div className="row">
                            <div className="col-6 wbdv-link wbdv-forgot-password">
                                <a href="../index.html">Cancel</a>
                            </div>
                            <div className="col-6 wbdv-link wbdv-register">
                                <a className="float-right"
                                   href="../login/login.template.client.html">Login</a>
                            </div>
                        </div>


                    </div>
                </div>


            </form>
        </div>

    </div>

export default Register