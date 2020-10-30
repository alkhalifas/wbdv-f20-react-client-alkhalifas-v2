import widgetService from "../services/WidgetService"

export const DELETE_WIDGET = "DELETE_WIDGET"
export const CREATE_WIDGET = "CREATE_WIDGET"
export const UPDATE_WIDGET = "UPDATE_WIDGET"
export const CHANGE_EDITING = "CHANGE_EDITING"

export const changeEditing = (dispatch) =>
    dispatch({type: CHANGE_EDITING})

export const editWidget = (dispatch, widget) =>
    dispatch({type: UPDATE_WIDGET, widget: {...widget, editing: true}})

export const okWidget = (dispatch, widget) =>
    dispatch({type: UPDATE_WIDGET, widget: {...widget, editing: false}})

export const updateWidget = (dispatch, widget) =>
    dispatch({type: UPDATE_WIDGET, widget})

export const deleteWidget = (dispatch, widget) =>
    dispatch({type: DELETE_WIDGET, widget})

export const createWidget = (dispatch, topicId) =>
    widgetService.createWidget()
        .then(widget => dispatch({
                                     type: "CREATE_WIDGET",
                                     widget
                                 }))

export const createWidgetForTopic = (dispatch, topicId) =>
    widgetService.createWidgetForTopic(topicId, )
        .then(widget => dispatch({
                                     type: "CREAT_WIDGET_FOR_TOPIC",
                                     widget
                                 }))

