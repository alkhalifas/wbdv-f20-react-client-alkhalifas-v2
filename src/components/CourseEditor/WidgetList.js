import React from "react";
import {connect} from "react-redux";
import {
    createWidget,
    deleteWidget,
    updateWidget,
    editWidget,
    okWidget, changeEditing, createWidgetForTopic,
} from "../../actions/widgetActions";
import HeadingWidget from "./widgets/HeadingWidget";
import ParagraphWidget from "./widgets/ParagraphWidget";
import widgetService from "../../services/WidgetService";

const WidgetList = ({
                        editing=true,
                        widgets=[],
                        deleteWidget,
                        createWidget,
                         changeEditing,
                        createWidgetForTopic,
                        updateWidget,
                        editWidget,
                        topicId,
                        okWidget}) =>
    <div>
        <h1>Widgets!!!</h1>
        {/*{this.state.widget.title}*/}
        {/*{console.log("~~~~ HERE", widgets)}*/}
        {/*{ widgets.push({"id":"123", "type":"HEADING", "name":"TEST"})}*/}

        <div className="row">
            <div className="col-8">

            </div>

            <button className="btn btn-danger mr-2">Save</button>

            <div className="col-2 custom-switch mt-3 mb-3 pull-right">
                <input className="custom-control-input align-middle" id="switchPrim"
                       type="checkbox" onClick={() => changeEditing()}/>
                    <label className="pull-right custom-control-label inline-block"
                           htmlFor="switchPrim">Preview</label>
            </div>


            {/*<div className="form-check form-check-inline">*/}
            {/*    <input className="form-check-input" type="radio" name="inlineRadioOptions"*/}
            {/*           id="inlineRadio1" value="option1" onClick={() => changeEditing()}/>*/}
            {/*        <label className="form-check-label" htmlFor="inlineRadio1">Editing</label>*/}
            {/*</div>*/}
            {/*<div className="form-check form-check-inline">*/}
            {/*    <input className="form-check-input" type="radio" name="inlineRadioOptions"*/}
            {/*           id="inlineRadio2" value="option2" onClick={() => changeEditing()}/>*/}
            {/*        <label className="form-check-label" htmlFor="inlineRadio2">Preview</label>*/}
            {/*</div>*/}
        </div>

        {console.log("EDITING STATUS:", editing)}

        <ul className="list-unstyled">
            {
                widgets.map(widget =>
                                <li key={widget.id}>
                                    {
                                        widget.type === "HEADING" &&
                                        <HeadingWidget widget={widget}
                                                       editing={editing}
                                                       deleteWidget={deleteWidget}/>
                                    }
                                    {
                                        widget.type === "PARAGRAPH" &&
                                        <ParagraphWidget widget={widget}
                                                         editing={editing}
                                                         deleteWidget={deleteWidget}/>
                                    }
                                </li>
                )
            }
        </ul>


        {console.log("~~~~ topicId HERE", topicId)}
        <button
            onClick={() =>createWidgetForTopic(topicId)}>
            Create
        </button>
    </div>

// export default WidgetList

const stateToPropertyMapper = (state) => ({
    widgets: state.widgetReducer.widgets,
    topicId: state.widgetReducer.topicId,
    editing: state.widgetReducer.editing

})

const propertyToDispatchMapper = (dispatch) => ({
    deleteWidget: (widget) => deleteWidget(dispatch, widget),
    createWidget: () => createWidget(dispatch),
    updateWidget: (widget) => updateWidget(dispatch, widget),
    editWidget: (widget) => editWidget(dispatch, widget),
    okWidget: (widget) => okWidget(dispatch, widget),
    changeEditing: () => changeEditing(dispatch),
    createWidgetForTopic: (topicId) => createWidgetForTopic(dispatch, topicId)

})


export default connect
( stateToPropertyMapper,
  propertyToDispatchMapper)
(WidgetList)