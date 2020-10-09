import CourseTableComponent from "./CourseTableComponent";
import React from "react";
import CourseEditorComponent from "./CourseEditor/CourseEditorComponent";
import CourseGridComponent from "./CourseGridComponent";


const CourseListComponent =
    ({
         toggle,
         deleteCourse,
         addCourse,
         showEditor,
         hideEditor,
         newCourseTitle,
         layout,
         updateForm,
         courses
     }) =>
       <div>
           <div className="row">
                   <div className="col-4">
                       <h1>Course Manager</h1>
                   </div>
                   <div className="col-6 align-middle mt-2">
                       <input
                              className="search-query form-control"
                              placeholder="Enter New Course Here"
                              onChange={updateForm} //raw event handler
                              value={newCourseTitle}/>
                   </div>
                   <div>
                       <button className="btn pull-right float-right" onClick={addCourse}>
                           <i aria-hidden="true"
                              className="fa fa-plus-circle fa-2x d-block float-right pull-right"></i>
                       </button>
                   </div>
               <div className="float-right mt-1">
                   <button
                       type="button"
                       className="btn btn-light float-right" onClick={toggle}>
                       <i className="fas fa-th-list"></i>
                   </button>
               </div>
           </div>

           {layout === 'table' &&
            <CourseTableComponent
                showEditor={showEditor}
                deleteCourse={deleteCourse}
                courses={courses}/>}
           {layout === 'grid' &&
            <CourseGridComponent showEditor={showEditor}
                                 deleteCourse={deleteCourse}
                                 courses={courses}/>}
       </div>
export default CourseListComponent
