import React from "react";
import {connect} from "react-redux";
import TopicService from "../../services/TopicService";
import lessonService from "../../services/LessonService";

const TopicPillsComponent = (
    {
        courseId,
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
        <h1>Topics ({lessonId})</h1>
    </div>

const stateToPropertyMapper = (state) => ({
    topics: state.topicReducer.topics,
    lessons: state.topicReducer.lessons,
    moduleId: state.topicReducer.moduleId
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
        TopicService.deleteTopic(topicId)
            .then(status => dispatch({
                                         type: "UPDATE_TOPIC",
                                         topicId
                                     })),
    createTopic: (lessonId) =>
        TopicService.createTopicForLesson(
            lessonId, {
                title: "New Lesson"
            })
            .then(actualTopic => dispatch({
                                               type: "CREATE_LESSON_FOR_MODULE",
                                               lesson: actualTopic
                                           }))
})


export default connect
(stateToPropertyMapper, dispatchToPropertyMapper)
(TopicPillsComponent)