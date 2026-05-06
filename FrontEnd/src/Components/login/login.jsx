import { FaUser, FaLock } from 'react-icons/fa';
import { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="wrapper">
    <div className="container">
      <form onSubmit={handleSubmit}>
        <img src="public/swooshinvertido.png" alt="Logo" className="logo" />
        <h1>Acesse o sistema</h1>

        <div className="input-field">
          <input
            type="email"
            placeholder="E-mail"
            onChange={(e) => setUsername(e.target.value)}
          />
          <FaUser className="icon" />
        </div>

        <div className="input-field">
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <FaLock className="icon" />
        </div>

         <button type="submit">Entrar</button>

        <div className="recall-forget">
          <label>
            <input type="checkbox" />
            Lembre de mim?
          </label>
        </div>
        <div className="entrar-link">
          <p>
        Não tem uma conta? <Link to="/registro">Registrar</Link>
         </p>
        </div>
      </form>
    </div>
    </div>
  );
};

export default Login;