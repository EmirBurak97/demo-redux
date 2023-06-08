import { legacy_createStore } from "redux";
import rootReducers from ".";

export default function configureStore(){
    return legacy_createStore(rootReducers)
}