import React from "react";
import CourseCard from "./CourseCard";

const CourseGridComponent = ({courses, deleteCourse, showEditor}) =>

    <div>
        <div className="row">
            {
                courses.map((course, index) =>
                                (<CourseCard
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