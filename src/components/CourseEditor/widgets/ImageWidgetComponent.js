import React from "react";
import "./WidgetComponent.css"

const ImageWidgetComponent = (
    {
        editing,
        widget,
        deleteWidget,
        updateWidget,
        topicId,
        findWidgetsForTopic,
        listOfItems = widget.text.split(/\n/)
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
                        <option value="IMAGE">Image</option>

                    </select>
                    <div className="ml-3">
                        <h6>{widget.widgetOrder}</h6>
                    </div>
                </div>

                {/*{console.log("WIDGET SIZE AFTER: ", widget.size)}*/}
                <div>
                    <input placeholder={widget.url} className="form-control"
                           onChange={(event) => updateWidget({
                                                                 ...widget,
                                                                 url: event.target.value
                                                             })}
                    />

                </div>
            </div>
        }
        {
            !editing &&
            <div className="container border rounded-5 m-2 p-3 shadow-sm" style={{width: widget.width, height: 400}}>
                <div className="row m-2">
                    <img
                        className="imageAspectRatio text-center img-fluid"
                        src={widget.url}/>
                </div>
            </div>
        }
    </div>

export default ImageWidgetComponent
