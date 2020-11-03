import {DELETE_WIDGET, CREATE_WIDGET, UPDATE_WIDGET, CHANGE_EDITING} from "../actions/widgetActions"

const initialState = {
    widgets: [],
    editing : false,
}

const widgetReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FIND_WIDGETS_FOR_TOPIC":
            return {
                ...state,
                widgets: action.widgets,
                topicId: action.topicId
            };
        case "FIND_ALL_WIDGETS":
            return {
                ...state,
                widgets: action.widgets
            };
        case CREATE_WIDGET:
            return {
                widgets: [...state.widgets, action.widget]
            };
        case "CREATE_WIDGET_FOR_TOPIC":
            return {
                ...state,
                widgets: [
                    ...state.widgets,
                    action.widget
                ]
            };
        case UPDATE_WIDGET:
            return {
                widgets: state.widgets.map(
                    widget => widget.id === action.widget.id ?
                              action.widget : widget)
            };

        case CHANGE_EDITING:
            return {
                ...state,
                editing: !state.editing
            }
        case DELETE_WIDGET:
        // {console.log("DELETE WIDGET: ", state.widgets)}
            return {
                widgets: state.widgets.filter(widget => widget !== action.widget)
            }
        default:
            return state
    }
}

export default widgetReducer