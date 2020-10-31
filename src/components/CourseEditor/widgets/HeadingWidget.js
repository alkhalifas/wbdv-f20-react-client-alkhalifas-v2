import React from "react";
import "./widget.css"

const HeadingWidget = (
    {
        editing,
        widget,
        deleteWidget,
        updateWidget
    }) =>
    <div>
        {/*{console.log("EDITING WIDGET: ", editing)}*/}
        {
            editing &&
            <div className="container border rounded m-2 p-3" style={{width: widget.width, height: widget.height}}>
                <div className="row m-2">
                    <h3>{widget.type} Widget</h3>
                    {console.log("WIDGET ORDER: ", widget.widgetOrder)}

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
                            onClick={() =>deleteWidget(widget.id) }

                    ><i className="fas fa-window-close"></i></button>

                    <select className="form-control col-3"
                            value={widget.type}
                            onChange={(event) => updateWidget({
                                                                  ...widget,
                                                                  type: event.target.value
                                                              })}>
                        {console.log("WIDGET TYPE BEFORE: ", widget.type)}
                        <option value="HEADING">Heading</option>
                        <option value="PARAGRAPH">Paragraph</option>
                    </select>

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
            <div className="container border rounded m-2 p-3" style={{width: widget.width, height: widget.height}}>
                <div className="row m-2">
                    <h3>{widget.type} Widget</h3>
                </div>
                <h5>{widget.text}</h5>
            </div>
        }
    </div>

export default HeadingWidget