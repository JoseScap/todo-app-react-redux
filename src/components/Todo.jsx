import { useDispatch } from 'react-redux';
import { toggleDone } from './../redux/actions/todos';

const Todo = ({todo}) => {
  const dispatch = useDispatch();

  return (
    <div className="todo mt-3" onClick={() => dispatch(toggleDone(todo.id)) }>
      <input type="checkbox" checked={todo.done}/>
      <p className="m-0 mx-2">{todo.task}</p>
    </div>
  );
}

export default Todo;