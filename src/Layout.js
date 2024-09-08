import { Outlet } from "react-router-dom";
import Banner from "./Banner";

export default function Layout() {
  return (
    <>
      <Banner />
      <div id="main-content">
        <Outlet />
      </div>
    </>
  );
}
