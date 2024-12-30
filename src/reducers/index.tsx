import { combineReducers } from "redux"; //여러 개의 reducer를 하나의 reducer로 합쳐주는 함수를 import
import todos from "./todos";
import counter from "./counter";

const rootReducer = combineReducers({
  //combineReducers 함수를 사용하여 todos reducer와 counter reducer를 하나로 합침
  todos,
  counter,
});

export default rootReducer;
