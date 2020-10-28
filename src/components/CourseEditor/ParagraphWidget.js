import React from "react";

const ParagraphWidget = ({widget, deleteWidget}) =>
    <div className="border rounded m-2 p-2">
        <h3>Paragraph Widget</h3>
        <textarea>
        </textarea>
        <button
            className="btn btn-light btn-sm"
            onClick={() => deleteWidget(widget)}>
            <i className="fas fa-trash-alt"></i>
        </button>
    </div>

export default ParagraphWidget