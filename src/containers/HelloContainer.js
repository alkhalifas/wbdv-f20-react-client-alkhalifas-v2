import React from "react";
import {connect} from "react-redux";
import Hello from "../components/Hello.js"

const stateMapper = state =>  ({
    message: state.communications.msg
});

export default connect(stateMapper)(Hello)
// Connect wants two arguments: the state and the component
