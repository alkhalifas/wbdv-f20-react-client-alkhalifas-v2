import React from "react";
import {connect} from "react-redux";
import {
    createWidget,
    deleteWidget,
    updateWidget,
    editWidget,
    okWidget,} from "../../actions/widgetActions";
import HeadingWidget from "./widgets/HeadingWidget";
import ParagraphWidget from "./widgets/ParagraphWidget";
import widgetService from "../../services/WidgetService";

const WidgetList = ({
                        editing=true,
                        widgets=[],
                        deleteWidget,
                        createWidget,
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
        <ul>
            {
                widgets.map(widget =>
                                <li key={widget.id}>
                                    {
                                        widget.type === "HEADING" &&
                                        <HeadingWidget widget={widget}/>
                                    }
                                    {
                                        widget.type === "PARAGRAPH" &&
                                        <ParagraphWidget widget={widget}/>
                                    }
                                </li>
                )
            }
        </ul>
        {console.log("~~~~ topicId HERE", topicId)}
        <button
            onClick={createWidgetForTopic(topicId)}>
            Create
        </button>
    </div>

// export default WidgetList

const stateToPropertyMapper = (state) => ({
    widgets: state.widgetReducer.widgets,
    topicId: state.widgetReducer.topicId

})

const propertyToDispatchMapper = (dispatch) => ({
    deleteWidget: (widget) => deleteWidget(dispatch, widget),
    createWidget: () => createWidget(dispatch),
    updateWidget: (widget) => updateWidget(dispatch, widget),
    editWidget: (widget) => editWidget(dispatch, widget),
    okWidget: (widget) => okWidget(dispatch, widget),
    createWidgetForTopic: (topicId) =>
        widgetService.createWidgetForTopic(
            topicId,
            {
            name: "NEW WIDGET",
            type: "PARAGRAPH",
            topicId : topicId,
        }).then(widget => dispatch({
                                       type: "CREAT_WIDGET_FOR_TOPIC",
                                       widget
                                   }))
})


export default connect
( stateToPropertyMapper,
  propertyToDispatchMapper)
(WidgetList)