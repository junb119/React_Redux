// enum은 열거형을 정의하는 키워드입니다. 열거형은 일련의 상수를 정의할 때 사용합니다.
enum ActionType {
  ADD_TODO = "ADD_TODO",
  DELETE_TODO = "DELETE_TODO",
}

// interface는 객체의 구조를 정의하는 키워드입니다. 이 경우 Action이라는 객체의 구조를 정의하고 있습니다.
interface Action {
  // Action 객체에는 type과 text라는 두 개의 속성이 있습니다.
  // type은 ActionType enum의 값 중 하나여야 합니다.
  type: ActionType;
  // text는 문자열이어야 합니다.
  text: string;
}


const todos = (state = [], action: Action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.text];
    default:
      return state;
  }
};

export default todos;
