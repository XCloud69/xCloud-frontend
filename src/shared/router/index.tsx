import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import FilesLayout from "../layout/FilesLayout";
import LandingPage from "@/pages/Landing";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<h1>Home</h1>} />
        {/* /contact */}
        <Route path="file" element={<h1>Contact</h1>} />
        <Route path="meeting" element={<h1>Meeting</h1>} />
        <Route path="gmail" element={<h1>Gmail</h1>} />
        <Route path="calendar" element={<h1>Calendar</h1>} />
      </Route>
      <Route path="/learn" element={<FilesLayout />}>
        <Route index element={<h1>Learn</h1>} />
        {/* /learn/think */}
        <Route path="think" element={<h1>Think</h1>} />
        <Route path="install" element={<h1>Install</h1>} />
      </Route>
    </>
  )
);
