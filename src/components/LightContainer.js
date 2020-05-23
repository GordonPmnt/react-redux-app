import React from 'react';
import { connect } from "react-redux";

const Light = ({ light }) => {
    return <div>{light}</div>
}

const mapStateToProps = state => ({
    light: state
});

const LightContainer = connect(mapStateToProps)(Light);

export default LightContainer;