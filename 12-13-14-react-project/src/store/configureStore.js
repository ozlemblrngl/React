import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './rootReducer';

export function configureStore() {
  const middleware = []; // Gerekirse middleware'leri buraya ekleyin

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middleware))
  );

  return store;
}
