import React from "react";
import {Link} from "react-router-dom";
import {updateCourse} from "../services/CourseService";

const courseBeingEdited = false
const editCourse = () => {}

export default class CourseRowComponent extends React.Component {
    state = {
        editing: false,
        course: this.props.course
    }
    render() {
        return(
            <tr>
                <td>
{/*//------------------------------------------- Course Title -------------------------------------//*/}
{/*                    {*/}
{/*                        this.state.editing &&*/}
{/*                        <input*/}
{/*                            className="form-control"*/}
{/*                            onChange={(event) => {*/}
{/*                                const newTitle = event.target.value*/}
{/*                                this.setState(prevState => ({*/}
{/*                                    course: {...prevState.course, title: newTitle}*/}
{/*                                }))}*/}
{/*                            }*/}
{/*                            value={this.state.course.title}/>*/}
{/*                    }*/}

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
                        <Link to={`/edit/${this.props.course._id}`}>{this.props.course.title} </Link>
                    }
                </td>
{/*//------------------------------------------- Course Owner -------------------------------------//*/}
                <td>{this.props.course.owner}</td>
{/*//------------------------------------------- Course Modified -------------------------------------//*/}
                <td>{this.props.course.modified}</td>

{/*//------------------------------------------- Edit/Save Button -------------------------------------//*/}
                <td>
                    {
                        !this.state.editing &&
                        <button
                            onClick={() => this.setState({editing: true})}
                            className="btn btn-light"><i className="far fa-edit"></i></button>
                    }
                    {
                        this.state.editing &&
                        <button className="btn btn-light" onClick={() => {
                            updateCourse(this.state.course._id, this.state.course).then(status => {})
                            this.setState({
                                              editing : false
                                          })
                        }}>
                            <i className="far fa-save"></i>

                        </button>
                    }
                </td>
{/*//------------------------------------------- Delete Button -------------------------------------//*/}
                <td>
                    <button
                        onClick={() => this.props.deleteCourse(this.props.course)}
                        className="btn btn-light">
                        <i className="fas fa-trash-alt"></i>
                    </button>
                </td>
            </tr>
        )
    }
}