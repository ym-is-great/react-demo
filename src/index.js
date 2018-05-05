import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import hljs from 'highlight.js'
import 'highlight.js/styles/github.css'

hljs.initHighlightingOnLoad()

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
