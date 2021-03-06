import React from "react";
import CourseRowComponent from "./CourseRowComponent";
import {findAllCourses, updateCourse, deleteCourse, createCourse} from "../services/CourseService";
import CourseCardContainer from "./CourseCardContainer";
import {Link} from "react-router-dom";

class CourseGridComponent extends React.Component {

    state = {
        courses: [],
        courseBeingEdited: {}
    }

    componentDidMount() {
        findAllCourses()
            .then(courses => {
                this.setState({
                                  courses: courses
                              })
            })
    }

    deleteCourse = (course) => {
        deleteCourse(course._id)
            .then(status => this.setState(prevState =>({
                                              courses: prevState.courses.filter(c => c._id !== course._id)
                                          })
            ))
            .catch(error => {

            })
    }

    addCourse = () => {
        const newCourse = {
            title: "New Course Title Here",
            owner: "me",
            modified: (new Date()).toDateString()
        }

        createCourse(newCourse)
            .then(actualCourse => this.setState(prevState => ({
                courses: [
                    ...prevState.courses, actualCourse
                ]
            })))
    }

    editCourse = (course) => {
        this.setState({
                          courseBeingEdited: course
                      })
    };

    render() {
        return (
            <div >
                <div className="row">
                    <div className= "col-11">
                        <h1>Course Grid For <i>{this.props.instructor}</i></h1>
                    </div>
                    <div className="float-right mt-3 col-1">
                        <button className="btn btn-light">
                            <Link to="/table"><i className="fas fa-th-list"></i></Link></button>
                    </div>

                </div>
                <div className="row">
                    {
                        this.state.courses.map(course =>
                                                   <CourseCardContainer
                                                       key={course._id}
                                                       deleteCourse={this.deleteCourse}
                                                       course={course}/>
                            )
                    }
                    <div className="card text-muted bg-light mb-3 col-lg-2 col-md-4 col-sm-12 m-3" >
                        <div className="text-center">
                            <i style={{color: 'black'}} className="fas fa-8x fa-file-alt m-2 text-black-50"></i>
                        </div>
                        <button
                            onClick={this.addCourse}
                            className="btn ">
                            <i style={{color: 'black'}} className="fas fa-4x fa-plus-circle m-2 text-black-50"></i>
                        </button>
                    </div>




                </div>

            </div>


        );
    }
}

export default CourseGridComponent