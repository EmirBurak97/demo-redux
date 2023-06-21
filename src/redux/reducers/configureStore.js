import { legacy_createStore,applyMiddleware } from "redux";
import rootReducers from ".";
import thunk from "redux-thunk";

export default function configureStore(){
    return legacy_createStore(rootReducers,applyMiddleware(thunk))
}