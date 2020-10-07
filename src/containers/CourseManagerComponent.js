import React from "react"
import CourseTableComponent from "../components/CourseTableComponent";
import CourseGridComponent from "../components/CourseGridComponent";
import CourseEditorComponent from "../components/CourseEditor/CourseEditorComponent";
import {findAllCourses, deleteCourse, createCourse} from "../services/CourseService" //destructor// syntax
import './CourseManagerComponent.css'

class CourseManagerComponent extends React.Component {
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
    }

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

    // Delete Courses using Local cached Array, not Server
    // deleteCourse = (course) =>
    //     this.setState(prevState => {
    //         return ({
    //             courses: prevState
    //                 .courses
    //                 .filter(function (crs) {
    //                     return crs._id !== course._id
    //                 })
    //         })
    //     });

    // Delete Courses using Server Data, as well as local cached array
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
            })

    // Adds a course only locally to the cached array
    // addCourse = () =>
    //     this.setState(prevState => {
    //         return ({
    //             courses: [
    //                 ...prevState.courses,
    //                 {
    //                 _id: (new Date()).getTime(),
    //                 title: prevState.newCourseTitle
    //                 }
    //             ] //spread operator that combines old array with new one
    //
    //         })
    //     });

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
        )

    showEditor = () =>
        this.setState({
                          showEditor: true
                      })

    hideEditor = () =>
        this.setState({
                          showEditor: false
                      })

    updateForm = (e) =>
        this.setState({
                          newCourseTitle: e.target.value
                      })

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <h1>Course Manager</h1>
                    </div>

                    <div className="col-6 align-middle mt-2">
                        <input
                               className="search-query form-control"
                               placeholder="Enter New Course Here"
                               onChange={(e) =>
                                   this.updateForm({
                                                       newCourseTitle: e.target.value
                                                   })} //raw event handler
                               value={this.state.newCourseTitle}/>
                    </div>
                    <div>
                        <button className="btn pull-right float-right" onClick={this.addCourse}>
                            <i aria-hidden="true"
                               className="fa fa-plus-circle fa-2x d-block float-right pull-right"></i>
                        </button>
                    </div>
                </div>
                <div className="col-12">
                    <button
                        className="btn btn-light pull-right justify-content-end" onClick={this.toggle}> Toggle
                    </button>
                </div>
                <div className="container">
                    {
                        this.state.showEditor &&
                        <CourseEditorComponent hideEditor={this.hideEditor}/>
                    }

                    {
                        !this.state.showEditor &&
                        <div>

                            {
                                this.state.layout === 'table' &&
                                <CourseTableComponent
                                    showEditor={this.showEditor}
                                    deleteCourse={this.deleteCourse}
                                    courses={this.state.courses}/>}
                            {
                                this.state.layout === 'grid' &&
                                <CourseGridComponent
                                    showEditor={this.showEditor}
                                    deleteCourse={this.deleteCourse}
                                    courses={this.state.courses}/>
                            }
                        </div>
                    }
                </div>

            </div>
        )
    }
}

export default CourseManagerComponent