import { createStore, applyMiddleware } from 'redux';
import loggerMiddleware from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';


const middleWareFuncs = applyMiddleware(loggerMiddleware, thunkMiddleware);

export * from './reducers/board';
export * from './reducers/activeTeam';
export * from './reducers/questionActive';
export * from './reducers/score';
export * from './reducers/teams';
export * from './reducers/currentQuestion';
export * from './reducers';

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), middleWareFuncs);
export default store;
