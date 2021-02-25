import { useSelector, useDispatch } from 'react-redux';
import { deleteAll } from './../redux/actions/todos';

const DeleteAll = () => {
  const dispatch = useDispatch();

  const tab = useSelector(state => state.tabs.tab);
  
  return (
    <div className="delete-all mt-2">
      {
        tab === 3 && (
          <div className="container">
            <div className="wrapper">
              <button onClick={() => dispatch(deleteAll())}>
                <span class="material-icons">
                  delete_outline
                </span>
                delete all
              </button>
            </div>
          </div>
        )
      }
    </div>
  );
}

export default DeleteAll;