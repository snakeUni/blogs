# setXXXX vs setState

这篇文章主要是为了分析 `Hooks` 中 `setXXX` 和 class 中 `setState` 的一些不同之处， [上篇文章](https://uni-blog.netlify.com/posts/2019-05-28/hooks-vs-class/) 分析了 `state` 的部分不同，以及各自调用触发的 `render` 次数的分析， 同步和异步状态下的区别。要记住的是在函数式组件中，`setXXX` 会进行 `Object.is` 进行比较。

## 原因

为什么写这篇文章呢？因为昨天 `原型链` 在写 `form` 的时候遇到了一些问题， 至于为什么又是 `form` 我就不多做描述了。这是我和 `原型链` 的对话:

`原型链`: 蓝银草为什么我调用 `setFieldValue` 设置的值不正确呢？
`我`：你是怎么调用的呢？
`原型链`: 我是连续调用 `setFieldValue` 两次，结果都是最后一次生效，但是调用 `setValues` 就是好的。
`我`：不可能吧，我看下你的实现，看了下原型链的演示，原来如此，我知道了为什么只显示最后一个了，这是 `React` 函数组件导致的这个问题。

[具体栗子点击这里](https://codesandbox.io/s/funny-mclean-6lru4)

`hook` 代码

```jsx
export default function Demo() {
  const [state, setState] = useState({
    name: "牧老师",
    hobby: "唱, 跳, rap"
  });

  useEffect(() => {
    console.log("update hook");
  });

  const handleClick = () => {
    setState({ ...state, name: "牧云云" });
    console.log("hook state change name sync", state);
    setState({ ...state, hobby: "coding" });
    console.log("hook state change hobby sync", state);
  };

  const handleClick1 = () => {
    setTimeout(() => {
      setState({ ...state, name: "牧云云" });
      console.log("hook state change name async", state);
      setState({ ...state, hobby: "coding" });
      console.log("hook state change name async", state);
    });
  };

  const handleClick2 = () => {
    setState(preState => {
      console.log("pre hook sync:", preState);
      return { ...preState, name: "牧云云" };
    });
    setState(preState => {
      console.log("pre hook sync:", preState);
      return { ...preState, hobby: "coding" };
    });
  };

  const handleClick3 = () => {
    setTimeout(() => {
      setState(preState => {
        console.log("pre hook async:", preState);
        return { ...preState, name: "牧云云" };
      });
      setState(preState => {
        console.log("pre hook async:", preState);
        return { ...preState, hobby: "coding" };
      });
    });
  };

  console.log("render hook", state);

  return (
    <div>
      <h1>Hooks</h1>
      name:{state.name}, hobby:{state.hobby}
      <div>
        <button onClick={handleClick}>set name and hobby sync</button>
        <button onClick={handleClick1} style={{ marginLeft: 10 }}>
          set name and hobby async
        </button>
        <button onClick={handleClick2} style={{ marginLeft: 10 }}>
          set name and hobby by callback
        </button>
        <button onClick={handleClick3} style={{ marginLeft: 10 }}>
          set name and hobby by callback async
        </button>
      </div>
    </div>
  );
}
```

在代码里点击按钮，然后设置 `name` 和 `hobby`, 可能有人会问这不是两个属性值一起设置嘛，为什么不`setState({ ...state, name: '牧云云', hobby: 'coding' })`, 因为当时 `setFieldValue` 的用法是 `setFieldValue(key, value)`, 所以就调用了多次。此时点击 `set name and hobby sync` 按钮，会输出什么呢？

![cc37e062](https://user-images.githubusercontent.com/17973020/59817731-a3221800-9353-11e9-8a15-88bdbc67bcdd.png)

可以看到在事件中输出的都是上一次的 `state`, 然后 `render` 了一次，为什么 `render` 了一次可以看我[上篇文章](https://uni-blog.netlify.com/posts/2019-05-28/hooks-vs-class/) 中的链接，这里我们先跳过这里，看 `render 部分`的输出

`handleClick` 函数

```jsx
const handleClick = () => {
  setState({ ...state, name: "牧云云" });
  console.log("hook state change name sync", state);
  setState({ ...state, hobby: "coding" });
  console.log("hook state change hobby sync", state);
};
```

可以看出只有第二个生效了，直接看这个应该很容易知道，在调用第一次 `setState` 的时候，此时的 `name` 是 `牧云云`, 但是在设置第二个的时候， 此时的 `state` 还是上一次的 `name: 牧老师` 这个状态，所以在合并的过程，剩下的就是最后一次的 `setState` 的内容，那么输出的就是只有 `hobby: coding` 生效。那么在异步过程中呢？或者是 `非 React 合成事件和生命周期函数中`, 再次点击 `set name and hobby async`, 那么输出又是什么呢？

`handleClick1`

```jsx
const handleClick1 = () => {
  setTimeout(() => {
    setState({ ...state, name: "牧云云" });
    console.log("hook state change name async", state);
    setState({ ...state, hobby: "coding" });
    console.log("hook state change name async", state);
    // setTimeout(() => {
    //   setState({ ...state, hobby: "coding" });
    //   console.log("hook state change name async", state);
    // }, 3000);
  });
};
```

![55a12b25](https://user-images.githubusercontent.com/17973020/59817757-b8974200-9353-11e9-9dda-b211de81e24d.png)

可以看到 `render` 了两次，生命周期函数也走了两次，这个不是我们今天关心的重点，今天关心的重点在 `state` 的更新上, 第一次更新的时候 `name` 发生了变更，但是在第二次的时候，拿到的 `state` 仍然是之前的 `name: 牧老师`， 所以第一次设置的 `name: 牧云云` 被覆盖了，页面上基本看不出来 `name` 变化的过程, 那我们把第二个 `setState` 放到 `setTimeout` 中呢， 此时页面的变化过程是很容易看出来的

```jsx
const handleClick1 = () => {
  setTimeout(() => {
    setState({ ...state, name: "牧云云" });
    console.log("hook state change name async", state);
    // setState({ ...state, hobby: "coding" });
    // console.log("hook state change name async", state);
    setTimeout(() => {
      setState({ ...state, hobby: "coding" });
      console.log("hook state change name async", state);
    }, 3000);
  });
};
```

这样修改的话， 页面的变化过程就很清晰.这个可以自行查看例子.

#### useCallback

`setState` 在 hooks 中和 class 中都是支持回调的方式的，那么不妨尝试一下回调的方式

`handleClick2` 函数

```jsx
const handleClick2 = () => {
  setState(preState => {
    console.log("pre hook sync:", preState);
    return { ...preState, name: "牧云云" };
  });
  setState(preState => {
    console.log("pre hook sync:", preState);
    return { ...preState, hobby: "coding" };
  });
};
```

那么输出的又是什么呢？

![42e8111c](https://user-images.githubusercontent.com/17973020/59817787-d5337a00-9353-11e9-88e1-e2306f65b8cf.png)

和我们预期的是一致的，`name` 和 `hobby` 都发生了更新, 这是为什么呢？单独看代码可以知道在执行函数的时候都会把上一次的 `state` 作为参数传递给下个函数使用，所以在调用的时候，每次 `preState` 都是上一次最新的 `state` 所以能拿到最新的。那么在异步中表现又是什么样的呢？
执行异步的代码

`handleClick3` 函数

```jsx
const handleClick3 = () => {
  setTimeout(() => {
    setState(preState => {
      console.log("pre hook async:", preState);
      return { ...preState, name: "牧云云" };
    });
    setState(preState => {
      console.log("pre hook async:", preState);
      return { ...preState, hobby: "coding" };
    });
  });
};
```

![1bf0c6c2](https://user-images.githubusercontent.com/17973020/59817797-e2506900-9353-11e9-8aac-c71f58ceb4e6.png)

表现的是一致的。在 class 中表现的是什么样的呢 ?

### Class

```jsx
export default class Demo1 extends React.Component {
  state = {
    name: "牧老师",
    hobby: "唱, 跳, rap"
  };

  componentDidUpdate() {
    console.log("update class");
  }

  handleClick = () => {
    this.setState({ name: "牧云云" });
    this.setState({ hobby: "coding" });
  };
  render() {
    console.log("render class", this.state);
    return (
      <div>
        <h1>Class</h1>
        name:{this.state.name}, hobby:{this.state.hobby}
        <div>
          <button onClick={this.handleClick}>set name and hobby</button>
        </div>
      </div>
    );
  }
}
```

点击按钮看一下输出结果

![c6f6e146](https://user-images.githubusercontent.com/17973020/59817816-f5fbcf80-9353-11e9-8d37-9aa3820dacbb.png)

`class` 中表现的是正常的，因为在 class 中， state 是挂在 `this` 上始终这个 state 都是相同的一个引用，所以在第一次 `setState` 后，此时的 `name` 修改为了 `牧云云`， 再一次调用 `setState` 的时候，内部拿到的 `this.state` 已经是最新的 `name` 了，所以在设置 `hobby` 的时候已经是最新的了。

看下 `updateReducer`

```jsx
function updateReducer(reducer, initialArg, init) {
  var hook = updateWorkInProgressHook();
  var queue = hook.queue;
  !(queue !== null) ? invariant(false, 'Should have a queue. This is likely a bug in React. Please file an issue.') : void 0;

  queue.lastRenderedReducer = reducer;

  if (numberOfReRenders > 0) {
    // This is a re-render. Apply the new render phase updates to the previous
    var _dispatch = queue.dispatch;
    if (renderPhaseUpdates !== null) {
      // Render phase updates are stored in a map of queue -> linked list
      ...省略部分
    return [hook.memoizedState, _dispatch];
  }

  // The last update in the entire queue
  var last = queue.last;
  // The last update that is part of the base state.
  var baseUpdate = hook.baseUpdate;
  var baseState = hook.baseState;

  // Find the first unprocessed update.
  var first = void 0;
  if (baseUpdate !== null) {
    if (last !== null) {
      // For the first update, the queue is a circular linked list where
      // `queue.last.next = queue.first`. Once the first update commits, and
      // the `baseUpdate` is no longer empty, we can unravel the list.
      last.next = null;
    }
    first = baseUpdate.next;
  } else {
    first = last !== null ? last.next : null;
  }
  if (first !== null) {
    var _newState = baseState;
    var newBaseState = null;
    var newBaseUpdate = null;
    var prevUpdate = baseUpdate;
    var _update = first;
    var didSkip = false;
    do {
      var updateExpirationTime = _update.expirationTime;
      if (updateExpirationTime < renderExpirationTime) {
        // Priority is insufficient. Skip this update. If this is the first
        // skipped update, the previous update/state is the new base
        // update/state.
        if (!didSkip) {
          didSkip = true;
          newBaseUpdate = prevUpdate;
          newBaseState = _newState;
        }
        // Update the remaining priority in the queue.
        if (updateExpirationTime > remainingExpirationTime) {
          remainingExpirationTime = updateExpirationTime;
        }
      } else {
        // Process this update.
        if (_update.eagerReducer === reducer) {
          // If this update was processed eagerly, and its reducer matches the
          // current reducer, we can use the eagerly computed state.
          _newState = _update.eagerState;
        } else {
          var _action2 = _update.action;
          _newState = reducer(_newState, _action2);
        }
      }
      prevUpdate = _update;
      _update = _update.next;
    } while (_update !== null && _update !== first);

    if (!didSkip) {
      newBaseUpdate = prevUpdate;
      newBaseState = _newState;
    }

    // Mark that the fiber performed work, but only if the new state is
    // different from the current state.
    if (!is(_newState, hook.memoizedState)) {
      markWorkInProgressReceivedUpdate();
    }

    hook.memoizedState = _newState;
    hook.baseUpdate = newBaseUpdate;
    hook.baseState = newBaseState;

    queue.lastRenderedState = _newState;
  }

  var dispatch = queue.dispatch;
  return [hook.memoizedState, dispatch];
}
```

![ddda387a](https://user-images.githubusercontent.com/17973020/59817874-23e11400-9354-11e9-8f56-bf6995fc93e3.jpg)

关注这块代码

![8764128b](https://user-images.githubusercontent.com/17973020/59817900-38bda780-9354-11e9-8769-0d2e3d62336d.jpg)

```jsx
if (_update.eagerReducer === reducer) {
  // If this update was processed eagerly, and its reducer matches the
  // current reducer, we can use the eagerly computed state.
  _newState = _update.eagerState;
} else {
  var _action2 = _update.action;
  _newState = reducer(_newState, _action2);
}
```

这个 `reducer` 是什么呢？

```jsx
function updateState(initialState) {
  return updateReducer(basicStateReducer, initialState);
}

function basicStateReducer(state, action) {
  return typeof action === "function" ? action(state) : action;
}
```

所以这个 `reducer` 就是 `basicStateReducer`, 会进行判断，如果是函数就执行，如果不是函数就直接返回这个 `state`. `_update.action` 存储的就是`setXX` 的参数，所以在传递的不是函数的时候直接就会返回 `_action2`, 否则就会返回 `_action2(_newState)` 拿到最新的值.

那么为什么 `传递进去的 State` 不是最新的呢？ 可以参考 [How Are Function Components Different from Classes?](https://overreacted.io/how-are-function-components-different-from-classes/) `Dan` 在这篇文章里面详细说明了，每次 `render` 都是新的函数.

## 总结

类组件中， `setState` 会自动进行值的合并，所以可以单独设置一个值，但是在 `hooks` 中在调用 `setXXX` 的时候必须要设置全部的值，并且由于函数闭包的特性，调用多次 `setXXXX` 进行对象结构赋值的时候，拿到的 `state` 始终是之前的 `state`， 如果要想获取到最新的值，可以使用 `setXXX(callback)` 的方式拿到最新的值.
