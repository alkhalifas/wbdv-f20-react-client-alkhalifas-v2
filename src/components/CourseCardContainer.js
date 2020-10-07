import React from "react";
import {updateCourse} from "../services/CourseService";
import {Link} from "react-router-dom";
import "./CourseCard.css"

//Change to class to maintain state
class CourseCardContainer extends React.Component {

    state = {
        editing: false,
        course: this.props.course
    }

    render() {
        return(
            <div className="card text-white bg-light mb-3 col-lg-2 col-md-4 col-sm-12 m-3">
                <div className="text-center">
                    <i style={{color: 'black'}} className="fas fa-8x fa-file-alt m-2"></i>
                </div>

                <div className="card-header">
                    {
                        ! this.state.editing &&
                        <Link to={`/course-editor/${this.state.course._id}`}>
                            {`${this.state.course.title.substring(0, 30)} ...`}
                        </Link>
                    }
                    {
                        this.state.editing &&
                        <textarea
                            className="form-control"
                            cols="15" rows="5"
                            onChange={(e) => this.setState({
                                                               course: {
                                                                   ...this.state.course,
                                                                   title: e.target.value
                                                               }
                                                           })}
                            value={this.state.course.title}
                        />
                    }
                </div>

                <div className="card-body">
                    <div className="row">
                        <button className="btn btn-light" onClick={() => this.props.deleteCourse(this.props.course)}>
                            <svg className="bi bi-trash-fill wbdv-row wbdv-button wbdv-delete"
                                 fill="currentColor" height="1em" viewBox="0 0 16 16" width="1em"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"
                                    fill-rule="evenodd"></path>
                            </svg>
                        </button>

                        <button className="btn btn-light mr-1" onClick={() => {
                            this.setState({
                                              editing : true
                                          })
                        }}>
                            <i className="far fa-edit"></i>
                        </button>

                        <button className="btn btn-light" onClick={() => {
                            updateCourse(this.state.course._id, this.state.course).then(status => {})
                            this.setState({
                                              editing : false
                                          })
                        }}>
                            <i className="far fa-save"></i>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default CourseCardContainer
