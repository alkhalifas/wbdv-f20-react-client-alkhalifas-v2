import React from "react";
import {findCourseById} from "../../services/CourseService";
import WidgetListContainer from "../../containers/WidgetListContainer";
import WidgetList from "../WidgetList";
import ModuleListComponent from "./ModuleListComponent";
import {connect} from "react-redux";
import moduleService from "../../services/ModuleService"
import lessonService from "../../services/LessonService"
import LessonTabs from "./LessonsTabComponent";
import TopicPillsComponent from "./TopicPillsComponent";
import topicService from "../../services/TopicService";
import {Link} from "react-router-dom";

class CourseEditorComponent extends React.Component {

    componentDidMount() {
        const courseId = this.props.match.params.courseId;
        const moduleId = this.props.match.params.moduleId;
        const lessonId = this.props.match.params.lessonId;
        const topicId = this.props.match.params.topicId;

        this.props.findCourseById(courseId);
        this.props.findModulesForCourse(courseId);
        this.props.findLessonsForModule(moduleId);
        this.props.findTopicsForLesson(lessonId);

        if(moduleId) {
            this.props.findLessonsForModule(moduleId);
            if(lessonId) {
                this.props.findTopicsForLesson(lessonId)
            }
        }

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const moduleId = this.props.match.params.moduleId
        const lessonId = this.props.match.params.lessonId
        const topicId = this.props.match.params.topicId

        if(moduleId !== prevProps.match.params.moduleId) {
            this.props.findLessonsForModule(moduleId)
        }
        if(lessonId !== prevProps.match.params.lessonId) {
            this.props.findTopicsForLesson(lessonId)
        }




    }

    render() {
        return(
            <div>

                <h1>Course Editor</h1>
                <div className="row">
                    <div className="col-4">
                        <ModuleListComponent/>
                    </div>
                    <div className="col-8">
                        <LessonTabs/>
                        <TopicPillsComponent/>
                    </div>
                </div>
            </div>
        )
    }
}

const stateToPropertyMapper = (state) => ({
    course: state.courseReducer.course
})

const propertyToDispatchMapper = (dispatch) => ({
    findCourseById: (courseId) => findCourseById(courseId)
        .then(actualCourse => dispatch({
                                           type: "SET_COURSES",
                                           course: actualCourse
                                       })),
    findModulesForCourse: (courseId) => moduleService.findModulesForCourse(courseId)
        .then(actualModules => dispatch({
                                            type: "FIND_MODULES_FOR_COURSE",
                                            modules: actualModules
                                        })),
    findLessonsForModule: (moduleId) =>
        lessonService.findLessonsForModule(moduleId)
            .then(lessons => dispatch({
                                          type: "FIND_LESSONS_FOR_MODULE",
                                          lessons,
                                          moduleId
                                      })),
    findTopicsForLesson: (lessonId) =>
        topicService.findTopicsForLesson(lessonId)
            .then(topics => dispatch({
                                          type: "FIND_TOPICS_FOR_LESSON",
                                          topics,
                                          lessonId
                                      }))
})

export default connect
(stateToPropertyMapper, propertyToDispatchMapper)
(CourseEditorComponent)