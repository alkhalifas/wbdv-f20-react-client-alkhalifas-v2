import React from "react";

const ParagraphWidget = (
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
            <div className="container border rounded m-2 p-3" style={{width: widget.width, height: widget.height}}>
                <div className="row m-2">
                    <h4>{widget.type} Widget</h4>
                    <button className="btn btn-warning"><i className="fas fa-arrow-up"></i></button>
                    <button className="btn btn-warning"><i className="fas fa-arrow-down"></i></button>
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

                {/*{console.log("WIDGET SIZE AFTER: ", widget.size)}*/}
                <div>
                    <textarea placeholder={widget.text} className="form-control"
                           onChange={(event) => updateWidget({
                                                                 ...widget,
                                                                 name: event.target.value
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
                <h5>{widget.name}</h5>
            </div>
        }
    </div>



export default ParagraphWidget