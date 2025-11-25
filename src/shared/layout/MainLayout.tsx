import { Outlet } from 'react-router-dom'
import MainNavbar from '../ui/MainNavbar';

function MainLayout() {
  return (
    <div>
        <MainNavbar />
        <Outlet />
    </div>
  )
}

export default MainLayout;