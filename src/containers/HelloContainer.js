import React from "react";
import {connect} from "react-redux";
import HelloComponent from "../components/HelloComponent.js"

const stateMapper = state =>  ({
    message: state.communications.msg
});

export default connect(stateMapper)(HelloComponent)
// Connect wants two arguments: the state and the component
