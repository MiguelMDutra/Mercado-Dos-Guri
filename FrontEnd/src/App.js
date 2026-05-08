// App.js
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import './style.css';
import axios from 'axios';
import CartSidebar from './Components/cart/cartSidebar';

async function fetchProducts() {
  const response = await axios.get('/products', { timeout: 5000 });
  return response.data;
}

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userName, setUserName] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    const existingCart = localStorage.getItem('cart');
    let cartItems = existingCart ? JSON.parse(existingCart) : [];

    const existingItem = cartItems.find(item => item._id === product._id);

    if (existingItem) {
      existingItem.quantity = (existingItem.quantity || 1) + 1;
    } else {
      cartItems.push({ ...product, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cartItems));
    // console.log('localStorage cart atualizado:', cartItems);
    // console.log('localStorage conteúdo completo:', localStorage);
    alert('Produto adicionado ao carrinho!');
  };

  useEffect(() => {
    async function loadProducts() {
      try {
        const productList = await fetchProducts();
        setProducts(Array.isArray(productList) ? productList : []);
      } catch (fetchError) {
        console.error('Erro ao carregar produtos:', fetchError);
        setError('Não foi possível carregar os produtos.');
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

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
              src="https://static.nike.com.br/v11-303-1/images/brands/jordan.svg"
              className="imgLogoInverte"
              alt="Logo Jordan"
            />
            <p id="pbike">BIKE</p>
          </div>
          <div id="cabecalhoo2">
            <div id="headerActions">
              <button
                id="cartBtn"
                onClick={() => setIsCartOpen(true)}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '20px',
                  cursor: 'pointer',
                  color: '#708090',
                  marginRight: '15px',
                }}
              >
                <FaShoppingCart />
              </button>
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
                        color: '#708090',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        textDecoration: 'underline',
                      }}
                    >
                      Sair
                    </button>
                  </>
                ) : (
                  <Link id="linkLogin" to="/login">Entrar</Link>
                )}
              </p>
            </div>
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
        {loading && <p>Carregando produtos...</p>}
        {error && <p>{error}</p>}
        {!loading && !error && products.length === 0 && (
          <p>Nenhum produto disponível no momento.</p>
        )}
        {!loading && !error && products.map((product) => (
          <div key={product._id || product.id || product.name} className="item">
            <img
              src={product.productImage || 'https://via.placeholder.com/360'}
              alt={product.name || 'Produto'}
              className='itemImg'
            />
            <div className="imgText">
              <p className="pnome">{product.name}</p>
              <p className="pTags">{product.category || product.description}</p>
              <p className="ppreco">
                R$ {Number(product.price || 0).toFixed(2).replace('.', ',')}
              </p>
              <button
                className="addToCartBtn"
                onClick={() => handleAddToCart(product)}
              >
                Adicionar ao Carrinho
              </button>
            </div>
          </div>
        ))}
      </section>

      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}

export default App;