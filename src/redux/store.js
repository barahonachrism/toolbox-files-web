import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import fileReducer from './fileDucks';

const rootReducer = combineReducers({
    files: fileReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

//Almacenamiento de estados de los pokemones
export default function generateStore(){
    const store =  createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));
    return store;
}