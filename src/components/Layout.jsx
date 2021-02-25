import Header from './Header';
import Todos from './Todos';
import { Fragment } from 'react';

const Layout = () => {
  return (
    <Fragment>
      <Header />
      <Todos />
    </Fragment>
  );
}

export default Layout;