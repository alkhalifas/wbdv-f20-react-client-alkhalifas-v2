import React from "react";
import "./WidgetComponent.css"

const HeadingWidgetComponent = (
    {
        editing,
        widget,
        deleteWidget,
        updateWidget,
        topicId,
        findWidgetsForTopic
    }) =>
    <div>
        {/*{console.log("EDITING WIDGET: ", editing)}*/}
        {
            editing &&
            <div className="container border rounded m-2 p-3 shadow-sm" style={{width: widget.width, height: widget.height}}>
                <div className="row m-2">
                    <h3 className="col-6">{widget.type} Widget</h3>
                    {/*{console.log("WIDGET ORDER: ", widget.widgetOrder)}*/}

                    <button className="btn btn-warning"
                            onClick={(event) => updateWidget({
                                ...widget,
                                widgetOrder: widget.widgetOrder + 1
                                                             })}
                    ><i className="fas fa-arrow-up"></i></button>
                    <button className="btn btn-warning"
                            onClick={(event) => updateWidget({
                                                                 ...widget,
                                                                 widgetOrder: widget.widgetOrder - 1
                                                             })}
                    ><i className="fas fa-arrow-down"></i></button>
                    <button className="btn btn-danger"
                            onClick={() =>deleteWidget(widget.id)}

                    ><i className="fas fa-window-close"></i></button>

                    <select className="form-control col-3"
                            value={widget.type}
                            onChange={(event) => updateWidget({
                                                                  ...widget,
                                                                  type: event.target.value
                                                              })}>
                        {/*{console.log("WIDGET TYPE BEFORE: ", widget.type)}*/}
                        <option value="HEADING">Heading</option>
                        <option value="PARAGRAPH">Paragraph</option>
                        <option value="LIST">List</option>

                    </select>
                    <div className="ml-3">
                        <h6>{widget.widgetOrder}</h6>
                    </div>
                </div>

                    <select className="form-control"
                            value={widget.size}
                            onChange={(event) => updateWidget({
                                                                  ...widget,
                                                                  size: event.target.value
                                                              })}
                            >
                        {/*{console.log("WIDGET SIZE BEFORE: ", widget.size)}*/}
                        <option value="Heading 1">Heading 1</option>
                        <option value="Heading 2">Heading 2</option>
                        <option value="Heading 3">Heading 3</option>
                        <option value="Heading 4">Heading 4</option>
                        <option value="Heading 5">Heading 5</option>
                    </select>
                {/*{console.log("WIDGET SIZE AFTER: ", widget.size)}*/}
                <div>
                    <input placeholder={widget.text} className="form-control"
                           onChange={(event) => updateWidget({
                                                                 ...widget,
                                                                 text: event.target.value
                                                             })}
                                                                       />

                </div>
            </div>
        }
        {
            !editing &&
            <div className="container border rounded-5 m-2 p-3 shadow-sm" style={{width: widget.width, height: 100}}>
                <div className="row m-2">
                    {
                        widget.size === "Heading 1" &&
                        <h1>{widget.text}</h1>
                    }
                    {
                        widget.size === "Heading 2" &&
                        <h2>{widget.text}</h2>
                    }
                    {
                        widget.size === "Heading 3" &&
                        <h3>{widget.text}</h3>
                    }
                    {
                        widget.size === "Heading 4" &&
                        <h4>{widget.text}</h4>
                    }
                    {
                        widget.size === "Heading 5" &&
                        <h5>{widget.text}</h5>
                    }
                </div>
            </div>
        }
    </div>

export default HeadingWidgetComponent
