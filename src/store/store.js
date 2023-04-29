import rootReducer from "../reducers/reducers";

import { createStore } from "redux";

let myStore = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default myStore; 