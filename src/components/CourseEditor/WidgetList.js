import React from "react";
import {connect} from "react-redux";
import {
    createWidget,
    deleteWidget,
    updateWidget,
    editWidget,
    okWidget} from "../../actions/widgetActions";
import HeadingWidget from "./HeadingWidget";
import ParagraphWidget from "./ParagraphWidget";

const WidgetList = ({
                        widgets=[],
                        topicId,
                        createWidget,
                        deleteWidget,
                        }) =>
    <div>
        <div className="row">
            <div className="container row">
                <div className="col-8">
                    <h3>Widgets</h3>
                </div>

                <div className="row col-4">
                    <div>
                        <button className="btn btn-primary">Save</button>
                    </div>

                    <div className="custom-control custom-switch mt-2 ml-2">
                        <input type="checkbox" className="custom-control-input" id="customSwitch1"/>
                        <label className="custom-control-label" htmlFor="customSwitch1">Preview</label>
                    </div>
                </div>

            </div>
        </div>




        <ul>
            {
                widgets.map(widget =>

                                <li key={widget.id}>
                                    {
                                        widget.type === "HEADING" &&
                                        <HeadingWidget
                                            widget={widget}
                                        deleteWidget/>

                                    }
                                    {
                                        widget.type === "PARAGRAPH" &&
                                        <ParagraphWidget widget={widget}/>
                                    }
                                </li>
                )
            }
        </ul>
        <button onClick={
            () => createWidget(topicId)}>
            Create
        </button>
    </div>

// export default WidgetList

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
(WidgetList)