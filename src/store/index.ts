// store/configureStore.ts
import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";

import { rootReducer } from "@/reducers/root.reducer"; // Import your root reducer
import rootSaga from "@/sagas/root.saga"; // Import your root saga

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const composedEnhancers = composeWithDevTools(applyMiddleware(...middlewares));

const store = createStore(combineReducers(rootReducer), composedEnhancers);

sagaMiddleware.run(rootSaga);

export default store;
