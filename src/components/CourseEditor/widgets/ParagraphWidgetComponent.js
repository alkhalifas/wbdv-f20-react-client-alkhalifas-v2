import React from "react";

const ParagraphWidgetComponent = (
    {
        editing,
        widget,
        deleteWidget,
        updateWidget
    }

) =>
    <div>
        {/*{console.log("EDITING WIDGET: ", editing)}*/}
        {
            editing &&
            <div className="container border rounded m-2 p-3 shadow-sm" style={{width: widget.width, height: widget.height}}>
                <div className="row m-2">
                    <h3 className="col-6">{widget.type} Widget</h3>

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
                            onClick={() =>deleteWidget(widget.id)}>
                        <i className="fas fa-window-close"></i>
                    </button>

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

                {/*{console.log("WIDGET SIZE AFTER: ", widget.size)}*/}
                <div>
                    <textarea
                        placeholder={widget.text}
                        className="form-control"
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
            <div className="container border rounded m-2 shadow-sm" style={{width: widget.width, height: widget.height}}>
                <div className="row m-3">
                    {/*<h3>{widget.type} Widget</h3>*/}
                    <h5>{widget.text}</h5>
                </div>

            </div>
        }
    </div>



export default ParagraphWidgetComponent
