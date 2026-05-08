import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './cart.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  const handleRemoveItem = (productId) => {
    const updatedCart = cartItems.filter(item => item._id !== productId);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    // console.log('localStorage cart item removido:', updatedCart);
    // console.log('localStorage conteúdo completo:', localStorage);
  };

  const handleUpdateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      handleRemoveItem(productId);
      return;
    }

    const updatedCart = cartItems.map(item =>
      item._id === productId ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    // console.log('localStorage cart quantidade atualizada:', updatedCart);
    // console.log('localStorage conteúdo completo:', localStorage);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      return total + (Number(item.price) * (item.quantity || 1));
    }, 0);
  };

  const handleCheckout = () => {
    // Placeholder para checkout
    alert('Checkout ainda não foi implementado');
  };

  return (
    <div className="cart-container">
      <header className="cart-header">
        <Link to="/" className="back-link">← Voltar</Link>
        <h1>Carrinho de Compras</h1>
      </header>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <p>Seu carrinho está vazio</p>
          <Link to="/" className="continue-shopping">
            Continuar Comprando
          </Link>
        </div>
      ) : (
        <div className="cart-content">
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item._id} className="cart-item">
                <img
                  src={item.productImage || 'https://via.placeholder.com/360'}
                  alt={item.name}
                  className="item-image"
                />
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p className="item-category">
                    {item.category || item.description}
                  </p>
                  <p className="item-price">
                    R$ {Number(item.price || 0).toFixed(2).replace('.', ',')}
                  </p>
                </div>

                <div className="item-quantity">
                  <button
                    onClick={() =>
                      handleUpdateQuantity(
                        item._id,
                        (item.quantity || 1) - 1
                      )
                    }
                  >
                    -
                  </button>
                  <input
                    type="number"
                    min="1"
                    value={item.quantity || 1}
                    onChange={(e) =>
                      handleUpdateQuantity(item._id, parseInt(e.target.value))
                    }
                  />
                  <button
                    onClick={() =>
                      handleUpdateQuantity(
                        item._id,
                        (item.quantity || 1) + 1
                      )
                    }
                  >
                    +
                  </button>
                </div>

                <div className="item-total">
                  R${' '}
                  {(
                    Number(item.price || 0) * (item.quantity || 1)
                  )
                    .toFixed(2)
                    .replace('.', ',')}
                </div>

                <button
                  className="remove-btn"
                  onClick={() => handleRemoveItem(item._id)}
                >
                  Remover
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h2>Resumo do Pedido</h2>
            <div className="summary-row">
              <span>Subtotal:</span>
              <span>
                R$ {calculateTotal().toFixed(2).replace('.', ',')}
              </span>
            </div>
            <div className="summary-row">
              <span>Frete:</span>
              <span>Calcular</span>
            </div>
            <div className="summary-row">
              <span>Desconto:</span>
              <span>R$ 0,00</span>
            </div>
            <div className="summary-row total">
              <span>Total:</span>
              <span>
                R$ {calculateTotal().toFixed(2).replace('.', ',')}
              </span>
            </div>

            <button className="checkout-btn" onClick={handleCheckout}>
              Ir para o Checkout
            </button>
            <Link to="/" className="continue-btn">
              Continuar Comprando
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
