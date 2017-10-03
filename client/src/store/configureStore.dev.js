import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger'
import reducers from '../reducers';

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware, createLogger()),
  );

  return {
    ...store,
    runSaga: sagaMiddleware.run,
  };
};

export default configureStore;
