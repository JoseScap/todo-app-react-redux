import { useSelector } from 'react-redux';
import Todo from './Todo';

const Todos = () => {
  const todos = useSelector(state => state.todos.todos);
  const tab = useSelector(state => state.tabs.tab);

  return (
    <section className="todos">
      <div className="container">
        {
          todos.map((todo, i) => ( tab === 1 && (
            <Todo todo={todo} key={i}/>
          )))
        }
        {
          todos.map((todo, i) => (tab === 2 && !todo.done && (
            <Todo todo={todo} key={i}/>
          )))
        }
        {
          todos.map((todo, i) => (tab === 3 && todo.done && (
            <Todo todo={todo} key={i}/>
          )))
        }
      </div>
    </section>
  );
}

export default Todos;