const WIDGET_URL = "http://localhost:8080/api/widgets"
const TOPIC_URL  = "http://localhost:8080/api/topics"

const findAllWidgets = () =>
    fetch(WIDGET_URL)
        .then(response => response.json())

const findWidgetsForTopic = (topicId) =>
    fetch(`${TOPIC_URL}/${topicId}/widgets`)
         .then(response => response.json())


const createWidget = () =>
fetch(WIDGET_URL, {
        method: "POST",
        body: JSON.stringify({name: "New Widget",
                                    type: "HEADING",
                                    }),
        headers: {
            "content-type": "application/json"
        }
    })
        .then(response => response.json())

const createWidgetForTopic = (topicId, widget) =>
    fetch(`${TOPIC_URL}/${topicId}/widgets`,
          {
              method: "POST",
              body: JSON.stringify({widget}),
              headers: {
                  "content-type": "application/json"
              }
          })
        .then(response => response.json())

export const updateWidget = (widgetId, newWidget) =>
    fetch(`${WIDGET_URL}/${widgetId}`, {
        method: "PUT",
        body: JSON.stringify(newWidget),
        headers: {
            "content-type": "application/json"
        }
    }).then(response => response.json())

export const deleteWidget = (widgetId) =>
    fetch(`${WIDGET_URL}/${widgetId}`, {
        method: "DELETE"
    })


export default {
    findAllWidgets, createWidget, findWidgetsForTopic, createWidgetForTopic, deleteWidget
}