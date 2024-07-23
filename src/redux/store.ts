import { legacy_createStore as createStore } from "redux";
import rootReducers from "./reducers/index";

const store = createStore(rootReducers);
export type RootState = ReturnType<typeof rootReducers>;

export default store;
