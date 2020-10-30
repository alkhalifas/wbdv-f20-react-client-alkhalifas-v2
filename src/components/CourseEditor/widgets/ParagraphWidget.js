import React from "react";

const ParagraphWidget = (
    {
        editing=true,
        widget,
        deleteWidget
    }

) =>
    <div>
        {/*{console.log("EDITING WIDGET: ", editing)}*/}
        {
            editing &&
            <div>
                <h3>Paragraph Widget (Editing)</h3>
                <textarea className="form-control"></textarea>
                <input placeholder="Name" className="form-control" />
                {console.log("Widet ID: ", widget.id)}
                <button
                    className="btn btn-light btn-sm"
                    onClick={() => deleteWidget(widget)}>
                    <i className="fas fa-trash-alt"></i>
                </button>
            </div>

        }
        {
            !editing &&
            <div>
                <h3>Paragraph Widget (Preview)</h3>
                <textarea className="form-control"></textarea>
                <input placeholder="Name" className="form-control" />
            </div>
        }
    </div>



export default ParagraphWidget