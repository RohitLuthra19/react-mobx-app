import React from 'react';
import { observer } from 'mobx-react';

const Counter = observer(props => 
  (<div>{props.appState.count}
    <div>
      <button onClick={props.appState.increamentCount}>+</button>
      <button onClick={props.appState.decreamentCount}>-</button>
    </div>
  </div>));

export default Counter;