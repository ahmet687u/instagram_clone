import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { login } from "../../redux/actions/loginAction";
import { useNavigate, Link } from "react-router-dom";

import { GrFacebook } from "react-icons/gr";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password, navigate));
  };

  return (
    <div className="login__section">
      <div className="formBx">
        <h2>Instagram Clone</h2>
        <form>
          <input
            name="email"
            type="email"
            onChange={({ target }) => setEmail(target.value)}
            value={email}
            placeholder="Mail Giriniz"
          />
          <input
            name="password"
            type="password"
            onChange={({ target }) => setPassword(target.value)}
            value={password}
            placeholder="Şifre Giriniz"
          />
          <button
            className={!email || !password ? "disabled" : ""}
            onClick={handleSubmit}
          >
            Giriş Yap
          </button>
        </form>
        <div className="or__social-media">
          <span>YA DA</span>
        </div>
        <div className="social__media">
          <GrFacebook style={{ marginRight: "10px" }} />
          Facebook ile giriş yap
        </div>
        <div className="forgot__password">
          Şifrenimi Unuttun
        </div>
      </div>
      <div className="register__redirect">
      Hesabın yok mu? <Link to={"/register"}>Kaydol</Link>
      </div>
    </div>
  );
}
