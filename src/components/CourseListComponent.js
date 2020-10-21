import React from "react";
import CourseRowComponent from "./CourseRowComponent";
import {findAllCourses, updateCourse, deleteCourse, createCourse} from "../services/CourseService";
import {Link} from "react-router-dom";

class CourseListComponent extends React.Component {

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
                        <h1>Course List For <i>{this.props.instructor}</i></h1>
                    </div>
                    <div className="float-right mt-3 col-1">
                        <button className="btn btn-light">
                            <Link to="/grid"><i className="fas fa-th"></i></Link></button>
                    </div>

                </div>


                <table className="table table-hover container">
                    <thead>
                    <tr>
                        <th>Course Name</th>
                        <th>Owner</th>
                        <th>Last Edited</th>
                        <th> </th>
                        <th> </th>
                        <th> </th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.courses.map(course =>
                                                   <CourseRowComponent
                                                       key={course._id}
                                                       deleteCourse={this.deleteCourse}
                                                       course={course}/>
                        )
                    }
                    </tbody>
                </table>
                <button
                    onClick={this.addCourse}
                    className="btn btn-success">
                    Add Course
                </button>
            </div>


        );
    }
}

export default CourseListComponent