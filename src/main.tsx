import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createStore } from "redux";
import counter from "./reducers/index.tsx";
const root = createRoot(document.getElementById("root") as HTMLElement);
const store = createStore(counter);

const render = () =>
  root.render(
    <StrictMode>
      <App
        value={store.getState()} // getState : 현재 스토어에 있는 state 가져오기
        onIncrement={() => store.dispatch({ type: "INCREMENT" })} // dispatch
        onDecrement={() => store.dispatch({ type: "DECREMENT" })}
      />
    </StrictMode>
  );
render();
store.subscribe(render);
//  ^- subscribe(listener) action이 dispatch될 때마다 linster함수를 호출
//  -> action이 발생해서 store의 state가 바뀔 때마다 render함수를 호출해서 ui를 업데이트
