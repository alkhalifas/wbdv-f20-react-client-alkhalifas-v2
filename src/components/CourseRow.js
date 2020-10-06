import React from "react";
import {updateCourse} from "../services/CourseService";


//Change to class to maintain state
class CourseRow extends React.Component {

    state = {
        editing: false,
        course: this.props.course
    }

    render() {
        return(
            <tr>
                <td>{
                    ! this.state.editing &&
                    <a onClick={this.props.showEditor} href="#">
                        {this.state.course.title}
                    </a>
                }
                    {
                        this.state.editing &&
                        <input
                            className="input-large search-query form-control"
                        onChange={(e) => this.setState({
                        course: {
                        ...this.state.course,
                        title: e.target.value
                        }
                        })}
                        value={this.state.course.title}
                        />
                    }
                </td>

{/*//------------------------------------------- Button delete -------------------------------------//*/}
                <td>
                <button className="btn btn-light" onClick={() => this.props.deleteCourse(this.props.course)}>
                        <svg className="bi bi-trash-fill wbdv-row wbdv-button wbdv-delete"
                             fill="currentColor" height="1em" viewBox="0 0 16 16" width="1em"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"
                                fill-rule="evenodd"></path>
                        </svg>
                    </button>
                </td>
{/*//------------------------------------------- Button Edit -------------------------------------//*/}
                <td>
                    <button className="btn btn-light" onClick={() => {
                        this.setState({
                                          editing : true
                                      })
                    }}><i className="far fa-edit"></i>
                    </button>
                </td>
{/*//------------------------------------------- Button Save -------------------------------------//*/}
                <td>
                    <button className="btn btn-light" onClick={() => {
                        updateCourse(this.state.course._id, this.state.course).then(status => {})
                        this.setState({
                                          editing : false
                                      })
                    }}>
                        <i className="far fa-save"></i>

                    </button>
                </td>
            </tr>
        )
    }
}

export default CourseRow
