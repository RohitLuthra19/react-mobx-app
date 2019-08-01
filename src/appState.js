import { observable, action } from 'mobx';
import remotedev from 'mobx-remotedev';

const appState = observable({
  count: 0,
  increamentCount: action("Increment action", () => {
    appState.count += 1; 
  }),
  decreamentCount: action("Decrement action", () => {
    appState.count -= 1;
  })
});

//remotedev to see state in redux chrome extension
export default remotedev(appState);