// import { createStore,applyMiddleware } from "redux";
// import  {thunk}  from 'redux-thunk';

// import {composeWithDevTools} from "redux-devtools-extension";
// import rootreducers from "./components/redux/actions/reducers/main";

// // const middleware = [thunk];

// const store = createStore(
//     rootreducers,
//     composeWithDevTools(applyMiddleware(thunk))
// );

// export default store;
// // import redux from "redux";
// // import {thunk} from 'redux-thunk';
// // import { composeWithDevTools } from 'redux-devtools-extension';
// import rootReducers from "./components/redux/actions/reducers/main";

// // const middleware = [thunk];

// export const store = redux.createStore(
//     rootReducers
   
// );

// export default store;
// // // composeWithDevTools(applyMiddleware(...middleware))
// import { createStore } from 'redux';

// // import thunk from "redux-thunk";
// // import {composeWithDevTools} from "redux-devtools-extension";
// import rootreducers from "./components/redux/reducers/main";


// // const middleware = [thunk];

//  const store = createStore(
//     rootreducers
//     // composeWithDevTools(applyMiddleware(...middleware))
// );
// export default store;

// store.js
// import { createStore } from 'redux';
// import { getProductsReducers } from './components/redux/reducers/Productreducer';
// // import thunk from 'redux-thunk';


// const store = createStore( getProductsReducers);

// export default store;

import { createStore,applyMiddleware } from "redux";
import {thunk} from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import rootreducers from "./components/redux/reducers/main";


const middleware = [thunk];

const store = createStore(
    rootreducers,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
