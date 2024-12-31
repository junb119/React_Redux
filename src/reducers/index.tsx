import { combineReducers } from "redux"; //여러 개의 reducer를 하나의 reducer로 합쳐주는 함수를 import
import todos from "./todos";
import counter from "./counter";

const rootReducer = combineReducers({
  //combineReducers 함수를 사용하여 todos reducer와 counter reducer를 하나로 합침
  todos,
  counter,
});

export default rootReducer;

// RootState 타입을 정의합니다.
// ReturnType<typeof rootReducer>는 rootReducer 함수의 반환 타입을 추론하여 RootState 타입으로 설정합니다.
// 이 타입은 Redux 상태의 전체 구조를 나타냅니다.
export type RootState = ReturnType<typeof rootReducer>;
