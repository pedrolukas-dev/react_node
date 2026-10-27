import { useState } from 'react';
import './index.css';

function AdicionarUsuarios() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [usuarios, setUsuarios] = useState([]);

  const FuncaoAdiconarUsuario = (e) => {
    e.preventDefault(); // Correção: "preventDefault" começa com letra minúscula
    const novoUsuario = { nome, email };
    setUsuarios([...usuarios, novoUsuario]);
    setNome('');
    setEmail('');
  };


  return (
    <div>
      <h1>Adicionar Usuários</h1>
      {/* Correção: "form" estava escrito como "from" e precisava do onSubmit */}
      <form onSubmit={FuncaoAdiconarUsuario}>
        <label htmlFor="nome">Nome:</label>
        {/* Adicionado value e onChange para conectar o input ao estado */}
        <input
          type="text"
          id="nome"
          name="nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <label htmlFor="email">Email:</label>
        {/* Adicionado value e onChange para conectar o input ao estado */}
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="submit">Adicionar</button>
      </form>
    </div>
  );
}

export default AdicionarUsuarios;