import React from "react";
import {BrowserRouter, Route, Link} from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Profile from "./Profile";
import CourseListComponent from "./CourseListComponent";
import CourseEditorComponent from "./CourseEditor/CourseEditorComponent";
import CourseGrid from "./CourseGrid";
import CourseGridComponent from "./CourseGridComponent";

export class CourseManagerComponent extends React.Component {
    state = {
        courses: [],
        layout: "table"
    }
    render() {
        return (
            <BrowserRouter>
                <div className="container">
                    <nav
                        className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark wbdv-field wbdv-hamburger">
                        <a className="navbar-brand" href="#"><h3>Whiteboard</h3></a>
                        <button aria-controls="navbarText" aria-expanded="false"
                                aria-label="Toggle navigation" className="navbar-toggler"
                                data-target="#navbarText" data-toggle="collapse" type="button">

                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarText">
                            <ul className="navbar-nav mr-auto">
                                <Link to="/" className="mr-2 text-white">Home </Link>
                                <Link to="/login" className="mr-2 text-white">Login </Link>
                                <Link to="/register" className="mr-2 text-white">Register </Link>
                                <Link to="/profile" className="mr-2 text-white">Profile </Link>
                                <Link to="/table" className="mr-2 text-white">Course Manager</Link>
                            </ul>
                        </div>
                    </nav>
                    <div>
                        <h1> </h1>
                        <h1>" "</h1>

                    </div>
                    {/*<Link to="/login">Login</Link> |*/}
                    {/*<Link to="/register">Register</Link> |*/}
                    {/*<Link to="/profile">Profile</Link> |*/}
                    {/*<Link to="/table">Courses</Link> |*/}
                    {/*<Link to="/grid">Grid</Link> |*/}
                    {/*<Link to="/edit">Editor</Link>*/}
                    <Route path="/" exact component={Login}/>
                    <Route path="/login" exact component={Login}/>
                    <Route path="/register" exact component={Register}/>
                    <Route path="/profile" exact component={Profile}/>
                    <Route path="/table" exact>
                        <CourseListComponent courses={this.state.courses} instructor="Saleh Alkhalifa"/>
                    </Route>
                    <Route path="/grid" exact>
                        <CourseGridComponent courses={this.state.courses} instructor="Saleh Alkhalifa"/>
                    </Route>

                    <Route
                        path={["/edit/:courseId",
                               "/edit/:courseId/modules/:moduleId",
                               "/edit/:courseId/modules/:moduleId/lessons/:lessonId"]}
                        exact
                        component={CourseEditorComponent}/>
                </div>
            </BrowserRouter>
        );
    }
}