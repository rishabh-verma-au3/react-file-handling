import React,{lazy,Suspense} from 'react';
import ReactDOM from 'react-dom';

import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'
import {store} from "./store/store"
// import App from "./App"
const App = lazy(()=>import("./App"))


ReactDOM.render(
 
  <React.StrictMode>
    <Provider store={store}>
    <Suspense fallback={<div style={{"backdropFilter":"revert","height":"100vh"}}>Hii</div>}>
    <Router>
    <App />
    </Router>
    {/* <Spinner/> */}
    </Suspense>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



// https://blog.bitsrc.io/5-methods-to-persisting-state-between-page-reloads-in-react-8fc9abd3fa2f