import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(

  <App />,

  // React.createElement('button', {
  //   onClick: () => console.log('Click button')
  // }, 'Click me'),

  // <div>
  //   Приложение работает
  //   <button>Click</button>
  // </div>,
  document.getElementById('root')
);



// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <div>Приложение работает</div>
//   // <React.StrictMode>
//   //   <App />
//   // </React.StrictMode>
// );

