import { Link } from "react-router-dom";
import Navbar from "../components/RootLayout/Navbar";

export default function Home() {
  return (
    <>
      <div
        className="hero min-h-screen object-bottom flex-col"
        style={{
          backgroundImage: "url(/BG.jpg)",
        }}
      >
        <Navbar />
        <div className="hero-overlay bg-opacity-20"></div>
        <div className="hero-content flex-col text-center text-neutral-content">
          <div className="my-20"></div>
          <div className="stack">
            <h1 className="text-white text-7xl">JAPAN EXPRESS</h1>
            <div className="bg-red-600 mr-96 rounded-full w-20 h-20"></div>
          </div>
          <div className="my-20"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="stack">
              <Link to="/" className="btn btn-white rounded-full text-xl">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                </span>
                วิธีการสั่งซื้อสินค้า
              </Link>
              <div className="card w-96 bg-base-100 shadow-xl border-blue-900 border-8">
                <img
                  className="object-cover object-bottom hover:object-scale-down hover:animate-spin h-64"
                  src="/media1.jpg"
                />
              </div>
            </div>
            <div className="stack">
              <Link
                to="/"
                className="btn btn-white rounded-full text-xl hover:animate-bounce"
              >
                วิธีคิดราคา
              </Link>
              <div className="card w-96 bg-base-100 shadow-xl border-blue-900 border-8">
                <img className="object-cover h-64" src="/media2.jpg" />
              </div>
            </div>
            <div className="stack">
              <Link to="/" className="btn btn-white rounded-full text-xl">
                ติดต่อ
              </Link>
              <div className="card w-96 bg-base-100 shadow-xl border-blue-900 border-8">
                <img className="object-cover h-64" src="/media3.jpg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
