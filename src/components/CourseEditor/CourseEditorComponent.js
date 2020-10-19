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
            this.props.findTopicsForLesson(lessonId)
        }
        if(lessonId) {
            this.props.findTopicsForLesson(lessonId)
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
                <div className="row">
                    <h1>Course Editor</h1>
                    <button className="btn btn-lg">
                        <Link to="/table" className="text-black-50">
                            <svg width="1em" height="1em" viewBox="0 0 16 16"
                                 className="bi bi-x-square-fill" fill="currentColor"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                      d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
                            </svg>
                        </Link>
                    </button>
                </div>

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