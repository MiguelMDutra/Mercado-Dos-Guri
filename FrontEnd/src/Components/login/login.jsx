import { FaUser, FaLock } from 'react-icons/fa';
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage("");

    try {
      const response = await axios.post("/login", {
        email,
        pwd: password,
      });
      localStorage.setItem("userId", response.data.id);
      // console.log('localStorage userId:', response.data.id);
      localStorage.setItem("userName", response.data.nome);
      // console.log('localStorage userName:', response.data.nome);
      // console.log('localStorage após login:', localStorage);
      navigate("/");
    } catch (error) {
      const backendMessage =
        typeof error?.response?.data === "string"
          ? error.response.data
          : error?.response?.data?.message;

      setErrorMessage(
        backendMessage || "Erro ao fazer login. Tente novamente."
      );
    }
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FaUser className="icon" />
        </div>

        <div className="input-field">
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FaLock className="icon" />
        </div>

        {errorMessage && <p className="error-message">{errorMessage}</p>}

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