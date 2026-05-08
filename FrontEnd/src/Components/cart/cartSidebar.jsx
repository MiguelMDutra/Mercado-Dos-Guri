import React, { useState, useEffect } from 'react';
import './cartSidebar.css';
import { FaTimes } from 'react-icons/fa';
import axios from 'axios';

const CartSidebar = ({ isOpen, onClose }) => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, [isOpen]);

  useEffect(() => {
    if (cartItems.length > 0) {
      // console.log('Carrinho atualizado:', cartItems);
      // console.log('localStorage atual do carrinho:', localStorage.getItem('cart'));
    }
  }, [cartItems]);

  const loadCartItems = async () => {
    try {
        const userId = localStorage.getItem('userId');
        if (!userId) return;
    }
    catch (error) {
        console.error('Erro ao carregar itens do carrinho:', error);
        setError('Não foi possível carregar os itens do carrinho.');
    } finally {
        setLoading(false);
    }
  };

  const handleRemoveItem = async (productId) => {
    try {
        const userId = localStorage.getItem('userId');
        await axios.delete('/cart/remove', {
            data: {
                userId,
                productId
            }
        });
        await loadCartItems();
    }
    catch (error) {
        console.error('Erro ao remover item do carrinho:', error);
        setError('Não foi possível remover o item do carrinho.');
    }
    const updatedCart = cartItems.filter(item => item._id !== productId);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    // console.log('localStorage cart item removido:', updatedCart);
    // console.log('localStorage conteúdo completo:', localStorage);
  };

  const handleUpdateQuantity = async (productId, newQuantity) => {
    if (newQuantity <= 0) {
      handleRemoveItem(productId);
      return;
    }

    try {
        const userId = localStorage.getItem('userId');
        await axios.post('/cart/add', {
            userId,
            productId,
            qtd: 1
        });
    } catch (error) {
        console.error('Erro ao atualizar quantidade do item:', error);
        setError('Não foi possível atualizar a quantidade do item.');
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
    alert('Checkout ainda não foi implementado');
  };

  return (
    <>
      {isOpen && <div className="cart-overlay" onClick={onClose}></div>}

      <div className={`cart-sidebar ${isOpen ? 'open' : ''}`}>
        <div className="cart-sidebar-header">
          <h2>Carrinho</h2>
          <button className="close-btn" onClick={onClose}>
            <FaTimes />
          </button>
        </div>

        <div className="cart-sidebar-content">
          {cartItems.length === 0 ? (
            <div className="empty-cart-sidebar">
              <p>Seu carrinho está vazio</p>
            </div>
          ) : (
            <>
              <div className="cart-items-sidebar">
                {cartItems.map((item) => (
                  <div key={item._id} className="cart-item-sidebar">
                    <img
                      src={item.productImage || 'https://via.placeholder.com/360'}
                      alt={item.name}
                      className="item-image-sidebar"
                    />
                    <div className="item-details-sidebar">
                      <h4>{item.name}</h4>
                      <p className="item-price-sidebar">
                        R$ {Number(item.price || 0).toFixed(2).replace('.', ',')}
                      </p>

                      <div className="item-quantity-sidebar">
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

                      <div className="item-total-sidebar">
                        R${' '}
                        {(
                          Number(item.price || 0) * (item.quantity || 1)
                        )
                          .toFixed(2)
                          .replace('.', ',')}
                      </div>
                    </div>

                    <button
                      className="remove-btn-sidebar"
                      onClick={() => handleRemoveItem(item._id)}
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>

              <div className="cart-summary-sidebar">
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
                <div className="summary-row total">
                  <span>Total:</span>
                  <span>
                    R$ {calculateTotal().toFixed(2).replace('.', ',')}
                  </span>
                </div>

                <button className="checkout-btn-sidebar" onClick={handleCheckout}>
                  Ir para Checkout
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default CartSidebar;
