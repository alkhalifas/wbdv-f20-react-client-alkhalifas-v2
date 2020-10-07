import React from "react";

const LessonTabsComponent = ({lessons}) =>

    <ul class="nav nav-tabs">
        <li class="nav-item">
            <a className="nav-link active" href="#">Lesson 1</a>
        </li>
        <li class="nav-item">
            <a className="nav-link " href="#">Lesson 2</a>
        </li>
        <li class="nav-item">
            <a className="nav-link " href="#">Lesson 3</a>
        </li>
        <li className="nav-item">
            <a className="nav-link " href="#">Lesson 4</a>
        </li>
        <li className="nav-item">
            <a className="nav-link " href="#">Lesson 5</a>
        </li>
        <li className="nav-item">
            <a className="nav-link " href="#">Lesson 6</a>
        </li>        <li className="nav-item">
        <a className="nav-link " href="#">+</a>
    </li>
    </ul>


export default LessonTabsComponent