import { useEffect, useRef, useState } from "react";
import { useNavigate, useLocation, Link, NavLink, useParams } from "react-router-dom";
import inc_logo from "../../../assets/images/logo.png";
import "../../../components/styles/navbar.css";
import { IoClose } from "react-icons/io5";
import { logoutAdmin } from "../../../api/index";
import { toast } from "../../../components/index";

import { MdKeyboardArrowDown } from "react-icons/md";
import { Buttons } from "../../../components";
import Cookies from "js-cookie";

function JudgeNavbar() {
  const [selected, setSelected] = useState("#home");
  const mobileMenuRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const [navbar, setNavbar] = useState(true)

  const [jid, setjid] = useState('')

  useEffect(() => {
    setSelected(location?.hash || "#home");
    const judge = Cookies.get('jid');
    setjid(judge)
  }, [location]);

  function toggleMenu() {
    setShowOptions(false)
    setshowCommitteeOptions(false)
    mobileMenuRef.current.classList.toggle("hidden");
    navbar ? setNavbar(false) : setNavbar(true)
  }

  const handleLogout = () => {
    logoutAdmin()
    Cookies.remove('jid')
    Cookies.remove('judgedetails')

    toast.success('logged out')
    navigate('/auth')
  };




  const [showOptions, setShowOptions] = useState(false);
  const [showCommitteeOptions, setshowCommitteeOptions] = useState(false);

  const closeNavbar = () => {
    setShowOptions(false)
    mobileMenuRef.current.classList.toggle("hidden");
    navbar ? setNavbar(false) : setNavbar(true)
  };

  const closeCommittee = () => {
    setshowCommitteeOptions(false)
    mobileMenuRef.current.classList.toggle("hidden");
    navbar ? setNavbar(false) : setNavbar(true)
  }


  return (
    <>
      {/* <div className="z-999 w-full bg-[#000] text-center p-4">
        <span className="text-gold font-bold text-xl">Notice: </span><Link to='/allocations/labs' className="underline decoration-dotted decoration-gold underline-offset-4 text-2xl">Click Here for Lab Allocations</Link>
      </div> */}
      <nav className="navbar sticky w-full ">
        <div className="shadow-lg shadow-light_blue/20  w-full  border border-light_blue/50 bg-light_blue/30 backdrop-blur">
          <div className="max-w-full mx-auto px-4 py-2 text-white">
            <div className="flex justify-between text-lg">
              <div className="flex space-x-7">
                <Link
                  to={`/judge/${jid}`}
                  className="flex items-center py-4 px-2"
                >
                  <img src={inc_logo} alt="inc_Logo" className="h-12 w-12 mr-2" />
                  <span className="font-black text-white text-2xl">
                    PICT InC 2024
                  </span>
                </Link>
              </div>
              <div className="hidden lg:flex items-center justify-content space-x-3">
                <NavLink to={`/judge/${jid}`}
                  className={`py-4 px-2 font-semibold transition duration-300`}
                >
                  Home
                </NavLink>
                <NavLink to='allocation-details'
                  className={`py-4 px-2  font-semibold transition duration-300 `}
                >
                  Allocated Projects
                </NavLink>

                <NavLink
                  to="profile"
                  activeClassName="active"
                  className={`py-4 px-2  font-semibold transition duration-300`}
                >
                  Profile
                </NavLink>
                <Buttons value={'Logout'} onClick={handleLogout} />
              </div>

              <div className="lg:hidden flex items-center">
                {navbar ? <button
                  className="outline-none menu-button"
                  onClick={(_) => toggleMenu()}
                >
                  <svg
                    className="w-8 h-8 text-light_blue/80"
                    x-show="! showMenu"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 00 24 24"
                    stroke="currentColor"
                  >
                    <path d="m4 6h16M4 12h16M4 18h16"></path>
                  </svg>
                </button> : <button
                  className="outline-none menu-button"
                  onClick={(_) => toggleMenu()}
                >
                  <IoClose className=" text-3xl font-extrabold text-light_blue/80" />

                </button>}

              </div>
            </div>
          </div>

          <div
            className="hidden lg:hidden mobile-menu text-center flex item-center flex-col m-auto w-1/2"
            ref={mobileMenuRef}
          >
            <NavLink to={`/judge/${jid}`}
              className={`py-4 px-2 font-semibold transition duration-300`}
              onClick={closeNavbar}
            >
              Home
            </NavLink>
            <NavLink to='allocation-details'
              className={`py-4 px-2  font-semibold transition duration-300 `}
              onClick={closeNavbar}
            >
              Allocated Projects
            </NavLink>

            <NavLink
              to="profile"
              activeClassName="active"
              className={`py-4 px-2  font-semibold transition duration-300`}
              onClick={closeNavbar}
            >
              Profile
            </NavLink>
            <Buttons value={'Logout'} onClick={handleLogout} className='mb-5' />

          </div>
        </div>
      </nav >
    </>
  );
}

export default JudgeNavbar;
