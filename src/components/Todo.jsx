import { useDispatch } from 'react-redux';
import { toggleDone, deleteTodo } from './../redux/actions/todos';

const Todo = ({todo, tab}) => {
  const dispatch = useDispatch();

  return (
    <div className="todo mt-3">
      <div className="left" onClick={() => dispatch(toggleDone(todo.id)) }>
        <input type="checkbox" checked={todo.done}/>
        <p className={todo.done ? "m-0 mx-2 done" : "m-0 mx-2"}>{todo.task}</p>
      </div>
      {
        todo.done && tab === 3 && (
          <div className="right">
            <button onClick={() => dispatch(deleteTodo(todo.id))}>
              <span class="material-icons">
                delete_outline
              </span>
            </button>
          </div>
        )
      }
    </div>
  );
}

export default Todo;