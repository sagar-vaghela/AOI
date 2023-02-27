import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
let enhancer = applyMiddleware(thunk);
if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { logger } = require(`redux-logger`);
    enhancer = applyMiddleware(thunk, logger);

}

// https://stackoverflow.com/questions/51503198/error-error-error-error-you-may-not-call-store-getstate-while-the-reducer

export const configureStore = () => {
    return createStore(rootReducer, composeEnhancers(enhancer));
}