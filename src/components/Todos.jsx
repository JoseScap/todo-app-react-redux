import { useSelector } from 'react-redux';
import Todo from './Todo';

const Todos = () => {
  const todos = useSelector(state => state.todos.todos);

  return (
    <section className="todos">
      <div className="container">
        {
          todos.map((todo, i) => (
            <Todo todo={todo} key={i}/>
          ))
        }
      </div>
    </section>
  );
}

export default Todos;