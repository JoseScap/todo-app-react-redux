import Header from './Header';
import Input from './Input';
import Todos from './Todos';
import { Fragment } from 'react';

const Layout = () => {
  return (
    <Fragment>
      <Header />
      <Input />
      <Todos />
    </Fragment>
  );
}

export default Layout;