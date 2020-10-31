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
        {console.log("EDITING WIDGET: ", editing)}
        {
            editing &&
            <div className="container border  rounded m-2 p-2">
                <div className="row m-2">
                    <h3>{widget.type} Widget (Edit)</h3>
                    <button className="btn btn-warning"><i className="fas fa-arrow-up"></i></button>
                    <button className="btn btn-warning"><i className="fas fa-arrow-down"></i></button>
                    <button className="btn btn-danger"
                            onClick={() =>deleteWidget(widget.id) }

                    ><i className="fas fa-window-close"></i></button>

                    <select className="form-control col-3" >
                        <option>Heading</option>
                        <option>Paragraph</option>
                    </select>
                </div>

                    <select className="form-control" >
                        <option>Heading 1</option>
                        <option>Heading 2</option>
                        <option>Heading 3</option>
                        <option>Heading 4</option>
                        <option>Heading 5</option>
                    </select>
                <button className="btn btn-primary">Save</button>

                <div>
                    <input placeholder="Heading Text" className="form-control"
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
            <div className="container border rounded m-2 p-2">
                <h3>{widget.type} Widget (Prev)</h3>
                <h5>{widget.name}</h5>
            </div>
        }
    </div>

export default HeadingWidget