import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from './db';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = db.users.find(user => 
      user.username === username && user.password === password
    );
    
    if (user) {
      setMessage(`¡Bienvenido, ${user.username}!`);
      setTimeout(() => {
        navigate('/home');
      }, 1000);
    } else {
      setMessage('Usuario o contraseña inválidos.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-content">
          {/* Logo */}
          <h1 className="logo">marco</h1>
          <p className="hashtag">#MuseoDeTodos</p>
          
          {/* Mensaje de error o éxito */}
          {message && (
            <div className={`message ${message.includes('Bienvenido') ? 'success' : 'error'}`}>
              {message}
            </div>
          )}
          
          {/* Formulario */}
          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label>Usuario</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Ingresa tu usuario"
              />
            </div>
            
            <div className="form-group">
              <label>Contraseña</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Ingresa tu contraseña"
              />
            </div>
            
            <button type="submit">
              Iniciar Sesión
            </button>
          </form>
        </div>
      </div>
      
      {/* Agregar estos estilos en tu archivo CSS */}
      <style>{`
        .login-container {
          min-height: 100vh;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('/api/placeholder/1920/1080');
          background-size: cover;
          background-position: center;
        }

        .login-card {
          width: 100%;
          max-width: 400px;
          padding: 2rem;
          background-color: #E91E63;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .login-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
        }

        .logo {
          font-size: 2.5rem;
          font-weight: bold;
          color: white;
          margin: 0;
        }

        .hashtag {
          color: white;
          font-size: 0.875rem;
          margin: 0;
        }

        .login-form {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .form-group label {
          color: white;
        }

        .form-group input {
          padding: 0.5rem 1rem;
          border-radius: 4px;
          border: none;
          background-color: rgba(255, 255, 255, 0.9);
        }

        button {
          width: 100%;
          padding: 0.5rem;
          background-color: white;
          color: #E91E63;
          border: none;
          border-radius: 4px;
          font-weight: 500;
          cursor: pointer;
          transition: background-color 0.2s;
        }

        button:hover {
          background-color: rgba(255, 255, 255, 0.9);
        }

        .message {
          width: 100%;
          padding: 0.75rem;
          border-radius: 4px;
          text-align: center;
          color: white;
        }

        .success {
          background-color: #4CAF50;
        }

        .error {
          background-color: #f44336;
        }
      `}</style>
    </div>
  );
};

export default LoginPage;
