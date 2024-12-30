import { combineReducers } from "redux";
import Reducer from "./Reducer";

const rootReducer = combineReducers({
    reducer : Reducer
})

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;