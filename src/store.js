import { legacy_createStore as createStore,applyMiddleware, compose} from "redux";

import createSagaMiddleware from 'redux-saga'
import reducer from "./slices/Slices.js";
import rootSaga from "./sagas/saga.js";

const sagaMiddleware=createSagaMiddleware()
const store = compose(
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )(createStore)(reducer);

console.log(store.getState()) 

sagaMiddleware.run(rootSaga)

export default store

