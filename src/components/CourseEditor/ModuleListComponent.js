import React from "react";
import {connect} from "react-redux";
import moduleService from "../../services/ModuleService"
import {Link} from "react-router-dom";

const ModuleListComponent = (
    {
        moduleId,
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
                                     className={`list-group-item list-group-item-action ${moduleId === module._id?'active ':''}`}>

                                     {
                                         !module.editing &&
                                         <span>


                                              <Link className={`m-0  ${moduleId === module._id?'text-white ':''}`}
                                                  to={`/edit/${course._id}/modules/${module._id}`}>
                                                {module.title}
                                              </Link>
                                             <span className="float-right">
                                                 <button
                                                     className="btn btn-light mr-2 pull-right"
                                                     onClick={() => editModule(module)}>
                                                <i className="far fa-edit"></i>
                                             </button>
                                             </span>

                                        </span>
                                     }

                                     {
                                         module.editing &&
                                         <span>
                                                <input
                                                    onChange={(event) => updateModule({
                                                                                          ...module,
                                                                                          title: event.target.value
                                                                                      })}
                                                    value={module.title}/>
                                                    <button
                                                        className="btn btn-primary "
                                                        onClick={() => okModule(module)}>
                                                    <i className="far fa-save float-right"></i>
                                               </button>
                                                 <button
                                                     className="btn btn-primary float-right"
                                                     onClick={() => deleteModule(module)}>
                                                     <i className="fas fa-trash-alt"></i>
                                                   </button>
                                         </span>
                                     }


                                     <span >

                                     </span>


                                 </li>
                )
                }
                <li className="list-group-item list-group-item-action">
                    <div className="text-center">
                        <button
                            className="btn"
                            onClick={() => createModule(course)}>
                                +
                        </button>
                    </div>

                </li>
            </ul>
        </div>


    </div>

// export default ModuleListComponent

const stateToPropertyMapper = (state) => ({
    modules: state.moduleReducer.modules, // for list of modules
    course: state.courseReducer.course, // for single course
    moduleId: state.lessonReducer.moduleId
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