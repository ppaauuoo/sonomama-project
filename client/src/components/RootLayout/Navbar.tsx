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
    <div className="navbar bg-base-500 p-10">
      <div className="flex-none sm:hidden">
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
        <img src="/Logo.png" />
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
      <div className="navbar-end flex-col">
        <div className="flex gap-20 my-10">
          <Link
            to="/"
            className="btn btn-ghost normal-case text-2xl hidden sm:flex "
          >
            หน้าแรก
          </Link>
          <Link
            to="/about"
            className="btn btn-ghost normal-case text-2xl hidden sm:flex"
          >
            เกี่ยวกับ
          </Link>
          <Link
            to="/services"
            className="btn btn-ghost normal-case text-2xl hidden sm:flex"
          >
            บริการของเรา
          </Link>
        </div>
        <input type="text" placeholder="Search" className="input input-bordered w-max rounded-full bg-white text-black" />
      </div>
    </div>
  );
}

export default Navbar;
