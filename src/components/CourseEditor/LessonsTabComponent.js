import React from "react";
import {connect} from "react-redux";
import LessonService, {createLessonForModule} from "../../services/LessonService";
import {Link} from "react-router-dom";

const LessonsTabComponent = (
    {
        course = {},
        moduleId,
        lessons=[],
        lessonId,
        createLesson,
        deleteLesson,
        updateLesson,
        editLesson,
        okLesson
    }) =>
    <div>
        <h1>Lessons:</h1>
        <ul className="nav nav-tabs">
            {
                lessons.map(lesson =>
                                <li key={lesson._id}
                                    className="nav-item" >
                                    <a className={`nav-link ${lessonId === lesson._id?'active':''}`} >
                                        {
                                            !lesson.editing &&
                                            <span>

                                                <Link to={`/edit/${course._id}/modules/${moduleId}/lessons/${lesson._id}`}>
                                                    {lesson.title}
                                                </Link>

                                                <button
                                                    className="btn btn-light btn-sm ml-1"
                                                    onClick={() => editLesson(lesson)}>
                                                <i className="far fa-edit"></i>
                                                </button>
                                            </span>
                                        }
                                        {
                                            lesson.editing &&
                                            <span>

                                                <input
                                                    onChange={(event) => updateLesson({
                                                                                          ...lesson,
                                                                                          title: event.target.value
                                                                                      })}
                                                    value={lesson.title}/>
                                                <button
                                                        className="btn btn-light btn-sm"
                                                        onClick={() => okLesson(lesson)}>
                                                    <i className="fa fa-check"></i>
                                                </button>
                                                <button
                                                        className="btn btn-light btn-sm"
                                                        onClick={() => deleteLesson(lesson._id)}>
                                                        <i className="fas fa-trash-alt"></i>
                                                </button>
                                            </span>
                                        }

                                    </a>
                                </li>
                )
            }
            <li className="nav-item">
                <a className="nav-link">
                    <button
                        className="btn btn-light btn-sm ml-2"
                        onClick={() => createLesson(moduleId)}>
                        +
                    </button>
                </a>

            </li>
        </ul>
    </div>;

const stateToPropertyMapper = (state) => ({
    lessons: state.lessonReducer.lessons,
    moduleId: state.lessonReducer.moduleId,
    course: state.courseReducer.course, // for single course
    lessonId: state.topicReducer.lessonId
})

const dispatchToPropertyMapper = (dispatch) => ({

    okLesson: (lesson) =>
        LessonService.updateLesson(lesson._id, {
            ...lesson, editing: false
        }).then(status => dispatch({
                                    type: "UPDATE_LESSON",
                                    lesson: {...lesson, editing: false}
                                   })),
    editLesson: (lesson) =>
        LessonService.updateLesson(lesson._id, {
            ...lesson, editing: true
        }).then(status =>
                    dispatch({
                                 type: "UPDATE_LESSON",
                                 lesson: {...lesson, editing: true}
                             })),

    updateLesson: (lesson) =>
        LessonService.updateLesson(lesson._id, lesson)
            .then(status => dispatch({
                                              type: "UPDATE_LESSON",
                                              lesson: lesson
                                          })),
    deleteLesson: (lessonId) =>
        LessonService.deleteLesson(lessonId)
            .then(status => dispatch({
                                         type: "DELETE_LESSON",
                                         lessonId
                                     })),
    createLesson: (moduleId) =>
        LessonService.createLessonForModule(
            moduleId, {
                title: "New Lesson"
            })
            .then(actualLesson => dispatch({
                                               type: "CREATE_LESSON_FOR_MODULE",
                                               lesson: actualLesson
                                           }))
})

export default connect
(stateToPropertyMapper,
 dispatchToPropertyMapper)
(LessonsTabComponent)