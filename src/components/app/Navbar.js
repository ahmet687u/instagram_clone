import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { loginSuccess } from "../../redux/actions/loginAction";
import { useDispatch } from "react-redux";

import { BiSearchAlt2 } from "react-icons/bi";
import { AiFillHome, AiOutlineHeart, AiOutlineUser } from "react-icons/ai";
import { FiSend } from "react-icons/fi";
import { BsPlusSquare } from "react-icons/bs";
import { FaRegCompass } from "react-icons/fa";

export default function Navbar() {
  const dispatch = useDispatch();
  const logout = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      dispatch(loginSuccess(null));
    });
  };

  return (
    <header className="navbar">
      <div className="navbar__logo">Instagram Clone</div>
      <div className="navbar__search">
        <BiSearchAlt2 />
        <input name="search" placeholder="Ara" />
      </div>
      <nav>
        <ul>
          <li>
            <AiFillHome />
          </li>
          <li>
            <FiSend />
          </li>
          <li>
            <BsPlusSquare />
          </li>
          <li>
            <FaRegCompass />
          </li>
          <li>
            <AiOutlineHeart />
          </li>
          <li onClick={logout}>
            <AiOutlineUser />
          </li>
        </ul>
      </nav>
    </header>
  );
}
