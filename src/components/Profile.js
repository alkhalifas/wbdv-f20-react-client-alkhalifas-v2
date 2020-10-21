import React from "react";

const Profile = () =>
    <div>

        <div className="container">
            <link href="profile.style.client.css" rel="stylesheet"/>
                <h1>Profile</h1>
                <form>

                    <div className="alert alert-success wbdv-message" role="alert">
                        Profile was successfully saved!
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label wbdv-field wbdv-username"
                               htmlFor="usernameFld">
                            Username </label>
                        <div className="col-sm-10">
                            <input className="form-control" id="usernameFld"
                                   placeholder="Sarah Conner" readOnly=""/>
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
                        <label className="col-sm-2 col-form-label wbdv-field wbdv-phone"
                               htmlFor="phoneFld">
                            Phone </label>
                        <div className="col-sm-10">
                            <input className="form-control" id="phoneFld"
                                   placeholder="617-111-2222"/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label wbdv-field wbdv-email"
                               htmlFor="emailFld">
                            Email </label>
                        <div className="col-sm-10">
                            <input className="form-control" id="emailFld"
                                   placeholder="someone@email.com"/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label wbdv-field wbdv-role"
                               htmlFor="roleFld">
                            Role </label>
                        <div className="col-sm-10">
                            <select className="form-control" id="roleFld">
                                <option value="Faculty">Faculty</option>
                                <option value="Student">Student</option>
                                <option value="Admin">Admin</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label wbdv-field wbdv-dob"
                               htmlFor="dobFld">
                            Date of Birth </label>
                        <div className="col-sm-10">
                            <input className="form-control" id="dobFld" type="date"
                                   value="2020-01-01"/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label"></label>
                        <div className="col-sm-10">
                            <button className="btn btn-primary btn-block wbdv-button wbdv-update"
                                    id="updateBtn">
                                Update
                            </button>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label"></label>
                        <div className="col-sm-10">
                            <a className="btn btn-danger btn-block wbdv-button wbdv-logout"
                               href="../index.html" id="logoutBtn">
                                Logout
                            </a>
                        </div>
                    </div>

                </form>
        </div>

    </div>

export default Profile