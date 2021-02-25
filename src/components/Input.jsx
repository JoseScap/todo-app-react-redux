import { Fragment, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "./../redux/actions/todos";

const Input = () => {
  const dispatch = useDispatch();

  const tab = useSelector((state) => state.tabs.tab);

  const [todo, setTodo] = useState("");

  const handleChangeTodo = (event) => {
    setTodo(event.target.value);
  };

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
          <button onClick={() => dispatch(addTodo(todo))}>Add</button>
        </div>
      </div>
    </div>
  ) : (
    <Fragment></Fragment>
  );
};

export default Input;
