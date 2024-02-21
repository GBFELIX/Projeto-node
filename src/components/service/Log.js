import React, { useState } from 'react';
import styles from './Log.module.css';
import { Link } from 'react-router-dom'

function Log() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginMessage, setLoginMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/users.json');
      const data = await response.json();
      const users = data.users;

      const user = users.find(u => u.username === username && u.password === password);

      if (user) {
        setLoginMessage('Login bem-sucedido!');
        window.location.href = "/Cadpartida";
      } else {
        setLoginMessage('Nome de usuário ou senha incorretos.');
      }
    } catch (error) {
      console.error('Erro ao carregar os usuários:', error);
    }
  };

  return (
    <div className="App">
      <div className="login-container">
        <form onSubmit={handleSubmit}>
          <div className='input-container'>
            <input
              type="text"
              placeholder="Nome de usuário"
              value={username}
              onChange={e => setUsername(e.target.value)}
              required
            />  
            </div>
          <div className='input-container'>
            <input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit"><h3>Acessar</h3></button>
        </form>
        <p style={{ color: loginMessage.includes('incorretos') ? 'red' : 'green' }}>{loginMessage}</p>
      </div>
    </div>
  );
}

export default Log;
