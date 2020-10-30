import React from "react";
import {connect} from "react-redux";
import TopicService from "../../services/TopicService";
import {Link} from "react-router-dom";
import { useLocation } from 'react-router-dom'
import {withRouter} from 'react-router-dom';

const TopicPillsComponent = (

    //comes from redux store
    {
        course = {},
        moduleId,
        lessonId,
        topics=[],
        topicId,
        // tempTopicId,
        createTopic,
        deleteTopic,
        updateTopic,
        editTopic,
        okTopic
    }) =>
    <div>
        <h1>Topics:</h1>
        {/*<h6>Course._id ({course._id})</h6>*/}
        {/*<h6>ModuleId ({moduleId})</h6>*/}
        <h6>topicId ({topicId})</h6>

        <ul className="nav nav-pills ">
            {

                topics.map(topic =>
                               <li key={topic._id}
                                   className="nav-item border rounded m-2">
                                   <a className={`nav-link ${topicId === topic._id?'active':''}`}
                                      data-toggle="tab">
                                       {
                                           !topic.editing &&
                                           <span>
                                               <Link className={`m-0  ${topicId === topic._id?'text-white ':''}`}
                                                   to={`/edit/${course._id}/modules/${moduleId}/lessons/${lessonId}/topics/${topic._id}`}>
                                                    {topic.title}
                                                </Link>
                                               <button
                                                   className="btn btn-light btn-sm ml-1"
                                                   onClick={() => editTopic(topic)}>
                                                <i className="far fa-edit"></i>
                                                </button>
                                           </span>
                                       }
                                       {
                                           topic.editing &&
                                           <span>
                                                <input
                                                    onChange={(event) => updateTopic({
                                                                                          ...topic,
                                                                                          title: event.target.value
                                                                                      })}
                                                    value={topic.title}/>

                                                <button
                                                    className="btn btn-light btn-sm"
                                                    onClick={() => okTopic(topic)}>
                                                    <i className="fa fa-check"></i>
                                                </button>
                                                <button
                                                    className="btn btn-light btn-sm"
                                                    onClick={() => deleteTopic(topic._id)}>
                                                    <i className="fas fa-trash-alt"></i>
                                                 </button>
                                           </span>

                                       }


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
                    </button>
                </a>

            </li>
        </ul>


    </div>

const stateToPropertyMapper = (state) => ({
    topics: state.topicReducer.topics,
    topicId: state.topicReducer.topicId,
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
                             topic: actualTopic
                         })
            })
    }
})


export default connect
(stateToPropertyMapper,
 dispatchToPropertyMapper)
(TopicPillsComponent)