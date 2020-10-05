import React from "react";

//Change to class to maintain state
class CourseRow extends React.Component {

    state = {
        editing: false
    }

    render() {
        return(
            <tr>
                <td>{
                    ! this.state.editing &&
                    <a onClick={this.props.showEditor} href="#">
                        {this.props.course.title}
                    </a>
                }
                    {
                        this.state.editing && <input/>
                    }
                </td>

                <td>
                    <button className="btn btn-light" onClick={() => this.props.deleteCourse(this.props.course)}>Delete</button>
                </td>
                <td>
                    <button className="btn btn-light" onClick={() => {
                        this.setState({
                                          editing : true
                                      })
                    }}><i className="far fa-edit"></i></button>
                </td>
                <td>
                    <button className="btn btn-light" onClick={() => {
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
