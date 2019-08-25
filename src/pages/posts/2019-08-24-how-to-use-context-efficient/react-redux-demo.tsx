import * as React from 'react';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';

// 一个简单的 reducer
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

const store = createStore(reducer, {
  count: 0,
  name: 'lanyincao',
  address: 'shanghai'
});
class App extends React.Component {
  render() {
    return <Provider store={store}>{this.props.children}</Provider>;
  }
}

function mapCountStateToProps(state) {
  console.log('mapCountStateToProps', state);
  const { count } = state;
  return { count };
}

class Count extends React.Component<any, any> {
  render() {
    const { dispatch } = this.props;
    console.log('render count');
    return (
      <div>
        <div>count: {this.props.count}</div>
        <button onClick={() => dispatch({ type: 'increase', payload: 2 })}>
          increase
        </button>
        <button onClick={() => dispatch({ type: 'decrease', payload: 2 })}>
          decrease
        </button>
      </div>
    );
  }
}

function mapPersonStateToProps(state) {
  console.log('mapPersonStateToProps', state);
  const { name, address } = state;
  return { name, address };
}

class Person extends React.Component<any> {
  render() {
    const { dispatch, name, address } = this.props;
    console.log('render person');
    return (
      <div>
        <div>
          <span>name: {name}</span>
          <span style={{ marginLeft: 20 }}>address: {address}</span>
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
}

// count
const ConnectCount = connect(mapCountStateToProps)(Count);
// person
const ConnectPerson = connect(mapPersonStateToProps)(Person);

export default function Demo() {
  return (
    <div>
      <App>
        <ConnectCount />
        <ConnectPerson />
      </App>
    </div>
  );
}
