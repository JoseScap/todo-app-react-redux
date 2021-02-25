let id = 2;

export function toggleDone(id) {
  return { type: 'TOGGLE_DONE', payload: id }
}

export function deleteTodo(id) {
  return { type: 'DELETE_TODO', payload: id }
}