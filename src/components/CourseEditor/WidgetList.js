import React from "react";
import {connect} from "react-redux";
import {
    createWidget,
    deleteWidget,
    updateWidget,
    editWidget,
    okWidget} from "../../actions/widgetActions";
import HeadingWidget from "./widgets/HeadingWidget";
import ParagraphWidget from "./widgets/ParagraphWidget";

const WidgetList = ({
                        widgets=[],
                        deleteWidget,
                        createWidget,
                        updateWidget,
                        editWidget,
                        okWidget}) =>
    <div>
        <h1>Widgets!!!</h1>
        {console.log("~~~~ HERE", widgets)}
        { widgets.push({"id":"123", "type":"HEADING", "name":"TEST"})}
        <ul>
            {
               widgets.map(widget =>
                                <li key={widget.id}>
                                    {widget.name}
                                </li>
                )
            }
        </ul>
        <button onClick={createWidget}>Create</button>
    </div>

// export default WidgetList

const stateToPropertyMapper = (state) => ({
    widgets: state.widgetReducer.widgets
})

const propertyToDispatchMapper = (dispatch) => ({
    deleteWidget: (widget) => deleteWidget(dispatch, widget),
    createWidget: () => createWidget(dispatch),
    updateWidget: (widget) => updateWidget(dispatch, widget),
    editWidget: (widget) => editWidget(dispatch, widget),
    okWidget: (widget) => okWidget(dispatch, widget)
})

export default connect
( stateToPropertyMapper,
  propertyToDispatchMapper)
(WidgetList)