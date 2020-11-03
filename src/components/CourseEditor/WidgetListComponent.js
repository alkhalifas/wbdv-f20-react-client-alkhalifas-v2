import React from "react";
import {connect} from "react-redux";
import { orderBy } from "lodash";
import {
    createWidget,
    deleteWidget,
    updateWidget,
    editWidget,
    okWidget, changeEditing, createWidgetForTopic,
} from "../../actions/widgetActions";
import HeadingWidgetComponent from "./widgets/HeadingWidgetComponent";
import ParagraphWidgetComponent from "./widgets/ParagraphWidgetComponent";
import widgetService from "../../services/WidgetService";

// function compare( a, b ) {
//     if ( a.widgetOrder < b.widgetOrder ){
//         return -1;
//     }
//     if ( a.widgetOrder > b.widgetOrder ){
//         return 1;
//     }
//     return 0;
// }

const WidgetListComponent = ({
                        editing=true,
                        widgets=[],
                        deleteWidget,
                        createWidget,
                        changeEditing,
                        createWidgetForTopic,
                        // findWidgetsForTopic,
                        updateWidget,
                        editWidget,
                        topicId,
                        okWidget}) =>
    <div className="container">

        <div className="row">
            <h1 className="">Widgets:</h1>
            {/*{this.state.widget.title}*/}
            {/*{console.log("~~~~ HERE", widgets)}*/}
            {/*{ widgets.push({"id":"123", "type":"HEADING", "name":"TEST"})}*/}

            <div className="col-8">
                {/*<button className="btn btn-danger mr-2">Save</button>*/}

                <div className="custom-switch mt-3 mb-3 float-right">
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
        </div>


        {/*{console.log("EDITING STATUS:", editing)}*/}

        <div className="list-group">
            {/*{widgets.sort((a, b) => (a.widgetOrder > b.widgetOrder) ? 1 : -1)}*/}
            {console.log(widgets.sort())}
            {/*{this.state.widgets.sort( compare )}*/}

            {/*// filter returns new array*/}
            {/*// sort order.widgetOrder*/}
            {
                widgets.map(widget =>
                                <div key={widget.id}>
                                    {
                                        widget.type === "HEADING" &&
                                        <HeadingWidgetComponent widget={widget}
                                                                editing={editing}
                                                                deleteWidget={deleteWidget}
                                                                updateWidget={updateWidget}
                                                                />
                                    }
                                    {
                                        widget.type === "PARAGRAPH" &&
                                        <ParagraphWidgetComponent widget={widget}
                                                                  editing={editing}
                                                                  deleteWidget={deleteWidget}
                                                                  updateWidget={updateWidget}/>
                                    }
                                </div>
                )
            }
        </div>


        {/*{console.log("~~~~ topicId HERE", topicId)}*/}
        {/*        <button*/}
        {/*            className="fas fa-plus-circle fa-2x text-center"*/}
        {/*            onClick={() =>createWidgetForTopic(topicId)}>*/}
        {/*        </button>*/}
        <button
            className="btn"
            onClick={() =>createWidgetForTopic(topicId)}>
            <i aria-hidden="true"
               className="fa fa-plus-circle fa-3x "></i>
        </button>

    </div>

// export default WidgetListComponent

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
    createWidgetForTopic: (topicId) => createWidgetForTopic(dispatch, topicId),
    // findWidgetsForTopic: (topicId) => findWidgetsForTopic(topicId)

})


export default connect
( stateToPropertyMapper,
  propertyToDispatchMapper)
(WidgetListComponent)