import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import UserForm from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<UserForm />, document.getElementById('root'));
registerServiceWorker();
