import React from "react";
import CourseCardContainer from "./CourseCardContainer";

const CourseGridComponent = ({courses, deleteCourse, showEditor}) =>

    <div>

        <div className="row">
            {
                courses.map((course, index) =>
                                (<CourseCardContainer
                                    key={course._id}
                                    course={course}
                                    showEditor={showEditor}
                                    deleteCourse={deleteCourse}/>)
                )
            }


        </div>
        <div className="row">
            <h6>Total Courses ({courses.length})</h6>

        </div>
    </div>

export default CourseGridComponent