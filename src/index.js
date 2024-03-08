// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import { Provider } from "react-redux";
// import store from "./store";
// import { BrowserRouter } from "react-router-dom";
// // import Contextprovider from "./Components/context/Contextprovider";

// ReactDOM.render(
//     <Provider store={store}>
//       <BrowserRouter>
//         <App />
//       </BrowserRouter>
//     </Provider>
// document.getElementById('root')
// );

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter } from "react-router-dom";
import Contextprovider from "./components/context/Contextprovider.js";
// import Contextprovider from "./Components/context/Contextprovider";

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element not found in the document.');
}

const root = ReactDOM.createRoot(rootElement);

root.render(
  <Contextprovider>
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
  </Contextprovider>
);