import * as React from 'react';
import { useStore, Provider, useSelector } from 'react-redux-chaos';

const initialState = { count: 0, name: 'lanyincao', address: 'shanghai' };

function reducer(state, action) {
  switch (action.type) {
    case 'increase': {
      return { ...state, count: state.count + action.payload };
    }

    case 'decrease': {
      return { ...state, count: state.count - action.payload };
    }

    case 'updateName': {
      return { ...state, name: action.payload };
    }

    case 'updateAddress': {
      return { ...state, address: action.payload };
    }
    default: {
      return state;
    }
  }
}

function App({ children }) {
  const store = useStore(reducer, initialState);
  return <Provider value={store}>{children}</Provider>;
}

function Count() {
  const { getState, dispatch } = useSelector(() => {
    console.log('render count selector');
    return ['count'];
  });

  const state: any = getState();
  return (
    <div>
      <div>count: {state.count}</div>
      <button onClick={() => dispatch({ type: 'increase', payload: 2 })}>
        increase
      </button>
      <button onClick={() => dispatch({ type: 'decrease', payload: 2 })}>
        decrease
      </button>
    </div>
  );
}

function Person() {
  const { getState, dispatch } = useSelector(() => {
    console.log('render person selector');
    return ['name', 'address'];
  });

  const state: any = getState();

  return (
    <div>
      <div>
        <span>name: {state.name}</span>
        <span style={{ marginLeft: 20 }}>address: {state.address}</span>
      </div>
      <div>
        <button
          onClick={() => dispatch({ type: 'updateName', payload: '牧云云' })}
        >
          updateName
        </button>
        <button
          onClick={() =>
            dispatch({ type: 'updateAddress', payload: 'hangzhou' })
          }
        >
          updateAddress
        </button>
      </div>
    </div>
  );
}

export default function Demo() {
  return (
    <App>
      <Count />
      <Person />
    </App>
  );
}
