import { Outlet } from 'react-router-dom';

import Navbar from '../component/Navbar';
const SharedLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
export default SharedLayout;