import React from "react"
import CourseTableComponent from "../components/CourseTableComponent";
import CourseGridComponent from "../components/CourseGridComponent";
import CourseEditorComponent from "../components/CourseEditor/CourseEditorComponent";
import {findAllCourses, deleteCourse, createCourse} from "../services/CourseService" //destructor// syntax
import './CourseManagerContainer.css'
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import CourseListComponent from "../components/CourseListComponent";
import Login from "../components/login";


class CourseManagerContainer extends React.Component {
    //Utilizing class instead of function because we need to maintain state

    state = {
        layout: 'table',
        showEditor: false,
        newCourseTitle: '',
        courses: []
    };

    // componentDidMount() {
    //     findAllCourses()
    //         .then(courses => this.setState({
    //             courses: courses
    //                                        }))
    // }

    // Alternative method using asynchronous methodology
    // easier to read, more natural
    componentDidMount = async () => {
        const courses = await findAllCourses()
        this.setState({
                          courses: courses
                      })
    };

    toggle = () =>
        this.setState(prevState => {
            if (prevState.layout === 'table') {
                return ({
                    layout: 'grid'
                })
            } else {
                return ({
                    layout: 'table'
                })
            }
        });

    deleteCourse = (course) =>

        deleteCourse(course._id)
            .then(status => {
                this.setState(prevState => {
                    return ({
                        courses: prevState
                            .courses
                            .filter(function (crs) {
                                return crs._id !== course._id
                            })
                    })
                })
            });

    addCourse = () =>
        createCourse({
                         title: this.state.newCourseTitle
                     }).then(actualCourse => this.setState(prevState => {
                                 return ({
                                     courses: [
                                         ...prevState.courses,
                                         actualCourse
                                     ] //spread operator that combines old array with new one

                                 })
                             })
        );

    showEditor = () =>
        this.setState({
                          showEditor: true
                      });

    hideEditor = () =>
        this.setState({
                          showEditor: false
                      });

    updateForm = (e) =>
        this.setState({
                          newCourseTitle: e.target.value
                      });

    render() {
        return (
            <div className="container">

                <Router>

                    <Route
                        path="/"
                        exact={true}
                        render={() =>
                            <div>
                                <h1>Home</h1>
                                <Link to="/home">Home</Link>
                                <Link to="/login">Login</Link>
                                <Link to="/register">Register</Link>
                                <Link to="/courses">Courses</Link>
                            </div>

                        }
                    />

                    <Route
                        path="/login"
                        exact component={Login}/>


                    <Route
                        path="/courses"
                        exact={true}
                        render={() =>
                            <CourseListComponent
                                toggle={this.toggle}
                                updateForm={this.updateForm}
                                newCourseTitle={this.state.newCourseTitle}
                                addCourse={this.addCourse}
                                layout={this.state.layout}
                                showEditor={this.showEditor}
                                deleteCourse={this.deleteCourse}
                                courses={this.state.courses}
                            />
                        }/>

                    <Route
                        path="/course-editor/:courseId"
                        exact={true}
                        render={(props) =>
                            <CourseEditorComponent
                                courseId={props.match.params.courseId}
                                {...props}/>
                        }/>


                </Router>

            </div>
        )
    }
}

export default CourseManagerContainer