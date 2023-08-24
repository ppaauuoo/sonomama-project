import { Link, Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FAB from "./FAB";
import Chatbot from "./Chatbot";

const RootLayout = () => {
  return (
    <>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <Navbar />
          <Chatbot />
          <div className="flex min-h-screen">
            <Outlet />
          </div>


          <Footer />
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" className="drawer-overlay " />
          <ul className="menu p-4 w-80 h-full bg-base-200">
            <img className="object-contain h-40 mx-10 my-5" src="/Logo.png" />

            <li>
              <Link to="/" className="btn btn-ghost normal-case text-lg">
                หน้าแรก
              </Link>
            </li>
            <li>
              <Link to="/about" className="btn btn-ghost normal-case text-lg">
                เกี่ยวกับ
              </Link>
            </li>

            <li>
              <Link
                to="/services"
                className="btn btn-ghost normal-case text-lg"
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
