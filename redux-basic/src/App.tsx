import { useEffect, useState } from "react";
import "./App.css";
import counter from "./reducers/counter";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./reducers";
import axios from "axios";
import { Post } from "./reducers/posts";
import { fetchPosts } from "./actions/posts";
type Props = {
  value: any;
  onIncrement: () => void;
  onDecrement: () => void;
};
function App({ value, onIncrement, onDecrement }: Props) {
  const dispatch = useDispatch();
  const counter = useSelector((state: RootState) => state.counter);
  const todos: string[] = useSelector((state: RootState) => state.todos);
  const posts: Post[] = useSelector((state: RootState) => state.posts);
  const [todoValue, setTodoValue] = useState("");

  useEffect(() => {
    dispatch(fetchPosts());
    // action은 객체이어야하기 때문에 dispatch할 때 action을 함수(fetchPosts)로 전달하면 에러가 난다. redux-thunk를 통해서 이를 해결
  }, [dispatch]);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoValue(e.target.value);
  };
  const addTodo = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // store.dispatch({type: 'ADD_TODO', text: todoValue})
    dispatch({ type: "ADD_TODO", text: todoValue });
    setTodoValue("");
  };

  return (
    <div>
      Clicked :{counter} times <button onClick={onIncrement}>+</button>{" "}
      <button onClick={onDecrement}>-</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      <form onSubmit={addTodo}>
        <input type="text" value={todoValue} onChange={handleChange} />
        <input type="submit" />
      </form>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
