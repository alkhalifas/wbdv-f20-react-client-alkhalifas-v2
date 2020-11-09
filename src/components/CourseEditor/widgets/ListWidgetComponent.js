import React from "react";
import "./WidgetComponent.css"

const ListWidgetComponent = (
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
            <div className="container border rounded m-2 p-3 shadow-sm" style={{width: widget.width, height: 300}}>
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
                        <option value="IMAGE">Image</option>

                    </select>
                    <div className="ml-3">
                        <h6>{widget.widgetOrder}</h6>

                    </div>



                </div>

                {/*{console.log("WIDGET LIST Before: ", listOfItems)}*/}
                <div>
                    <textarea
                        placeholder={widget.text}
                        id = "listOfItems"
                        style={{height:150}}
                        value={widget.text}
                        className="form-control"
                        onChange={(event) => {
                            widget.text = event.target.value;
                            listOfItems = widget.text.split(/\n/);
                            updateWidget({
                                                              ...widget,
                                                              text: event.target.value,
                                                          })}}
                    />
                    {/*{console.log("WIDGET LIST After: ", listOfItems)}*/}

                </div>
                <div className="mt-2">
                    <select className="form-control"
                            value={widget.value}
                            onChange={(event) => updateWidget({
                                                                  ...widget,
                                                                  value: event.target.value
                                                              })}>
                        <option value="ORDERED">Ordered</option>
                        <option value="UNORDERED">Unordered</option>
                    </select>
                </div>
            </div>

        }
        {console.log("WIDGET VALUE: ", widget.value)}

        {
            !editing && widget.value === "ORDERED" &&
            <div className="container border rounded m-2 shadow-sm" style={{width: widget.width, height: 150}}>
                <div className="row m-3">
                    <h6>Ordered</h6>
                    <ol>
                        {
                            listOfItems.map(item =>
                                <li>{item}</li>)
                        }
                    </ol>
                </div>
            </div>
        }
        {
            !editing && widget.value === "UNORDERED" &&
            <div className="container border rounded m-2 shadow-sm" style={{width: widget.width, height: 150}}>
                <div className="row m-3">
                    <h6>Unordered</h6>
                    <ul>
                        {
                            listOfItems.map(item =>
                                                <li>{item}</li>)
                        }
                    </ul>
                </div>
            </div>
        }
    </div>

export default ListWidgetComponent
