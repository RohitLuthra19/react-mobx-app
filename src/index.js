import React from 'react';
import ReactDOM from 'react-dom';

import { configure } from 'mobx';


import './index.css';
import appState from './appState';
import Counter from './Counter';

configure({ enforceActions: 'observed' });

ReactDOM.render(<Counter appState={appState} />, document.getElementById('root'));