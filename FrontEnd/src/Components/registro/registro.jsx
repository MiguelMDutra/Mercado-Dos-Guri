import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import { useState } from "react";
import "./registro.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/register", {
        nome: username,
        email,
        pwd: password,
      });
      alert("Registro bem-sucedido! Agora você pode fazer login.");
      navigate("/login");
    } catch (error) {
      alert("Erro ao registrar. Por favor, tente novamente.");
    }
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