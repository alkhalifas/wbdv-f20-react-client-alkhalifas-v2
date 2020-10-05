import React from "react";

const ModuleListComponent = ({modules}) =>

        <ul className="list-group table-hover ">
            {modules.map(module =>
                             <li
                                 className="list-group-item list-group-item-action"
                                 key={module._id}>
                                     {module.title}
                             </li>
            )}
        </ul>


export default ModuleListComponent