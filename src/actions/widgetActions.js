import widgetService from "../services/WidgetService"

export const DELETE_WIDGET = "DELETE_WIDGET"
export const CREATE_WIDGET = "CREATE_WIDGET"
export const UPDATE_WIDGET = "UPDATE_WIDGET"
export const CHANGE_EDITING = "CHANGE_EDITING"

export const changeEditing = (dispatch) =>
    dispatch({type: CHANGE_EDITING})

// Not Needed
export const editWidget = (dispatch, widget) =>
    dispatch({type: UPDATE_WIDGET, widget: {...widget, editing: true}})

export const okWidget = (dispatch, widget) =>
    dispatch({type: UPDATE_WIDGET, widget: {...widget, editing: false}})


export const updateWidget = (dispatch, widget) =>
    widgetService.updateWidget(widget.id, widget)
        .then(status => dispatch({
            type: UPDATE_WIDGET,
            widget: widget
                                 }))


// Working!
export const deleteWidget = (dispatch, widgetId) => {
// {console.log("DELETE WIDGET ERROR:", widgetId)}
    widgetService.deleteWidget(widgetId)
        .then(() => dispatch({
                                 type: "DELETE_WIDGET",
                                 widgetId
                             }))

}

// Working!
export const createWidget = (dispatch, topicId) =>
    widgetService.createWidget()
        .then(widget => dispatch({
                                     type: "CREATE_WIDGET",
                                     widget
                                 }))

// Working!
export const createWidgetForTopic = (dispatch, topicId) =>
    widgetService.createWidgetForTopic(topicId, {
        name: "New Widget",
        type: "PARAGRAPH",
        text: "text",
    })
        .then(widget => dispatch({
                                     type: "CREATE_WIDGET_FOR_TOPIC",
                                     widget
                                 }))

