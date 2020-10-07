import React from "react";
import CourseRow from "./CourseRow";

const CourseTableComponent = ({courses, deleteCourse, showEditor}) =>
    <div className="table table-hover container">
        <table>
            <thead>
                <tr>
                    <th>Course Name</th>
                    <th>Last Edited</th>
                    <th>Owner</th>
                    <th> </th>
                    <th> </th>
                    <th> </th>
                </tr>
            </thead>
            <tbody>
            {
                courses.map(function(course, index) {
                    return(
                        <CourseRow
                            key={course._id}
                            course={course}
                            showEditor={showEditor}
                            deleteCourse={deleteCourse}/>
                    )
                })
            }
            </tbody>

        </table>

        <h6>Total Courses ({courses.length})</h6>

    </div>;


export default CourseTableComponent