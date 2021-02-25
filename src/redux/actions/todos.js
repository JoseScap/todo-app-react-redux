let id = 2;

export function addTodo(task) {
  return { type: 'ADD_TODO', payload: { task, done: false, id: ++id }}
}

export function toggleDone(id) {
  return { type: 'TOGGLE_DONE', payload: id }
}

export function deleteTodo(id) {
  return { type: 'DELETE_TODO', payload: id }
}

export function deleteAll() {
  return { type: 'DELETE_ALL' }
}