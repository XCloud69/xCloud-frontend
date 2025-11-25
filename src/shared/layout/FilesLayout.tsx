import { Outlet } from "react-router-dom";

function FilesLayout() {
  return (
    <div>
      <p> Navbar</p>
      <p>Sidebar</p>
      <Outlet />
    </div>
  );
}

export default FilesLayout;
