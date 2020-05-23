import React from 'react';
import { connect } from "react-redux";

const Light = ({ light, dispatch }) => {
    return (
        <div>
            <p>{light}</p>
            <button
                onClick={() => dispatch({ type: 'SWITCH' })}
            >
                switch
            </button>
        </div>
    )
}

const mapStateToProps = state => ({
    light: state
});

const LightContainer = connect(mapStateToProps)(Light);
export default LightContainer;