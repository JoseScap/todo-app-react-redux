const initialState = {
  todos: [
    {
      task: "Learn about redux on react",
      done: false,
      id: 1
    },
    {
      task: "Read about functional and class components",
      done: true,
      id: 2
    }
  ]
};

function tasks(state = initialState, action = null) {
  switch (action.type) {
    case 'TOGGLE_DONE':
      let index = state.todos.findIndex(e => e.id === action.payload);

      let todos = [...state.todos];

      todos[index].done = !todos[index].done

      return {
        ...state,
        todos
      };
    default:
      return state;
  }
}

export default tasks;