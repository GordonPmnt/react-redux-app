import React from 'react';
import { connect } from "react-redux";

const Counter = ({ counter, dispatch }) => {
    return (
        <div>
            <p>{counter}</p>
            <button onClick={() => dispatch({ type: 'REMOVE_TEN' })}> -10 </button>
            <button onClick={() => dispatch({ type: 'REMOVE' })}> -1 </button>
            <button onClick={() => dispatch({ type: 'RESET' })}> RESET </button>
            <button onClick={() => dispatch({ type: 'ADD' })}> +1 </button>
            <button onClick={() => dispatch({ type: 'ADD_TEN' })}> +10 </button>
        </div>
    )
}

const mapStateToProps = state => ({
    counter: state
});

const CounterContainer = connect(mapStateToProps)(Counter);
export default CounterContainer;