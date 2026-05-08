import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./style.css";

function App() {
  const [userName, setUserName] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUserName = localStorage.getItem('userName');
    setUserName(storedUserName);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('userId');
    // console.log('localStorage userId removido');
    localStorage.removeItem('userName');
    // console.log('localStorage userName removido');
    // console.log('localStorage após logout:', localStorage);
    setUserName(null);
    navigate('/');
  };

  return (
    <>
      <header id="cabecalho">
        <div id="cabecalho1">
          <div id="cabecalhoo1">
            <img
              id="imgCaraPulando"
              src="/public/jordanInv.png"
              className="imgLogoInverte"
              alt="Logo Jordan"
            />
            <p id="pbike">
              BIKE
            </p>
          </div>
          <div id="cabecalhoo2">
            <p id="pgLogin">
              {userName ? (
                <>
                  <span id="userName" style={{ marginRight: '10px', fontWeight: 'bold' }}>
                    Olá, {userName}
                  </span>
                  <button
                    id="logoutBtn"
                    onClick={handleLogout}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#000',
                      fontWeight: 'bold',
                      cursor: 'pointer',
                      textDecoration: 'underline',
                    }}
                  >
                    Sair
                  </button>
                </>
              ) : (
                <Link
                  id="entrar"
                  to="/login"
                >
                  Entrar
                </Link>
              )}
            </p>
          </div>
        </div>
        <br id="brCabecalho" />
        <div id="cabecalho2">
          <Link to="/">
            <img
              src="/public/logoInvertido.png"
              id="logoInv"
              alt="Logo Nike"
            />
          </Link>
          <nav>
            <ul className="menu">
              <li>
                <Link to="">
                  Seleções
                </Link>
              </li>
              <li>
                <Link to="">
                  Ofertas
                </Link>
              </li>
              <li>
                <Link to="">
                  Lançamentos
                </Link>
              </li>
              <li>
                <Link to="">
                  Masculino
                </Link>
              </li>
              <li>
                <Link to="">
                  Feminino
                </Link>
              </li>
              <li>
                <Link to="">
                  Infantil
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <section id="vitrine">
        <div className="item">
          <img
            src="https://imgnike-a.akamaihd.net/360x360/09768053.jpg"
            alt="Tênis Metcon 7"
          />
          <div className="imgText">
            <p className="pnome">
              Tênis Bike Free
              Metcon 7
              Masculino
            </p>
            <p className="pTags">
              Treino &
              Academia
            </p>
            <p className="ppreco">
              R$ 949,99
            </p>
          </div>
        </div>

        <div className="item">
          <img
            src="https://imgnike-a.akamaihd.net/360x360/097736ID.jpg"
            alt="Tênis Pegasus 42"
          />
          <div className="imgText">
            <p className="pnome">
              Tênis Bike Air
              Zoom Pegasus 42
              Masculino
            </p>
            <p className="pTags">
              Corrida
            </p>
            <p className="ppreco">
              R$ 949,99
            </p>
          </div>
        </div>
        <div className="item">
          <img
            src="https://imgnike-a.akamaihd.net/360x360/097736IE.jpg"
            alt="Tênis Pegasus 42"
          />
          <div className="imgText">
            <p className="pnome">
              Tênis Bike Air
              Zoom Pegasus 42
              Masculino
            </p>
            <p className="pTags">
              Corrida
            </p>
            <p className="ppreco">
              R$ 949,99
            </p>
          </div>
        </div>

        <div className="item">
          <img
            src="https://imgnike-a.akamaihd.net/360x360/09773651.jpg"
            alt="Tênis Pegasus 42"
          />
          <div className="imgText">
            <p className="pnome">
              Tênis Bike Air
              Zoom Pegasus 42
              Masculino
            </p>
            <p className="pTags">
              Corrida
            </p>
            <p className="ppreco">
              R$ 949,99
            </p>
          </div>
        </div>

        <div className="item">
          <img
            src="https://imgnike-a.akamaihd.net/360x360/09764551.jpg"
            alt="Tênis Pegasus 42"
          />
          <div className="imgText">
            <p className="pnome">
              Tênis Bike Air
              Zoom Pegasus 42
              Masculino
            </p>
            <p className="pTags">
              Corrida
            </p>
            <p className="ppreco">
              R$ 949,99
            </p>
          </div>
        </div>

        <div className="item">
          <img
            src="https://imgnike-a.akamaihd.net/360x360/058889IE.jpg"
            alt="Tênis Revolution 8"
          />
          <div className="imgText">
            <p className="pnome">
              Tênis Bike
              Revolution 8
              Masculino
            </p>
            <p className="pTags">
              Corrida
            </p>
            <p className="ppreco">
              R$ 341,99
            </p>
          </div>
        </div>

        <div className="item">
          <img
            src="https://imgnike-a.akamaihd.net/360x360/01113751.jpg"
            alt="Tênis Air Force 1"
          />
          <div className="imgText">
            <p className="pnome">
              Tênis Bike Air
              Force 1 "07
              Masculino
            </p>
            <p className="pTags">
              Casual
            </p>
            <p className="ppreco">
              R$ 759,99
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
