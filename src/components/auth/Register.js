import React, { useState } from "react";
import { Link } from "react-router-dom";

import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => console.log("Kullanıcı başarıyla oluşturuldu"))
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
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
            Kayıt Ol
          </button>
        </form>
      </div>
      <div className="register__redirect">
        Hesabın var mı? <Link to={"/login"}>Giriş yap</Link>
      </div>
    </div>
  );
};
