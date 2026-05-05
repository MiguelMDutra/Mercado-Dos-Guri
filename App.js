// App.js
import React from 'react';
import './style.css';

function App() {
  return (
    <>
      <header id="cabecalho">
        <div id="cabecalho1">
          <div id="cabecalhoo1">
            <img
              id="imgCaraPulando"
              src="https://static.nike.com.br/v11-303-1/images/brands/jordan.svg"
              className="imgLogoInverte"
              alt="Logo Jordan"
            />
            <p id="pbike">BIKE</p>
          </div>
          <div id="cabecalhoo2">
            <p id="pgLogin">
              <a id="linkLogin" href="login.html">Entrar</a>
            </p>
          </div>
        </div>
        <br id="brCabecalho" />
        <div id="cabecalho2">
          <a href="index.html">
            <img
              src="https://static.nike.com.br/v11-303-1/images/brands/logo.svg"
              className="imgLogoInverte"
              alt="Logo Nike"
            />
          </a>
          <nav>
            <ul className="menu">
              <li><a href="selecoes.html">Seleções</a></li>
              <li><a href="ofertas.html">Ofertas</a></li>
              <li><a href="lancamentos.html">Lançamentos</a></li>
              <li><a href="masculino.html">Masculino</a></li>
              <li><a href="feminino.html">Feminino</a></li>
              <li><a href="infantil.html">Infantil</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <section id="vitrine">
        <div className="item">
          <img src="https://imgnike-a.akamaihd.net/360x360/09768053.jpg" alt="Tênis Metcon 7" />
          <div className="imgText">
            <p className="pnome">Tênis Bike Free Metcon 7 Masculino</p>
            <p className="pTags">Treino & Academia</p>
            <p className="ppreco">R$ 949,99</p>
          </div>
        </div>

        <div className="item">
          <img src="https://imgnike-a.akamaihd.net/360x360/097736ID.jpg" alt="Tênis Pegasus 42" />
          <div className="imgText">
            <p className="pnome">Tênis Bike Air Zoom Pegasus 42 Masculino</p>
            <p className="pTags">Corrida</p>
            <p className="ppreco">R$ 949,99</p>
          </div>
        </div>
        <div className="item">
  <img src="https://imgnike-a.akamaihd.net/360x360/097736IE.jpg" alt="Tênis Pegasus 42" />
  <div className="imgText">
    <p className="pnome">Tênis Bike Air Zoom Pegasus 42 Masculino</p>
    <p className="pTags">Corrida</p>
    <p className="ppreco">R$ 949,99</p>
  </div>
</div>

<div className="item">
  <img src="https://imgnike-a.akamaihd.net/360x360/09773651.jpg" alt="Tênis Pegasus 42" />
  <div className="imgText">
    <p className="pnome">Tênis Bike Air Zoom Pegasus 42 Masculino</p>
    <p className="pTags">Corrida</p>
    <p className="ppreco">R$ 949,99</p>
  </div>
</div>

<div className="item">
  <img src="https://imgnike-a.akamaihd.net/360x360/09764551.jpg" alt="Tênis Pegasus 42" />
  <div className="imgText">
    <p className="pnome">Tênis Bike Air Zoom Pegasus 42 Masculino</p>
    <p className="pTags">Corrida</p>
    <p className="ppreco">R$ 949,99</p>
  </div>
</div>

<div className="item">
  <img src="https://imgnike-a.akamaihd.net/360x360/058889IE.jpg" alt="Tênis Revolution 8" />
  <div className="imgText">
    <p className="pnome">Tênis Bike Revolution 8 Masculino</p>
    <p className="pTags">Corrida</p>
    <p className="ppreco">R$ 341,99</p>
  </div>
</div>

<div className="item">
  <img src="https://imgnike-a.akamaihd.net/360x360/01113751.jpg" alt="Tênis Air Force 1" />
  <div className="imgText">
    <p className="pnome">Tênis Bike Air Force 1 "07 Masculino</p>
    <p className="pTags">Casual</p>
    <p className="ppreco">R$ 759,99</p>
  </div>
</div>

      </section>
    </>
  );
}

export default App;
