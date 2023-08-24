import { Link, Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const RootLayout = () => {
  return (
    <>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col ">
          <Navbar />
          <Outlet />
          <Footer />
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" className="drawer-overlay " />
          <ul className="menu p-4 w-80 h-full bg-base-200">
            <li>
              <Link
                to="/"
                className="btn btn-ghost normal-case text-lg hidden sm:flex"
              >
                หน้าแรก
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="btn btn-ghost normal-case text-lg hidden sm:flex"
              >
                เกี่ยวกับ
              </Link>
            </li>

            <li>
              <Link
                to="/services"
                className="btn btn-ghost normal-case text-lg hidden sm:flex"
              >
                บริการของเรา
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default RootLayout;
