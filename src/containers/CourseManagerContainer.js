import React from "react";
import {BrowserRouter, Route, Link} from "react-router-dom";
import LoginComponent from "../components/users/LoginComponent";
import RegisterComponent from "../components/users/RegisterComponent";
import ProfileComponent from "../components/users/ProfileComponent";
import CourseListComponent from "../components/CourseListComponent";
import CourseEditorComponent from "../components/CourseEditor/CourseEditorComponent";
import CourseGridComponent from "../components/CourseGridComponent";
import HomeComponent from "../components/users/HomeComponent";

export class CourseManagerContainer extends React.Component {
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
                    {/*<Link to="/login">LoginComponent</Link> |*/}
                    {/*<Link to="/register">RegisterComponent</Link> |*/}
                    {/*<Link to="/profile">ProfileComponent</Link> |*/}
                    {/*<Link to="/table">Courses</Link> |*/}
                    {/*<Link to="/grid">Grid</Link> |*/}
                    {/*<Link to="/edit">Editor</Link>*/}
                    <Route path="/" exact component={HomeComponent}/>
                    <Route path="/login" exact component={LoginComponent}/>
                    <Route path="/register" exact component={RegisterComponent}/>
                    <Route path="/profile" exact component={ProfileComponent}/>
                    <Route path="/table" exact>
                        <CourseListComponent courses={this.state.courses} instructor="Saleh Alkhalifa"/>
                    </Route>
                    <Route path="/grid" exact>
                        <CourseGridComponent courses={this.state.courses} instructor="Saleh Alkhalifa"/>
                    </Route>

                    <Route
                        path={["/edit/:courseId",
                               "/edit/:courseId/modules/:moduleId",
                               "/edit/:courseId/modules/:moduleId/lessons/:lessonId",
                               "/edit/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId",
                        ]}
                        exact
                        component={CourseEditorComponent}/>



                    {/*<Route*/}
                    {/*    exact={true}*/}
                    {/*    path="/edit/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId"*/}
                    {/*    render={(props) => (*/}
                    {/*        <CourseEditorComponent*/}
                    {/*            courseID={props.match.params.courseID}*/}
                    {/*            moduleID={props.match.params.moduleID}*/}
                    {/*            lessonID={props.match.params.lessonID}*/}
                    {/*            topicId={props.match.params.topicId}*/}
                    {/*        />*/}
                    {/*    )}*/}
                    {/*/>*/}






                </div>
            </BrowserRouter>
        );
    }
}