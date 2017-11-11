import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import causes from './reducers/causes';

const enhancers = [];
if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.devToolsExtension;

    if (typeof devToolsExtension === 'function') {
        enhancers.push(devToolsExtension())
    }
}

const reducers = combineReducers({
    causes
});

function configureStore(initialState = {}) {
    const store = createStore(
        reducers,
        initialState,
        compose(
            applyMiddleware(thunk),
            ...enhancers
        )
    );
    return store;
}

export const store = configureStore();
