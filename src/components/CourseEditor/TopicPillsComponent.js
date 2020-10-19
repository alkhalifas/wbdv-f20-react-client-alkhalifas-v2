import React from "react";
import {connect} from "react-redux";
import TopicService from "../../services/TopicService";
import {Link} from "react-router-dom";

const TopicPillsComponent = (
    {
        course = {},
        moduleId,
        lessonId,
        topics=[],

        createTopic,
        deleteTopic,
        updateTopic,
        editTopic,
        okTopic
    }) =>
    <div>
        <h1>Topics:</h1>
        <h6>Course ({course._id})</h6>
        <h6>Module ({moduleId})</h6>
        <h6>Lessons ({lessonId})</h6>

        <ul className="nav nav-pills ">
            {
                topics.map(topic =>
                               <li key={topic._id}
                                   className="nav-item border rounded m-2">

                                   <a className="nav-link" data-toggle="tab">
                                       {topic.title}
                                        <button
                                            className="btn btn-light btn-sm"
                                            onClick={() => deleteTopic(topic._id)}>
                                            <i className="fas fa-trash-alt"></i>
                                        </button>
                                   </a>
                               </li>
                )
            }

            <li className="nav-item border rounded m-2">
                <a className="nav-link">
                    <button
                        className="btn btn-light btn-sm"
                        onClick={() => createTopic(lessonId)}>
                          +
                        {console.log("Topic Added!")}
                    </button>
                </a>

            </li>
        </ul>


    </div>

const stateToPropertyMapper = (state) => ({
    topics: state.topicReducer.topics,
    lessons: state.topicReducer.lessons,
    lessonId: state.topicReducer.lessonId,
    moduleId: state.lessonReducer.moduleId,
    course: state.courseReducer.course, // for single course

})

const dispatchToPropertyMapper = (dispatch) => ({

    okTopic: (topic) =>
        TopicService.updateTopic(topic._id, {
            ...topic, editing: false
        }).then(status => dispatch({
                                       type: "UPDATE_TOPIC",
                                       topic: {...topic, editing: false}
                                   })),
    editTopic: (topic) =>
        TopicService.updateTopic(topic._id, {
            ...topic, editing: true
        }).then(status =>
                    dispatch({
                                 type: "UPDATE_TOPIC",
                                 topic: {...topic, editing: true}
                             })),

    updateTopic: (topic) =>
        TopicService.updateTopic(topic._id, topic)
            .then(status => dispatch({
                                         type: "UPDATE_TOPIC",
                                         topic: topic
                                     })),
    deleteTopic: (topicId) =>
    {

        TopicService.deleteTopic(topicId)
            .then(status => {

                dispatch({
                             type: "DELETE_TOPIC",
                             topicId
                         })
            })
    },
    createTopic: (lessonId) => {
        TopicService.createTopicForLesson(
            lessonId, {
                title: "New Topic"
            })
            .then(actualTopic => {
                dispatch({
                             type: "CREATE_TOPIC_FOR_LESSON",
                             lesson: actualTopic
                         })
            })
    }
})


export default connect
(stateToPropertyMapper,
 dispatchToPropertyMapper)
(TopicPillsComponent)