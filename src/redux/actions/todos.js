let id = 2;

export function toggleDone(id) {
  return { type: 'TOGGLE_DONE', payload: id }
}