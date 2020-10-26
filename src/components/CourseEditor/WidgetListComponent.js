import React from "react";
import {connect} from "react-redux";
import {
    createWidget,
    deleteWidget,
    updateWidget,
    editWidget,
    okWidget} from "../../actions/widgetActions";

const WidgetListComponent = ({
                        widgets=[],
                        deleteWidget,
                        createWidget,
                        updateWidget,
                        editWidget,
                        okWidget}) =>
    <div>
        <h1>Widgets!!!</h1>
        <ul>
            {
                widgets.map(widget =>
                                <li key={widget.id}>
                                    <div className="container border rounded p-2 m-2">
                                        <div className="row m-2">
                                            <h4>{widget.type}:</h4>
                                            </div>

                                    </div>
                                </li>
                )
            }
        </ul>
        <button onClick={createWidget}>Create</button>
    </div>

// export default WidgetListComponent

const stateToPropertyMapper = (state) => ({
    widgets: state.widgetsReducer.widgets
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
(WidgetListComponent)