import { useSelector, useDispatch } from 'react-redux';
import { setTab } from './../redux/actions/tabs';

const Header = () => {
  const dispatch = useDispatch();

  const tab = useSelector(state => state.tabs.tab);

  return (
    <header className="header">
      <div className="container">
        <h1 className="title text-center mt-4">#todo</h1>
        <nav className="tabs mt-5">
          <button className={ tab === 1 ? "active" : ""} onClick={() => dispatch(setTab(1))}>All</button>
          <button className={ tab === 2 ? "active" : ""} onClick={() => dispatch(setTab(2))}>To do</button>
          <button className={ tab === 3 ? "active" : ""} onClick={() => dispatch(setTab(3))}>Done</button>
        </nav>
      </div>
    </header>
  );
}

export default Header;