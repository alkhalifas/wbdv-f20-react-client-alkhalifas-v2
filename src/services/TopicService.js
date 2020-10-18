const moduleUrl = "https://wbdv-generic-server.herokuapp.com/api/alkhalifas/modules"
const lessonUrl = "https://wbdv-generic-server.herokuapp.com/api/alkhalifas/lessons"
const topicUrl = "https://wbdv-generic-server.herokuapp.com/api/alkhalifas/topics"

export const createTopicForLesson = (lessonId, newTopic) =>
    fetch(`${topicUrl}/${lessonId}/lessons`, {
        method: "POST",
        body: JSON.stringify(newTopic),
        headers: {
            "content-type": "application/json"
        }
    }).then(response => response.json())

export const updateTopic = (topicId, newTopic) =>
    fetch(`${topicUrl}/${topicId}`, {
        method: "PUT",
        body: JSON.stringify(newTopic),
        headers: {
            "content-type": "application/json"
        }
    }).then(response => response.json())

export const deleteTopic = topicId =>
    fetch(`${topicUrl}/${topicId}`,{
        method: "DELETE"
    }).then(response => response.json())

export const findTopicsForLesson = (lessonId) =>
    fetch(`${lessonUrl}/${lessonId}/topics`)
        .then(response => response.json())

export default {
    findTopicsForLesson,
    createTopicForLesson,
    deleteTopic,
    updateTopic
}