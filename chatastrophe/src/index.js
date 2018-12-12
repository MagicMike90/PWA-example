import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    document.getElementById('root')
  );
// if (module.hot) {
//   module.hot.accept("./components/App.js", function() {
//     console.log("Accepting the updated printMe module!");
//   });
// }
// if (module.hot) {
//   module.hot.accept('./App', () => {
//     const NextApp = require('./App').default;
//     ReactDOM.render(
//      <App/>,
//      document.getElementById('root')
//     );
//   });
// }
