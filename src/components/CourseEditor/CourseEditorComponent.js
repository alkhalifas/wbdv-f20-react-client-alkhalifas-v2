import React from "react";
import ModuleListComponent from "./ModuleListComponent";
import LessonTabs from "./LessonTabs";
import TopicPills from "./TopicPills";

const CourseEditorComponent = ({hideEditor}) =>

    <div>
        <button className="btn btn-light" onClick={hideEditor}>Return</button>
        <h3>Course Editor</h3>
            <div className="row">
                <div className="col-4">
                    <ModuleListComponent
                        modules={[
                            {_id: "123", title: "CSS"},
                            {_id: "234", title: "HTML"},
                            {_id: "345", title: "React"},
                            {_id: "456", title: "Angular"},
                            {_id: "567", title: "Python"},
                            {_id: "678", title: "Java"},
                            {_id: "789", title: "JavaScript"}
                        ]}/>
                </div>
                <div className="col-8">
                    <LessonTabs/>
                    <TopicPills/>
                </div>
            </div>



    </div>


export default CourseEditorComponent