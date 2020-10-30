import React from "react";

const ParagraphWidget = (
    {
        editing,
        widget,
        deleteWidget
    }

) =>
    <div>
        {/*{console.log("EDITING WIDGET: ", editing)}*/}
        {
            editing &&
            <div className="container border  rounded m-3 p-3">
                <div className="row">
                    <h3>{widget.type} Widget (Editing)</h3>
                    <button className="btn btn-warning"><i className="fas fa-arrow-up"></i></button>
                    <button className="btn btn-warning"><i className="fas fa-arrow-down"></i></button>
                    <button className="btn btn-danger"><i className="fas fa-window-close"></i></button>
                </div>
                <div>
                    <textarea className="form-control" placeholder="Paragraph Text"></textarea>
                </div>

            </div>

        }
        {
            !editing &&
            <div className="container border rounded">
                <h3>{widget.type} Widget (Preview)</h3>
                <h5>{widget.name}</h5>
            </div>
        }
    </div>



export default ParagraphWidget