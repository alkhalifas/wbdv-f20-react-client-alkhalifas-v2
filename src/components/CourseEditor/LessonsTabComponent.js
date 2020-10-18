import React from "react";
import {lessonReducer} from "../../reducers/lessonReducer";
import {connect} from "react-redux";
import lessonService, {createLessonForModule} from "../../services/LessonService";
import moduleService from "../../services/ModuleService";

const LessonsTabComponent = (
    {
        moduleId,
        lessons=[],
        createLesson,
        deleteLesson,
        updateLesson,
        editLesson,
        okLesson
    }) =>
    <div>
        <h1>Lessons ({moduleId})</h1>
        <ul className="nav nav-tabs">
            {
                lessons.map(lesson =>
                                <li key={lesson._id} className="nav-item">
                                    <a class="nav-link">
                                        {
                                            !lesson.editing &&
                                            <span>
                                                {lesson.title}
                                                <button
                                                    className="btn btn-light btn-sm"
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
    </div>

const stateToPropertyMapper = (state) => ({
    lessons: state.lessonReducer.lessons,
    moduleId: state.lessonReducer.moduleId
})

const dispatchToPropertyMapper = (dispatch) => ({

    okLesson: (lesson) =>
        lessonService.updateLesson(lesson._id, {
            ...lesson, editing: false
        }).then(status => dispatch({
                                    type: "UPDATE_LESSON",
                                    lesson: {...lesson, editing: false}
                                   })),
    editLesson: (lesson) =>
        lessonService.updateLesson(lesson._id, {
            ...lesson, editing: true
        }).then(status =>
                    dispatch({
                                 type: "UPDATE_LESSON",
                                 lesson: {...lesson, editing: true}
                             })),

    updateLesson: (lesson) =>
        lessonService.updateLesson(lesson._id, lesson)
            .then(status => dispatch({
                                              type: "UPDATE_LESSON",
                                              lesson: lesson
                                          })),
    deleteLesson: (lessonId) =>
        lessonService.deleteLesson(lessonId)
            .then(status => dispatch({
                                         type: "DELETE_LESSON",
                                         lessonId
                                     })),
    createLesson: (moduleId) =>
        lessonService.createLessonForModule(
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