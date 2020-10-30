import React from "react";

const HeadingWidget = (
    {
        editing,
        widget
    }) =>
    <div>
        {console.log("EDITING WIDGET: ", editing)}
        {
            editing &&
            <div className="container border  rounded m-2 p-2">
                <div className="row">
                    <h3>{widget.type} Widget (Editing)</h3>
                    <button className="btn btn-warning"><i className="fas fa-arrow-up"></i></button>
                    <button className="btn btn-warning"><i className="fas fa-arrow-down"></i></button>
                    <button className="btn btn-danger"><i className="fas fa-window-close"></i></button>

                    <select className="form-control" >
                        <option>Heading 1</option>
                        <option>Heading 2</option>
                        <option>Heading 3</option>
                        <option>Heading 4</option>
                        <option>Heading 5</option>
                    </select>
                </div>
                <div>
                    <input placeholder="Heading Text" className="form-control" />
                </div>

            </div>

        }
        {
            !editing &&
            <div className="container border rounded m-2 p-2">
                <h3>{widget.type} Widget (Preview)</h3>
                <h5>{widget.name}</h5>
            </div>
        }
    </div>

export default HeadingWidget