import React from "react";
import CourseCard from "./CourseCard";
import CourseRow from "./CourseRow";

const CourseGridComponent = ({courses, deleteCourse, showEditor}) =>

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

export default CourseGridComponent