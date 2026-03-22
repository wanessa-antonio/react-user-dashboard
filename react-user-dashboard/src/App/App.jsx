import { useState } from 'react';
import './App.css';
import SearchBar from '../components/SearchBar/SearchBar';
import UserCard from '../components/UserCard/UserCard';

function App() {
  // estado de busca
  const [search, setSearch] = useState('');

  // dados (simulando backend)
  const users = ['Ana', 'João', 'Maria', 'Carlos'];

  // filtro
  const filteredUsers = users.filter((user) =>
    user.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="container">
      <h1 className="title">Dashboard de Usuários</h1>

      {/* input controlado */}
      <SearchBar value={search} onChange={setSearch} />

      {/* lista */}
      <section className="user-list">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user, index) => {
            return (
              <UserCard
                key={index}
                user={{
                  name: user,
                  email: `${user.toLowerCase()}@email.com`,
                }}
              />
            );
          })
        ) : (
          <p className="empty">Nenhum usuário encontrado</p>
        )}
      </section>
    </main>
  );
}

export default App;