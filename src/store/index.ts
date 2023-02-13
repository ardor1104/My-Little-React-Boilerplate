import createSagaMiddleware from 'redux-saga';
import { configureStore, combineReducers } from '@reduxjs/toolkit';

import rootReducer from 'store/reducer';
import rootSaga from 'store/saga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: combineReducers(rootReducer),
  middleware: [sagaMiddleware],
});

for (const saga of Object.values(rootSaga)) {
  sagaMiddleware.run(saga);
}

export default store;
