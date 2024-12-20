import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux'
// import { getState } from 'state/store';
import { decrement, increment } from 'state/counterSlice';
Home.propTypes = {
    
};

function Home(props) {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <div>
            HOME
            <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
        </div>
    );
}

export default Home;