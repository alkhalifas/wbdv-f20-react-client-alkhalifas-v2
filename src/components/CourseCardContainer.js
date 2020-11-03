import React from "react";
import {updateCourse} from "../services/CourseService";
import {Link} from "react-router-dom";
import "./CourseCardContainer.css"

//Change to class to maintain state
class CourseCardContainer extends React.Component {

    state = {
        editing: false,
        course: this.props.course
    }

    render() {
        return(
                <div className="card text-white bg-light mb-3 col-lg-2 col-md-4 col-sm-12 m-3" >
                    <div className="text-center">
                        <i style={{color: 'black'}} className="fas fa-8x fa-file-alt m-2"></i>
                    </div>
                    <div className="card-header">
                        {
                            this.state.editing &&
                            <input
                                className="form-control"
                                onChange={(event) => {
                                    const newTitle = event.target.value
                                    this.setState(prevState => ({
                                        course: {...prevState.course, title: newTitle}
                                    }))}
                                }
                                value={this.state.course.title}/>
                        }
                        {
                            !this.state.editing &&
                            <Link to={`/edit/${this.props.course._id}`}>
                                {`${this.props.course.title.substring(0,30)}...`} </Link>
                        }
                    </div>

                    <div className="card-body">
                        <div className="text-black-50">
                            {this.props.course.modified}
                        </div>
                        <div className="row">
                            <button
                                onClick={() => this.props.deleteCourse(this.props.course)}
                                className="btn btn-light">
                                <svg className="bi bi-trash-fill wbdv-row wbdv-button wbdv-delete"
                                     fill="currentColor" height="1em" viewBox="0 0 16 16" width="1em"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"
                                        fill-rule="evenodd"></path>
                                </svg>
                            </button>
                            <td>
                                {
                                    !this.state.editing &&
                                    <button
                                        onClick={() => this.setState({editing: true})}
                                        className="btn btn-light"><i className="far fa-edit"></i></button>
                                }
                                {
                                    this.state.editing &&
                                    <button
                                        onClick={() => {
                                            updateCourse(this.state.course._id, this.state.course)
                                                .then(status => this.setState({editing: false}))
                                        }}
                                        className="btn btn-dark"><i className="far fa-save"></i></button>
                                }
                            </td>
                        </div>


                    </div>
                </div>

        )
    }
}

export default CourseCardContainer
