import { Link } from "react-router-dom";

const items = ["dashboard", "back"];

// import { useAuth0 } from "@auth0/auth0-react";

// const LoginButton = () => {
//   const { loginWithRedirect } = useAuth0();

//   return (
//     <button
//       className="btn btn-ghost normal-case text-lg"
//       onClick={() => loginWithRedirect()}
//     >
//       เข้าสู่ระบบ
//     </button>
//   );
// };

// const LogoutButton = () => {
//   const { logout } = useAuth0();

//   return (
//     <button
//       className="btn btn-ghost normal-case text-lg"
//       onClick={() =>
//         logout({ logoutParams: { returnTo: window.location.origin } })
//       }
//     >
//       ออกจากระบบ
//     </button>
//   );
// };

function Navbar() {
  // const { isAuthenticated } = useAuth0();

  return (
    <div className="navbar bg-base-100 p-2 shadow-xl">
      <div className="flex-none md:hidden">
        <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-6 h-6 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </label>
      </div>

      <div className="navbar-start">
        <img
          className="object-contain h-40 mx-10 my-5 hidden md:inline-block"
          src="/Banner.png"
        />
      </div>
      <div className="navbar-center">
        {/* <div className="dropdown dropdown-hover hidden sm:flex">
          <label tabIndex={0} className="btn btn-ghost normal-case text-lg">
            Hover <i className="fa-solid fa-caret-down" />
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-red-500 rounded-box w-52 text-lg "
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div> */}
      </div>
      <div className="navbar-end md:flex-col">
        <div className="flex gap-20">
          <img
            className="object-scale-down h-10 inline-block md:hidden"
            src="/Icon.png"
          />
          <Link
            to="/"
            className="btn btn-ghost normal-case text-3xl hidden md:flex "
          >
            หน้าแรก
          </Link>
          <Link
            to="/about"
            className="btn btn-ghost normal-case text-3xl hidden lg:flex"
          >
            เกี่ยวกับ
          </Link>
          <Link
            to="/services"
            className="btn btn-ghost normal-case text-3xl hidden lg:flex"
          >
            บริการของเรา
          </Link>
          <div className="dropdown dropdown-end hidden md:flex lg:hidden">
            <label tabIndex={0} className="btn btn-ghost normal-case text-3xl m-1">
              อื่นๆ
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-slate-500 rounded-box w-max gap-5 mt-20"
            >
              <li>
                <Link to={"/about"} className="btn btn-ghost normal-case text-3xl text-white">เกี่ยวกับ</Link>
              </li>
              <li>
                <Link to={"/services"} className="btn btn-ghost normal-case text-3xl text-white">บริการของเรา</Link>
              </li>
            </ul>
          </div>
        </div>
        {/* <input type="text" placeholder="Search" className="input input-bordered rounded-full bg-white text-black w-full max-w-screen-md" /> */}
      </div>
    </div>
  );
}

export default Navbar;
