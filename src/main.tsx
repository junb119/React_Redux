import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import rootReducer from "./reducers/index.tsx";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
const root = createRoot(document.getElementById("root") as HTMLElement);
const loggerMiddleware = (store: any) => (next: any) => (action: any) => {
  console.log("store", store);
  console.log("action", action);
  next(action);
};

// middleware: dispatch가 발생한 후, reducer에 도달하기 전 시점에 간섭하여 액션을 처리하거나 수정할 수 있는 중간 전처리기
const middleware = applyMiddleware(loggerMiddleware);
const store = createStore(rootReducer, middleware);
const render = () =>
  root.render(
    <StrictMode>
      {/* 1. Redux Store는 중앙 상태 저장소로, 앱 전체의 상태를 관리합니다.
          2. <Provider>는 React와 Redux를 연결하는 다리 역할을 합니다.
          3. Redux Store를 <Provider>로 감싸면, 모든 하위 컴포넌트에서 Store에 접근       가능합니다.
          4. React의 Context API를 사용해 Store를 애플리케이션 전역으로 전달합니다.
          5. 하위 컴포넌트에서 Redux Hooks(useSelector, useDispatch)를 사용해 상태를  읽거나 업데이트할 수 있습니다.
          6. <Provider>는 일반적으로 애플리케이션의 최상위에서 한 번만 사용합니다. */}
      <Provider store={store}>
        <App
          value={store.getState()} // getState : 현재 스토어에 있는 state 가져오기
          onIncrement={() => store.dispatch({ type: "INCREMENT" })} // dispatch
          onDecrement={() => store.dispatch({ type: "DECREMENT" })}
        />
      </Provider>
    </StrictMode>
  );
render();
store.subscribe(render);
//  ^- subscribe(listener) action이 dispatch될 때마다 linster함수를 호출
//  -> action이 발생해서 store의 state가 바뀔 때마다 render함수를 호출해서 ui를 업데이트
