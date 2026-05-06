import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import { useState } from "react";
import "./registro.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="wrapper">
    <div className="container">
      <form onSubmit={handleSubmit}>
        <img src="public/swooshinvertido.png" alt="Logo" className="logo" />
        <h1>Criar conta</h1>

        <div className="input-field">
          <input
            type="text"
            placeholder="Usuário"
            onChange={(e) => setUsername(e.target.value)}
          />
          <FaUser className="icon" />
        </div>

        <div className="input-field">
          <input
            type="email"
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
          />
          <FaEnvelope className="icon" />
        </div>

        <div className="input-field">
          <input
            type="password"
            placeholder="Senha"
            onChange={(e) => setPassword(e.target.value)}
          />
          <FaLock className="icon" />
        </div>

        <button type="submit">Registrar</button>

        <div className="entrar-link">
          <p>
            Já tem uma conta? <a href="/">Entrar</a>
          </p>
        </div>
      </form>
    </div>
    </div>
  );
};

export default Register;