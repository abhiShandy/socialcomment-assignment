import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import UserProfile from './UserProfile';
import TopNav from './TopNav';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <UserProfile/>
  </React.StrictMode>,
  document.getElementById('user-profile')
);

ReactDOM.render(
  <React.StrictMode>
    <TopNav/>
  </React.StrictMode>,
  document.getElementById('top-nav')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
