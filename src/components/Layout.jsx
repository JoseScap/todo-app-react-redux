import Header from './Header';
import Input from './Input';
import Todos from './Todos';
import DeleteAll from './DeleteAll';
import { Fragment } from 'react';

const Layout = () => {
  return (
    <Fragment>
      <Header />
      <Input />
      <Todos />
      <DeleteAll />
    </Fragment>
  );
}

export default Layout;