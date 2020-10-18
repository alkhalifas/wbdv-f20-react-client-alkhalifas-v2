
import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import "bootstrap/dist/css/bootstrap.min.css"
import App from './App';
import CourseListComponent from "./components/CourseEditor/CourseEditorComponent";
import * as serviceWorker from './serviceWorker';
import CourseEditorComponent from "./components/CourseEditor/CourseEditorComponent";
import {CourseManagerComponent} from "./components/CourseManagerComponent";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import fsm from "./reducers/fsm"
import widgetsReducer from "./reducers/widgetReducer";
import moduleReducer from "./reducers/moduleReducer";
import courseReducer from "./reducers/courseReducer";
import {lessonReducer} from "./reducers/lessonReducer";
// import "font-awesome/css/font-awesome.min.css";

const reducers = combineReducers({
                                     fsm, widgetsReducer, moduleReducer, courseReducer, lessonReducer
                                 })
const store = createStore(reducers)

ReactDOM.render(
    <Provider store={store}>
        <CourseManagerComponent/>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();