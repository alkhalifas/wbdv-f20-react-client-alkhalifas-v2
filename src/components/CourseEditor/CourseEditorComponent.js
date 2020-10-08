import React from "react";
import ModuleListComponent from "./ModuleListComponent";
import LessonTabsComponent from "./LessonTabsComponent";
import TopicPillsComponent from "./TopicPillsComponent";
import Widget from "./Widget";
const CourseEditorComponent = ({hideEditor, match, courseId}) =>

    <div>
        <div className="row container mb-4">
            <div>
                <a className="btn btn-light mr-2 mt-2" href={"/courses"}>
                    <i className="fas fa-backspace"></i>
                </a>
            </div>

            <h1>Course Editor:  {match.params.courseId}</h1>

        </div>
            <div className="row">
                <div className="col-4 list-group">
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
                    <LessonTabsComponent/>
                    <TopicPillsComponent/>
                    {/*<Widget/>*/}
                </div>
            </div>

    </div>


export default CourseEditorComponent