import { Fragment, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "./../redux/actions/todos";

const Input = () => {
  const dispatch = useDispatch();

  const tab = useSelector((state) => state.tabs.tab);

  const [todo, setTodo] = useState(window.localStorage.getItem("todo"));

  const handleChangeTodo = (event) => {
    setTodo(event.target.value);
  };

  const handleAddTodo = () => {
    if (todo.length > 0) {
      dispatch(addTodo(todo))
      setTodo("");
    }
  }

  return tab !== 3 ? (
    <div className="input">
      <div className="container my-3">
        <div className="input-wrapper">
          <input
            type="text"
            placeholder="E.g. Do my homework."
            value={todo}
            onChange={handleChangeTodo}
          />
          <button onClick={() => handleAddTodo()}>Add</button>
        </div>
      </div>
    </div>
  ) : (
    <Fragment></Fragment>
  );
};

export default Input;
