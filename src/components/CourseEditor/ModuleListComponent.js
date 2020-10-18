import React from "react";
import {connect} from "react-redux";
import moduleService from "../../services/ModuleService"
import {Link} from "react-router-dom";

const ModuleListComponent = (
    {
        course = {},
        modules = [],
        deleteModule,
        createModule,
        updateModule,
        editModule,
        okModule,
    }) =>
    <div>
        <h1>Modules:</h1>
        <medium>{course.title}</medium>
        <div>
            <ul className="list-group table-hover">
                {modules.map(module =>
                                 <li key={module._id}
                                     className="list-group-item list-group-item-action">
                                     {
                                         !module.editing &&
                                         <span>
                                      <button
                                          className="btn btn-light mr-2"
                                          onClick={() => editModule(module)}>
                                        <i className="far fa-edit"></i>
                                      </button>

                                      <Link to={`/edit/${course._id}/modules/${module._id}`}>
                                        {module.title}
                                      </Link>
                                </span>
                                     }
                                     {
                                         module.editing &&
                                         <span>

                                   <button
                                       className="btn btn-light mr-2"
                                       onClick={() => okModule(module)}>
                                        <i className="far fa-save float-right"></i>
                                   </button>

                                <input
                                    onChange={(event) => updateModule({
                                                                          ...module,
                                                                          title: event.target.value
                                                                      })}
                                    value={module.title}/>
                             </span>
                                     }

                                     <span className="float-right">
                             <button
                                 className="btn btn-light"
                                 onClick={() => deleteModule(module)}>
                                 <i className="fas fa-trash-alt"></i>
                             </button>
                         </span>


                                 </li>
                )
                }
            </ul>
        </div>

        <button
            onClick={() => createModule(course)}>
            Create
        </button>
    </div>

// export default ModuleListComponent

const stateToPropertyMapper = (state) => ({
    modules: state.moduleReducer.modules, // for list of modules
    course: state.courseReducer.course, // for single course
    lesson:state.lessonReducer.lesson // for single lesson
})

const propertyToDispatchMapper = (dispatch) => ({
    okModule: (module) =>
        moduleService.updateModule(module._id, {
            ...module, editing: false
        }).then(status => dispatch({
                                       type: "UPDATE_MODULE",
                                       module: {...module, editing: false}
                                   })),
    editModule: (module) =>
        moduleService.updateModule(module._id, {
            ...module, editing: true
        }).then(status =>
                    dispatch({
                                 type: "UPDATE_MODULE",
                                 module: {...module, editing: true}
                             })),

    updateModule: (module) =>
        moduleService.updateModule(module._id, module)
            .then(status => dispatch({
                                         type: "UPDATE_MODULE",
                                         module: module
                                     })),

    deleteModule: (module) =>
        moduleService.deleteModule(module._id)
            .then(status => dispatch({
                                         type: "DELETE_MODULE",
                                         module: module
                                     })),
    createModule: (course) =>
        moduleService.createModuleForCourse(course._id, {
            title: "New Module"
        }).then(actualModule => dispatch({
                                             type: "CREATE_MODULE_FOR_COURSE",
                                             module: actualModule
                                         })),

})

export default connect
(stateToPropertyMapper,
 propertyToDispatchMapper)
(ModuleListComponent)